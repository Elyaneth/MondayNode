// Imports
const http = require('http')
const url = require('url')
const qs = require('querystring')

module.exports = {
	serverHandle: function (req, res){
	  // Retrieve and print the current path
	  const path = url.parse(req.url).pathname;
	  console.log(path);
	  
	  // Retrieve and print the params
	  const params = qs.parse(url.parse(req.url).query);
	  console.log(params);
	  
	  //http://localhost:8080/hello?name=Pierre-Louis
	  if(path === '/hello' && 'name' in params)
	  {
		  if(params['name'] == 'Pierre-Louis'){
			res.writeHead(200);
			var content = 'Hello, I am ' + params['name'] +' !\n';
			content += 'I am a student at ECE Paris, majoring in IT and cybersecurity \n';
			content += 'I love sleeping, food and video games. \n';
			
			res.write(content);  
		  }
		  else{
			res.writeHead(200);
			res.write('Hello ' + params['name']);  
		  }
	  }
	  else {
		res.writeHead(404);	  
		res.write("Error 404, message not found");
	  }
	  
	   res.end();
	}
}
