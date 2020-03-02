FROM node:11.4.0

WORKDIR /usr/src/server

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]