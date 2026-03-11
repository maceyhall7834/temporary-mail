Minimal OpenWebUI proxy + persistence for Render deployment.

Required env vars:
- MONGO_URI
- DB_NAME (optional, default: openwebui)
- WEBUI_SECRET_KEY (required, stable across restarts)
- ADMIN_EMAIL
- ADMIN_PASSWORD
- ADMIN_TOKEN
- PROVIDERS_PATH (optional, default config/providers.json)
- OPENWEBUI_SERVE_CMD (optional, default "open-webui serve --no-local-models")
- Any provider token envs referenced by config/providers.json (e.g., OPENAI_KEY)

Repo layout:
- main.py
- Dockerfile
- render.yaml
- requirements.txt
- config/providers.json
- brand/logo.png (add your image)
- brand/name.txt (default name)

Notes:
- Ensure WEBUI_SECRET_KEY is set and stable so sessions/cookies survive restarts.
- Use ADMIN_TOKEN to protect admin endpoints; replace with stronger auth for production.
- Adjust OPENWEBUI_SERVE_CMD if CLI flags differ in your installed version.
