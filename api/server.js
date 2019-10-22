const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const axios = require('axios');

const secrets = require('../data/defaults.js');

const authenticate = require("../auth/auth-middleware.js");
const authRouter = require("../auth/auth-router.js");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());
console.log("environment", secrets.environment);

server.use('/api/auth', authRouter);

server.get("/", (req, res) => {
  res.send("Server is running");
});

// axios.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
//   .then(response => {    
//     var topTwenty = response.data.slice(0, 20);
//     console.log(topTwenty);
//     return topTwenty;
//     //now you have to make a call to get each of the 20 stories and make a new array of that.
//   })
//   .then (topTwenty => {
//     let articles = topTwenty.map((foo) => {
//       console.log('foo', foo);
//       getTopTwenty(foo);
//     })
//   })
//   .catch(error => {
//     console.log(error);
//   });

//   function getTopTwenty(id) {
//    console.log('hetTop T', id);
//     axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
   
//       .then(res => {
//         //build each story obj and return it
//         console.log('get20', res.data);
//         return res.data;
//       })
//       .catch(error =>{
//         console.log(error);
//       })      
//   } 

module.exports = server;