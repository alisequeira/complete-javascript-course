const fs = require('fs'); //node module to read file system.
const http = require('http');
const url = require('url');

//We have to pass the absolute path to that file  

/*Node.js have a variable name called dirname, dirname is basically the home folder so to say
, then also we need to specify the character encodign. (if we don't specify. Insted of returnign a file, it will retur a buffer) */
const json = fs.readFileSync(`${__dirname}/data/data.json`, `utf-8`);
const laptoData = JSON.parse(json);


const server = http.createServer((req, res) => {//each time some access to our server we will have a reponse.
    const pathName = url.parse(req.url, true).pathname;
    const id = url.parse(req.url, true).query.id;

    if(pathName === '/products' || pathName === '/'){
        res.writeHead(200, {'content-type': 'text/html'});
        res.end('this is the PRODUCTS page');
    }else if(pathName === '/laptop' && id < laptoData.length){
        res.writeHead(200, {'content-type': 'text/html'});
        res.end(`this is the laptop page for ${id}`);
    }
    else{
        res.writeHead(404, {'content-type': 'text/html'});
        res.end('URL was not found on the server');
    }
    
});

server.listen(1337, '127.0.0.1', () => {
    console.log('listening for request now');
});
