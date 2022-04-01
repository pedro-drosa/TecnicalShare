FROM node:16.14.2
WORKDIR /api
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
CMD [ "npm","run","live-reload" ]
