const express = require('express');
const app = express();
const port = process.env.port || 5000;
app.get('/', (red,res)=>{
res.send("app is working ...");
});
app.listen(port, ()=>{
    console.log("server is running ...");
})