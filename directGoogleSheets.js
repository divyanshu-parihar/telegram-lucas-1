const TelegramBot = require("node-telegram-bot-api");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;
require('dotenv').config()

const conf = require("./cred");
const token = process.env.TOKEN;
const bot = new TelegramBot(token, { polling: true });

const config = {
  chat_ids: conf.config.chat_ids
};
app.get("/", (req, res) => {
  res.status(200).end();
  return;
});
app.post("/api", (req, res) => {
  const data = req.body;

  let Message = "We have a new response :\n";
  Message = Message + `Recette : ${data.value}`
  for (let i = 0; i < config.chat_ids.length; i++) {
    console.log("[Bot]: ----------->")
    console.log(Message);
    console.log("<----------------->")
    bot.sendMessage(config.chat_ids[i], Message);
  }
  res.status(200).end();
  return;
});
// bot.on('message',(msg)=>{
//   console.log(msg.chat.id);
// })
app.listen(port, () => {
  console.log(`[Webhook]: app listening on port ${port}`);
});