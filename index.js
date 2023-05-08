const express = require('express');
const app = express();
const port = 3000;
const exec = require('child_process').exec;

app.use(express.static('public'))

app.get('/moveTo/:pos', (req, res) => {
  exec(`serverMoveTo.sh ${req.params.pos}`, function(error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
        console.log('exec error: ' + error);
    }
});
  res.send(`IM FINNA MOVE NOW SON. moving to ${req.params.pos}`)
})

app.get('/kick', (req, res) => {
  exec("serverKick.sh", function(error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
        console.log('exec error: ' + error);
    }
});
  res.send('IM FINNA KICK')
})

app.get('/letBallThrough', (req, res) => {
  exec("serverLetBallThrough.sh", function(error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
        console.log('exec error: ' + error);
    }
});
  res.send('IM FINNA LET THE BALL GO')
})

app.listen(port, '0.0.0.0', function() {
  console.log("Server Started FAM")
});
