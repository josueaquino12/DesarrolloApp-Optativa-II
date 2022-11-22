FROM node:alpine3.15

WORKDIR /app

COPY package.json .

COPY package-lock.json .

RUN npm install

COPY . .

RUN npm install --save react-router-dom

RUN npm install bootstrap --save

RUN npm install axios --save

RUN npm install --save @fortawesome/free-solid-svg-icons

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]