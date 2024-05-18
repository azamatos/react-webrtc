# Stage 1: Build the frontend assets
FROM node:20 as build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json yarn.lock config.js ./

# Install dependencies
RUN npm install

# Copy the client source code
COPY . ./

# Build the client assets
RUN npm run build

# Stage 2: Serve the frontend assets
FROM node:20

# Set the working directory
WORKDIR /app

# Copy the build output from the previous stage
COPY --from=build /app .

# Expose the port the app runs on
EXPOSE 5000

# Serve the frontend assets
CMD ["npm", "run", "start"]
