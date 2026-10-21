# STACloud Service Board

Landing page chính thức của STACloud, giới thiệu portal, VPS, các gói dịch vụ cộng đồng, hướng dẫn đăng ký và chính sách sử dụng.

Website công khai: `https://stacloud.eu.cc`. Portal riêng tư:
`https://portal.stacloud.eu.cc`. Sitemap chỉ gồm 7 trang công khai; không thêm
Admin, account hoặc server khách vào sitemap. Robots, metadata và canonical
phải dùng domain mới khi build. Favicon PNG hiện có kích thước 500×500, ICO có
đường dẫn dự phòng `/favicon.ico`.

Ngày 14/10/2026 đã chuyển vhost Caddy và các URL từ domain cũ sang domain mới,
khôi phục container website trên port 4002, và gửi sitemap vào Search Console.
Việc gửi sitemap không đảm bảo Google đã lập chỉ mục hoặc đã cập nhật favicon.

## Run local

Source archives do not need `node_modules/`, `.next/`, `out/` or `*.tsbuildinfo`.
Keep `package.json`, `package-lock.json`, `server.js`, configuration files,
`app/`, `components/`, `lib/`, `public/` and `.github/`.
After uploading source to the panel, run `npm ci` and `node server.js`.
The server creates `out/` automatically if the production build is missing.
Upload generated static files inside `out/`, not directly into the source root.

Direct HTTP allocations such as port 30000 do not serve HTTPS. The Node server
only adds CSP `upgrade-insecure-requests` when the reverse proxy reports HTTPS.

```bash
npm install
npm run dev
```

## Build

Runtime and Linux distribution icons in `public/egg-icons/` come from Devicon
(https://github.com/devicons/devicon). Its license is included in that directory.
The Minecraft grass block and generic server symbols are local illustrations.
OpenClaw uses the favicon from its official repository (openclaw/openclaw).
The LavaLink icon was supplied by the site owner and resized for the catalog.
The circular Ubuntu symbol comes from Simple Icons (simple-icons/simple-icons);
its license is included in `public/egg-icons/LICENSE-simple-icons.md`.

```bash
npm run build
```

## Run on STACloud Container Engine

This project exports a static site to `out/` and serves it with the lightweight Node entrypoint `server.js`.

```bash
npm ci
npm run build
npm start
```

STACloud Container settings:

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

Set `SERVER_PORT` through the STACloud allocation. `server.js` also accepts `PORT` and defaults to `3000` for local use.

GitHub Pages remains supported: the existing workflow still runs `npm run build` and deploys the generated `out/` directory.
