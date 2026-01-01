# ---------- Build stage ----------
FROM node:18-alpine AS build

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy source code
COPY . .

# Build the frontend
RUN npm run build


# ---------- Production stage ----------
FROM nginx:alpine

# Copy built files to nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
