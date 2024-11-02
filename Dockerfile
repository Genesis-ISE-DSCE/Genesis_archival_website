FROM node:14

# WORKDIR /app

RUN npm install -g serve

COPY . .

EXPOSE 3000

CMD [ "node" , "cluster.js" ]