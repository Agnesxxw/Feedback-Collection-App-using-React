const express = require("express");
var app = express();

app.get("/",(req, res)=>{
    res.send({hi:"there"});
})

const PORT = process.env.PORT || 3000 // if running on a local machine, env.port won't work
app.listen(PORT);