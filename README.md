# FMT — Microservices on AKS (ferdi)

**Services**
- /api/auth → auth (Node.js)
- /api/discounts → discounts (Node.js)
- /api/items → items (Node.js)
- / → client (React → NGINX 8088)

**Live ingress**
- Public IP: 145.133.88.88
- IngressClass: `nginx-ferdi`
- Namespace: `ferdi`
- Cluster: `aks-ferdi-uksouth` (uksouth)
- ACR: `ferdiacruksouth.azurecr.io/ironhack.final.project`

## Local build (optional)
```bash
docker build -t fmtorres/auth:dev backend/auth
docker build -t fmtorres/discounts:dev backend/discounts
docker build -t fmtorres/items:dev backend/items
docker build -t fmtorres/client:dev client



```

## CI/CD Status
[![ferdi-ci-cd](https://github.com/MTFerdi/FMT/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/MTFerdi/FMT/actions/workflows/ci-cd.yml)

## Live
- HTTPS: https://fmt.145-133-88-88.sslip.io/
- IngressClass: \`nginx-ferdi\` • Namespace: \`ferdi\`

## Smoke
[![Ingress smoke](https://github.com/MTFerdi/FMT/actions/workflows/ci-cd.yml/badge.svg?event=push)](https://github.com/MTFerdi/FMT/actions/workflows/ci-cd.yml)
