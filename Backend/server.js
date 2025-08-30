const http = require('http');
const app = require('./app');

const port = process.env.PORT || 3000;

// creating a server
const server = http.createServer(app); // passing the app which we had created in the 'app.js'


server.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
});