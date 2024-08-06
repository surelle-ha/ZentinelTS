# Use the official Node.js image as the base image
FROM node:18 AS build

# Install global dependencies
RUN npm install -g depcheck cross-env nodemon

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package.json ./
COPY package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the TypeScript code
RUN npm run build

# Expose the application port
EXPOSE 8800

# Start the application
CMD ["npm", "run", "start:dev"]
