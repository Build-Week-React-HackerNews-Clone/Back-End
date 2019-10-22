const router = require("express").Router();

const axios = require('axios');


axios.get('https://hacker-news.firebaseio.com/v0/topstories')
  .then(response => {
    console.log(response.data.url);
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });

module.exports = server;