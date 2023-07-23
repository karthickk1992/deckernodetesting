// FROM node:17
// # work Directory
// WORKDIR /usr/src/app

// # copy package files
// COPY package*.json  app.js ./

// # run npm install
// RUN npm install
// EXPOSE 3000
// CMD ["node","app.js"]
  
// # command
// # docker build -t dockernodejs .
// # docker run -d -p 3000:3000 --name node-app dockernodejs