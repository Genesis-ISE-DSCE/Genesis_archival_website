FROM node:14

RUN npm install -g serve

# WORKDIR /app

COPY . .

CMD [ "node" , "cluster.js" ]