"""Panggil relay MCP Framer langsung lewat HTTP, tanpa connector.

Dipakai saat connector Framer tidak aktif di sesi Claude. Endpoint-nya bicara
JSON-RPC 2.0 biasa, jadi cukup POST.

URL relay memuat token pribadi, jadi TIDAK ditulis di file ini — ambil dari
environment variable FRAMER_MCP.

    export FRAMER_MCP='https://.../mcp?userId=...'
    python3 scripts/framer_rpc.py tools
    python3 scripts/framer_rpc.py call pages_list
    python3 scripts/framer_rpc.py call nodes_getChildren '{"nodeId":"abc"}'
    python3 scripts/framer_rpc.py setfile <codeFileId> <path/ke/file.ts>
"""

import json
import os
import subprocess
import sys

URL = os.environ.get("FRAMER_MCP")
if not URL:
    sys.exit("FRAMER_MCP belum di-set. export FRAMER_MCP='<url relay>'")

_id = [0]


def rpc(method, params=None, timeout=120):
    _id[0] += 1
    payload = {"jsonrpc": "2.0", "id": _id[0], "method": method}
    if params is not None:
        payload["params"] = params
    # Lewat curl, bukan urllib: outbound HTTPS di lingkungan ini menembus agent
    # proxy, dan curl sudah terkonfigurasi untuk itu (urllib kena 403).
    hasil = subprocess.run(
        [
            "curl", "-sS", "--fail-with-body", "-m", str(timeout),
            "-X", "POST", URL,
            "-H", "Content-Type: application/json",
            "-H", "Accept: application/json, text/event-stream",
            "--data-binary", "@-",
        ],
        input=json.dumps(payload).encode(),
        capture_output=True,
    )
    if hasil.returncode != 0:
        raise SystemExit(
            f"curl gagal ({hasil.returncode}): {hasil.stderr.decode()[:400]}"
        )
    body = hasil.stdout.decode()
    # Endpoint bisa membalas sebagai SSE; ambil baris data-nya.
    if body.lstrip().startswith("event:") or body.lstrip().startswith("data:"):
        for baris in body.splitlines():
            if baris.startswith("data:"):
                body = baris[5:].strip()
                break
    out = json.loads(body)
    if "error" in out:
        raise SystemExit(f"RPC error: {json.dumps(out['error'], ensure_ascii=False)}")
    return out.get("result")


def isi(hasil):
    """Ambil teks dari hasil tools/call, yang dibungkus content[]."""
    if isinstance(hasil, dict) and "content" in hasil:
        potong = [c.get("text", "") for c in hasil["content"] if c.get("type") == "text"]
        return "\n".join(potong)
    return json.dumps(hasil, ensure_ascii=False)


def main():
    if len(sys.argv) < 2:
        sys.exit(__doc__)
    perintah = sys.argv[1]

    rpc("initialize", {
        "protocolVersion": "2025-03-26",
        "capabilities": {},
        "clientInfo": {"name": "claude-code", "version": "1.0"},
    })

    if perintah == "tools":
        alat = rpc("tools/list").get("tools", [])
        print(f"{len(alat)} tool")
        for a in sorted(alat, key=lambda x: x["name"]):
            print(" ", a["name"])

    elif perintah == "call":
        nama = sys.argv[2]
        args = json.loads(sys.argv[3]) if len(sys.argv) > 3 else {}
        print(isi(rpc("tools/call", {"name": nama, "arguments": args})))

    elif perintah == "setfile":
        cid, path = sys.argv[2], sys.argv[3]
        kode = open(path, encoding="utf-8").read()
        print(isi(rpc("tools/call", {
            "name": "codeFiles_setContent",
            "arguments": {"id": cid, "code": kode},
        })))

    else:
        sys.exit(__doc__)


if __name__ == "__main__":
    main()
