# --- Build deps (smaller prod image) ---
FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev

# --- Runtime ---
FROM node:20-alpine
ENV NODE_ENV=production
WORKDIR /app
# Copy node_modules from deps
COPY --from=deps /app/node_modules ./node_modules
# Copy source
COPY . .
# Default port (can be overridden)
ENV PORT=3001
EXPOSE 3001
# Healthcheck (adjust path if needed)
HEALTHCHECK --interval=30s --timeout=5s --retries=3 CMD wget -qO- http://127.0.0.1:${PORT}/health || exit 1
CMD ["npm","start"]
