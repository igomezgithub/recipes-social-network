# Use NodeJS base image
FROM node:lts-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies by copying
# package.json and package-lock.json
COPY ./dist/apps/recipe .

# Clean and install dependencies
RUN npm ci --production

# Bundle app source
COPY . .

# Bind the port that the image will run on
EXPOSE 8080

# Define the Docker image's behavior at runtime
CMD ["node", "./main.js"]
