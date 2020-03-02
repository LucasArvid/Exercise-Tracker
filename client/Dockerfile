FROM node:11.4.0

WORKDIR /usr/src/app

COPY package*.json ./

COPY webpack.config.js ./

RUN npm install

COPY . .

CMD ["npm", "start"]