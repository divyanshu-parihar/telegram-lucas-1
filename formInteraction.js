const express = require('express')
const { bot } = require('.')
const app = express()
const port = 3000

const conf = require("./cred");


const config = {
    chat_ids : conf.config.chat_ids,
};

app.get(all'/', (req, res) => {
  
  for(let i = 0; i < config.chat_ids.length; i++){

    bot.sendMessage(conf.chat_ids[i],req.body);
    console.log('working');
  }
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})