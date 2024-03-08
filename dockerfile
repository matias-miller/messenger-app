# Use an official Node.js runtime as a base image
FROM node:14-alpine as builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json for the frontend
COPY package*.json ./

# Install frontend dependencies
RUN npm install --silent

# Copy the rest of the frontend source code to the working directory
COPY . .

# Build the frontend
RUN npm run build

# Expose port 3000 for the frontend
EXPOSE 3000

# Install MongoDB
RUN apk add --no-cache mongodb

# Create a directory to store MongoDB data
RUN mkdir -p /data/db

# Start MongoDB
CMD ["mongod", "--bind_ip_all", "--port", "27017", "--dbpath", "/data/db"] & npm start
