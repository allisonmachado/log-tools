FROM node:22

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . ./

EXPOSE 80

CMD ["npm", "run", "start", "--", "--host", "0.0.0.0", "--port", "80"]
