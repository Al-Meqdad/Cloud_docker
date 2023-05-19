FROM node:14 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM httpd:2.4

COPY --from=builder /app/build/ /usr/local/apache2/htdocs/

EXPOSE 80