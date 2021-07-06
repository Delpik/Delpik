const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))
app.get('/', (req, res) => {
    res.sendFile('../public/index.html')
})

app.get('/vote',(req,res)=>{
    const dgram = require('dgram');
    const message = Buffer.from('Some bytes');
    const client = dgram.createSocket('udp4');
    client.send(message, 2222, 'localhost', (err) => {
    client.close();
    });
    res.send('ping')
})

app.listen(port, () => {
  console.log(`Hist app listening at http://localhost:${port}`)
})