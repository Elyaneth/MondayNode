// Imports
// None needed here

module.exports = function(app){
	
	app.get('/hello/:name', function (req, res) {
	  if (req.params.name == ':Pierre-Louis'){
		res.send("Hello, i am " + req.params.name +"\n I am a student at ECE Paris, majoring in IT and cybersecurity \n I love sleeping, food and video games. \n")  
	  }
	  else {
		res.send("Hello " + req.params.name)
	  }
	})
	
	app.get(
	  '/', 
	  (req, res) => res.send("Hello ! It appears you have removed part of the url or have typed an incomplete url. \n You need to add hello?name=... where ... is a name \n Like this : http://localhost:8080/hello/:Pierre-Louis")
	)
	
}