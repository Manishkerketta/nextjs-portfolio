# Stage 1: Build the application
FROM node:lts-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install --frozen-lockfile
COPY . .
RUN npm run build

# Stage 2: Production image, copy only necessary files
FROM node:lts-alpine AS runner
WORKDIR /app
ENV NODE_ENV production

# Copy necessary files from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Install only production dependencies
RUN npm install --omit=dev --frozen-lockfile

# Expose the port your Next.js app runs on (default is 3000)
EXPOSE 3000

# Command to start the Next.js server in production
CMD ["npm", "start"]