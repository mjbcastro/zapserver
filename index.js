const express = require("express");
const venom = require('venom-bot');
const app = express();
const PORT = process.env.PORT || 3000;


venom.create().then((client) => start(client));

function start(client) {
  
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

app.get ('/', (req, res) => res.send ('Hello World'));
app.listen (PORT, () => console.log (`Servidor ouvindo na porta $ {PORT}`))
