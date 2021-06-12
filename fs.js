let http = require('http');
let fs = require('fs');

//Creating Server
http.createServer((req, res)=>{
    
    let content = "<h2>FS => File System</h2>";
    content += "<p>Now working on Node fs Module.</p>";
    //res.write(content);

    // File System Start Here *****************************
    let textFileLoc = './public/index.html';
    let readFile = fs.readFile(textFileLoc, (err, data) => {
        res.writeHead(200,{
            'Content-Type': 'text/html'
        });
        res.write(data);
        return res.end();
    });

    // File System End Here *****************************
    

    
}).listen(8080);