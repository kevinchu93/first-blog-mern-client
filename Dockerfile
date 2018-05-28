FROM node

WORKDIR /opt/first-blog-mern-client

COPY . .

RUN npm install

EXPOSE 1234

CMD ["npm", "start"]
