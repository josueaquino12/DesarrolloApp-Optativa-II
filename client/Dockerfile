FROM node:16

WORKDIR /app

COPY . /app

RUN npm install

RUN npm i -g serve

RUN npm run build

EXPOSE 5004

CMD ["serve", "-s", "build"]