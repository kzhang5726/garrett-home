const http = require('http');
const fs = require('fs');
const port = 8080;

const server = http.createServer(function (req,res){
    console.log("Request occured");
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('index.html', function(error,data){
        if(error){
            res.writeHead(404);
            res.write("Error 404: Not Found");
        } else{
            res.write(data);
        }
        res.end();
    });
});

server.listen(port, function(error){
    if(error){
        console.log("Error has occurred: ", error);
    } else{
        console.log("Server listening on port ", port);
    }
});