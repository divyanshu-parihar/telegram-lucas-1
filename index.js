const TelegramBot = require("node-telegram-bot-api");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;
const conf = require("./cred");

require('dotenv').config();
const token = processe.env.TOKEN;
const bot = new TelegramBot(token, { polling: true });

const config = {
  chat_ids: conf.config.chat_ids
};
app.get("/", (req, res) => {
  return;
});
app.post("/api", (req, res) => {
  const data = req.body;

  let Message = "We have a new response :\n";
  for (const key in data) {
    Message = Message + `${key}: ${data[key]}\n`;
    // console.log(`${key}: ${data[key]}`);
  }
  for (let i = 0; i < config.chat_ids.length; i++) {
    console.log("[Bot]: ----------->")
    console.log(Message);
    console.log("<----------------->")
    bot.sendMessage(config.chat_ids[i], Message);
  }
  res.status(200).end();
  return;
});

app.listen(port, () => {
  console.log(`[Webhook]: app listening on port ${port}`);
});