# Use NodeJS base image
FROM node:lts-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies by copying
COPY ./dist/apps/recipe .
COPY ./dist/libs/frontend/recipe .

# Clean and install dependencies
RUN npm install && \
  npm ci --production --progress=false --no-audit --loglevel=error

# Bundle app source
COPY . .

# Bind the port that the image will run on
EXPOSE 8080

# Define the Docker image's behavior at runtime
CMD ["node", "./main.js"]
