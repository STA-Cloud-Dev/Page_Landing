# STACloud Service Board

Landing page chính thức của STACloud, giới thiệu portal, VPS, các gói dịch vụ cộng đồng, hướng dẫn đăng ký và chính sách sử dụng.

## Run local

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Run on Pterodactyl

This project exports a static site to `out/` and serves it with the lightweight Node entrypoint `server.js`.

```bash
npm ci
npm run build
npm start
```

Pterodactyl settings:

```txt
User Uploaded Files: 0
Auto Update: 1
Main file: server.js
Additional Node packages:
Additional Arguments:
```

For a Git repository, use this Startup command so the panel clones, updates and rebuilds the site before starting:

```bash
if [ "{{USER_UPLOAD}}" = "0" ]; then if [ -n "{{GIT_ADDRESS}}" ] && [ ! -d ".git" ]; then if [ -n "{{BRANCH}}" ]; then git clone --depth 1 --single-branch --branch "{{BRANCH}}" "{{GIT_ADDRESS}}" .; else git clone --depth 1 "{{GIT_ADDRESS}}" .; fi; fi; if [ "{{AUTO_UPDATE}}" = "1" ] && [ -d ".git" ]; then git pull --ff-only; fi; if [ ! -d "node_modules" ] || [ ! -f "out/index.html" ] || [ "{{AUTO_UPDATE}}" = "1" ]; then npm ci && npm run build; fi; fi; node "/home/container/{{MAIN_FILE}}"
```

Set `SERVER_PORT` through the Pterodactyl allocation. `server.js` also accepts `PORT` and defaults to `3000` for local use.

GitHub Pages remains supported: the existing workflow still runs `npm run build` and deploys the generated `out/` directory.
