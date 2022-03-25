# syntax = docker/dockerfile:1.0-experimental
FROM node:latest
WORKDIR /app
COPY ./dist /app
COPY ./tsconfig.json /app
COPY package.json /app
COPY package-lock.json /app
RUN --mount=type=secret,id=npmrc,dst=/app/.npmrc npm i
CMD ["node", "./index.js"]