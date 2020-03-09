FROM node:11.4.0

WORKDIR /app

COPY package*.json ./

COPY webpack.config.js ./

RUN npm install

COPY . .

CMD ["npm", "start"]

EXPOSE 8081 49153