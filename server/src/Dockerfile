FROM node:16

WORKDIR /app

COPY package.json /app/

COPY package-lock.json /app/

RUN npm install

COPY . .

EXPOSE 3001

CMD ["node", "app.js"]