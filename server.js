const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
require('dotenv').config()

const server = express()

server.use(express.static(__dirname + '/public'));
// Ensure that S3 Bucket is properly loaded
console.log('S3 BUCKET', process.env.AWS_S3_BUCKET)

// Middleware Plugins
server.use(bodyParser.json())
server.use(express.static('public')) // Just for testing, use a static html

server.get('/', (req,res) => {
  res.sendFile(path.join(__dirname+'/public/upload.html'));
});
// Routes
server.use('/', [
  require('./routes/fileupload')
])


// Start the server
server.listen(process.env.PORT || 7000, error => {
  if (error) console.error('Error starting', error)
  else console.log('Started at http://localhost:7000')
})