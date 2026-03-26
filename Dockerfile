# ==================================================
# STAGE 1: Build
# ==================================================
FROM node:18.0-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

# Build Storybook static files
RUN npm run build-storybook

# ==================================================
# STAGE 2: Runtime for Storybook
# ==================================================
FROM node:18.0-alpine

WORKDIR /app

# Install a simple http server to serve the static Storybook files
RUN npm install -g serve

# Copy only the built Storybook files
COPY --from=builder /app/storybook-static ./storybook-static

# Serve the static Storybook files on port 6006 (exposed via docker run -p)
CMD ["serve", "-s", "storybook-static", "-l", "6006"]