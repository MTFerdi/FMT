# --- Build stage ---
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
# Expect REACT_APP_* env at build-time if needed
RUN npm run build

# --- Runtime stage (nginx) ---
FROM nginx:1.27-alpine
# Copy build to nginx html
COPY --from=build /app/build /usr/share/nginx/html
# Replace default server config to support SPA + path prefixes
RUN rm /etc/nginx/conf.d/default.conf
COPY <<'NGINX' /etc/nginx/conf.d/app.conf
server {
    listen       8088;             # unconventional local port (Ingress will expose 80/443 on AKS)
    server_name  _;

    root   /usr/share/nginx/html;
    index  index.html;

    # SPA fallback
    location / {
        try_files $uri /index.html;
    }
}
NGINX
EXPOSE 8088
HEALTHCHECK --interval=30s --timeout=5s --retries=3 CMD wget -qO- http://127.0.0.1:8088/ || exit 1
