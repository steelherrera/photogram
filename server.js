const express = require("express");
const app = express();

app.get('/*', (req, res) => {
  console.log("Holis");
  res.sendFile(path.join(__dirname, '/dist/index.html'), (err) => {
    if (err) {
      res.status(500).send(err)
    }
  })
});


const server = app.listen(process.env.PORT  || 3000,()=>{
  console.log("Servidor iniciado en el puerto "+server.address().port)
});