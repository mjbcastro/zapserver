var express = require("express");
var venom = require('venom-bot');

venom.create().then((client) => start(client));

function start(client) {

  var app = express();

  app.listen(3333, () =>{
    console.log("Server running on port 3333")
  });

  app.get("/message", async (req, res, next) => {

    //await client.sendMessageToId(req.query.number + '@c.us', req.query.message);

    await client
    .sendText(req.query.number + '@c.us', req.query.message)
    .then((result) => {
      console.log('Result: ', result); //return object success
    })
    .catch((erro) => {
      console.error('Error when sending: ', erro); //return object error
    });
    res.json(req.query);

  });

 client.onMessage((message) =>{
  
  if(message.body === 'Hi') {

    client.senText(message.from, 'Welcome Venom');

  }

 });

}