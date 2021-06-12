let http = require('http');
let fs = require('fs');
let uc = require('upper-case');

let dt = require('./module/date-time');

http.createServer((req, res)=>{

    let content = "<h2>FS => File System</h2>";
    content += "<p>Now working on Node fs Module.</p>";
    

    // File System Start Here *****************************
    let textFileLoc = './public/index.html';
    let readFile = fs.readFile(textFileLoc, (err, data) => {
        //WRite Head Data
        res.writeHead(200,{
            'Content-Type': 'text/html'
        });

        res.write(content);
        res.write("<h1>now handle with uppercase</h1>");
        content = uc.upperCase(content);
        res.write(content);

        
        res.write(data);//

        //Ending -> res.end()
        return res.end();
    });

    // File System End Here *****************************
}).listen(8080);