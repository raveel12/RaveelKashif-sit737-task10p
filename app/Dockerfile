FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY server.js .

EXPOSE 3010

CMD [ "node", "server.js" ]