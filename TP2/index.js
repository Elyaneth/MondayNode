// Imports
express = require('express')
var handles =require('./handles')

app = express()

app.set('port', 8080)

require('./handles')(app);

app.listen(
  app.get('port'), 
  () => console.log(`server listening on ${app.get('port')}`)
)
