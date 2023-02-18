FROM node:16 as build

# RUN npm install --global yarn

WORKDIR /usr/src/app

COPY ./package.json .

RUN yarn install

COPY . .

RUN yarn build:dev
