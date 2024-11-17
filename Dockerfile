# Use the official Node.js 18 image as the base
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Expose the port your app runs on (default for Express apps is 3000)
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
