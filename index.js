const express = require('express')
const fs = require('fs');

const app = express();

app.get('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})

app.get("/pdf/ditoro", (req, res) => {
    res.download("./pdf/ditoro.pdf");
});

app.listen(process.env.PORT || 3000, ()=>{
    console.log("App is listening at ")
})