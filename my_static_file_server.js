// to run this:
// run npm install expres in the project's root folder
// change the '__dirname' bit to whatever folder you want to use - dirname just means the current folder
// run this from the command line: node my_static_file_server.js
// go to http://localhost:8080/index.html


//Comments relate to whichever line they are closest too

var express = require('express'); // requiring the installed express module
var app = express(); // 'app' var is usually used to denote the Express application.
			// We call the top level express() function from the module.



app.use(express.static(__dirname)); //for serving the static assets.
//explained here: http://expressjs.com/starter/static-files.html
//__dirname brings you the current path and then '/public' is appended to it. So
//static files in this instance will be looked for in the /public folder. EDIT
// in this instance we've removed 'public' from the path and are just using
// the current directory (i.e. dirname)



// The below uses the function listen() (from the express() function that was assigned
// to var app above) to specify a port to listen for connections to (that's what
// a server does)
app.listen(8080);


//now, if we put my_image.jpg into the /public folder, we can access it by going
//to http:://localhost.8080/my_image.jpg
