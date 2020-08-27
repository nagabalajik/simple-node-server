const express = require('express')
const app = express()
const port = 8081

app.get('/', (req, res) => {
  console.log('$$$ HEADERS $$$');
  console.log(req.headers);
  res.send('Response from Express')
})

app.get('/one', (req, res) => {
    res.send('Response from /one endpoint')
  })

app.listen(port, () => {
    console.log('Express server started');
})