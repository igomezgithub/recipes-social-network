# Use NodeJS base image
FROM node:12-alpine

ENV NODE_ENV development

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
COPY workspace.json ./

# Clean and install dependencies
RUN npm ci

# Bundle app source
COPY . .

# Bind the port that the image will run on
EXPOSE 4200

# Define the Docker image's behavior at runtime
# CMD ["node", "./main.js"]
CMD ["npx", "nx", "serve", "recipe"]
