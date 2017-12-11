var express = require('express')
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var exec  = require('child_process').exec

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+'/views/index.html'));
});

app.post('/post', function (req, res) {
console.log('Hi'+req.body.Command);
var cmd = req.body.Command 
console.log(cmd)
exec(cmd, function (err, stdout) {
  if (err) throw err
  command = stdout.toString()
  console.log(command);
//res.sendStatus(200);
  res.send('Command Executing on Server is \n\n' + cmd + '\n\nOutput of Command Executed is :\n\n\n' + command);
})
});

app.listen(8080);
