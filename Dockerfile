FROM node:12-alpine

COPY ./ /app

RUN apk add --no-cache --upgrade bash

RUN npm -g install gulp gulp-sass gulp-uglify browserify gulp-rename through2 path gulp-livereload rename st

WORKDIR /app

RUN npm install

ENTRYPOINT [ "gulp" ]