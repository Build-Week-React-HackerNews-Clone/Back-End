const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const axios = require("axios");

const secrets = require("../data/defaults.js");

const authenticate = require("../auth/auth-middleware.js");
const authRouter = require("../auth/auth-router.js");
const db = require("../data/dbConfig.js");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());
console.log("environment", secrets.environment);

server.use("/api/auth", authRouter);

server.get("/", (req, res) => {
  res.send("Server is running");
});

// axios
//   .get("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
//   .then(response => {
//     var topTwenty = response.data.slice(0, 20);
//     console.log(topTwenty);
//     return topTwenty;
//     //now you have to make a call to get each of the 20 stories and make a new array of that.
//   })
//   .then(topTwenty => {
//     let articles = topTwenty.map((foo, index) => {
//       console.log('foo', foo);
//       console.log('index', index);
//       const indexN = index;
//       console.log('n', indexN);
//       getTopTwenty(foo, indexN);
//     });
//     // console.log("articles", articles);
//     return articles;
//   })
//   // .then(articles => {
//   //   console.log("articles", articles);
//   // })
//   .catch(error => {
//     console.log(error);
//   });

// function getTopTwenty(id, index) {
//   //  console.log('hetTop T', id);
//   console.log('index', index);
//   axios
//     .get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)

//     .then(res => {
//       //build each story obj and return it
//       // console.log('get20', res.data);
//       const rank = index + 1;
//       const article = {        
//         article_id: res.data.id,
//         title: res.data.title,
//         url: res.data.url,
//         time: res.data.time,
//         descendants: res.data.descendants,
//         score: res.data.score,
//         by: res.data.by,
//         type: res.data.type
//       };
//       console.log("get20", article, rank);
//       return article;
//     })
//     .catch(error => {
//       console.log(error);
//     });
// }

// async function updateTable(rank, article) {
//   await db("topArticles")

// }

module.exports = server;
