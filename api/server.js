const helmet = require("helmet");
const cors = require("cors");
const axios = require("axios");
const express = require("express");
const secrets = require("../data/defaults.js");

const articleRouter = require("../articles/article-router.js");
const authRouter = require("../auth/auth-router.js");
const db = require("../data/dbConfig.js");
var CronJob = require("cron").CronJob;
const cron = require("node-cron");
const fs = require("fs");

//  var task = new CronJob("15 * * * *", function() {
//   console.log("running a task every minute");
// }, null, true);
// console.log('task');
// task.start();

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/auth", authRouter);
server.use("/api/articles", articleRouter);

server.get("/", (req, res) => {
  res.send("Server is running");
});

axios
  .get("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
  .then(response => {
    var topTwenty = response.data.slice(0, 20);
    // console.log(topTwenty);
    return topTwenty;
    //now you have to make a call to get each of the 20 stories and make a new array of that.
  })
  .then(topTwenty => {
    let articles = topTwenty.map((foo, index) => {
      // console.log("foo", foo);
      // console.log("index", index);
      const indexN = index;
      // console.log("n", indexN);
      getTopTwenty(foo, indexN);
    });
  })
 
  .catch(error => {
    console.log(error);
  });

  // axios
  // .get("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
  // .then(response => {
  //   var topTwenty = response.data.slice(0, 20);
  //   // console.log(topTwenty);
  //   return topTwenty;
  //   //now you have to make a call to get each of the 20 stories and make a new array of that.
  // })
  // .then(topTwenty => {
  //   let articles = topTwenty.map(foo => {
  //     // console.log("foo", foo);
  //     addToHistory(foo);
  //     return topTwenty;
  //   });
  // })
  // .catch(error => {
  //   console.log(error);
  // });

function getTopTwenty(id, index) {
  //  console.log('hetTop T', id);
  // console.log("index", index);
  axios
    .get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)

    .then(res => {
      //build each story obj and return it
      // console.log('get20', res.data);
      const rank = index + 1;
      if (res.data.url === undefined) {
        const article = {
          rank: rank,
          article_id: res.data.id,
          title: res.data.title,
          url: "https://news.ycombinator.com/",
          time: res.data.time,
          descendants: res.data.descendants,
          score: res.data.score,
          by: res.data.by,
          type: res.data.type
        };
        // console.log("get20X", article, rank);
        return article;
      } else {
        const article = {
          rank: rank,
          article_id: res.data.id,
          title: res.data.title,
          url: res.data.url,
          time: res.data.time,
          descendants: res.data.descendants,
          score: res.data.score,
          by: res.data.by,
          type: res.data.type
        };
        // console.log("get20", article, rank);
        return article;
      }
    })
    .then(article => {
      const rank = article.rank;
      updateByRank(rank, article);
    })
    .catch(error => {
      console.log(error);
    });
}

function historyMaker(id) {
  axios
    .get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
    .then(res => {
      //build each story obj and return it
      // console.log('get20', res.data);
      if (res.data.url === undefined) {
        const article = {
          article_id: res.data.id,
          title: res.data.title,
          url: "https://news.ycombinator.com/",
          time: res.data.time,
          descendants: res.data.descendants,
          score: res.data.score,
          by: res.data.by,
          type: res.data.type
        };
        // console.log("get20X", article, rank);
        return article;
      } else {
        const article = {
          article_id: res.data.id,
          title: res.data.title,
          url: res.data.url,
          time: res.data.time,
          descendants: res.data.descendants,
          score: res.data.score,
          by: res.data.by,
          type: res.data.type
        };
        // console.log("get20", article, rank);
        return article;
      }
    })
    .then(article => {
      const article_id = article.article_id;
      findByArticleId(article_id)
        .then(res => {
          if (res === undefined) {
            addToHistory(res);
            console.log("made it", res);
          } else {
            console.log("already there");
          }
        })
        .catch(err => {
          console.log("err", err);
        });
    });
}

async function updateByRank(rank, article) {
  await db("topArticles")
    .where({ rank: rank })
    .update(article);
  return findByRank(rank);
}
async function findByRank(rank) {
  let article = await db("topArticles")
    .where({ rank })
    .first();
  return article;
}

async function findByArticleId(article_id) {
  let article = await db("articleHistory")
    .where({ article_id })
    .first();
  return article;
}

async function addToHistory(article) {
  const [article_id] = await db("articleHistory").insert(article);
  return findByArticleId(article_id);
}

module.exports = server;
