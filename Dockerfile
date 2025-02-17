FROM node:22.14-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN [ "npm", "install", "--fund", "false" ]
COPY . .
RUN npm run build

FROM nginx:1.26.2-alpine
COPY --from=build /app/dist/apps/client/browser/ /usr/share/nginx/html/
