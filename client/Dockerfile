FROM node:16
WORKDIR /app
COPY . /app
RUN npm install
COPY ./package.json ./
RUN npm run build
RUN npm install -g serve@10.1.1
EXPOSE 3000
CMD ["serve", "-s" , "build"]

