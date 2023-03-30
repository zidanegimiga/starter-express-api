const express = require('express')
const fs = require('fs');

const app = express();

app.get('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})

app.get('/pdf/ditoro', (req, res) => {
    const filePath = './pdf/ditoro.pdf';
    const fileName = 'ditoro.pdf';
    const file = fs.createReadStream(filePath);
    const stat = fs.statSync(filePath);
  
    res.setHeader('Content-Length', stat.size);
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);
  
    file.pipe(res);
  });

app.listen(process.env.PORT || 3000, ()=>{
    console.log("App is listening at ")
})