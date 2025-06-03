FROM node:latest
WORKDIR /app
ADD package*.json ./
RUN npm install
ADD . .
RUN npm install
CMD node --watch index.js