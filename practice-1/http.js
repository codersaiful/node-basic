let http = require('http');

let dt = require('./module/date-time');

http.createServer((req, res)=>{
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.write(req.url);
    res.write("<h2>My Own Module</h2>");
    res.write("date time from my Module is: " + dt.myDateTime());
    res.write("My Name is Saiful");
    res.end();
}).listen(8080);