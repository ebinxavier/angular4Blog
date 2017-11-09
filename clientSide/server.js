var express = require('express');
var app = express();

app.use(express.static('dist'))
app.use("/server",express.static('serverFiles'))

app.get("/",function(req,res){
    res.sendFile(__dirname + "/dist/index.html");
})

app.listen(3000);
console.log("listening to 3000...");