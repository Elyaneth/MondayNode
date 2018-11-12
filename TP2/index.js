// Imports
const http = require('http')
const url = require('url')
const qs = require('querystring')

//this imports objects, functions, etc from test01
const handles = require('./handles')

const server = http.createServer(handles.serverHandle);
server.listen(8080)