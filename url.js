let http = require('http');
require('url');
//let url = new URL();

let dt = require('./module/date-time');

http.createServer((req, res)=>{
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.write(req.url);
    res.write("<h2>Module: URL</h2>");

    //URL
    //console.log(url);
    //Handle url
    //let q = url.parse(req.url, true).query();
    let txt = "url.parse(req.url, true).query() depreciated";//q.year + " " + q.month;
    res.write(txt);

    res.end();
}).listen(8080);