#FROM nginx:latest
#COPY index.html /usr/share/nginx/html
#COPY enrique.jpg /usr/share/nginx/html

FROM php:7.0-apache

COPY . /var/www/html/
#COPY enrique.jpg /var/www/html/

EXPOSE 8080

#FROM node:8
#WORKDIR /home/nodejs/app
#COPY . .
#RUN npm install --production
#CMD [“node”, “index.js”]
