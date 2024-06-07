FROM node:20

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install

COPY . .
RUN ls -lah
RUN node --version

EXPOSE 3000

CMD [ "npm", "start" ]
