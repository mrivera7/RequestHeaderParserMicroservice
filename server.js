var express = require('express');
var app = express();

var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));

app.use(express.static('public'));

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get("/api/whoami", (req, res) => {
  res.json({ "ipaddress": req.ip, 
             "language": req.get('Accept-Language'), 
             "software": req.get('User-Agent') });
});


// listen for requests 
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
