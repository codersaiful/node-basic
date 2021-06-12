let http = require('http');
let fs = require('fs');
let formidable = require('formidable');
//console.log(formidable);

//Creating Server
http.createServer((req,res) => {
    // console.log(req.url);
    // console.log(req.method);
    // console.log(req.statusCode);
    
    if(req.url == '/fileupload' && req.method == 'POST'){
        let form = new formidable.IncomingForm();

        form.parse(req,(err, fields, files)=>{
            console.log(files.filetoupload.name,files.filetoupload.type);
            if(files.filetoupload.size > 0 && files.filetoupload.type == 'text/xml'){
                let temp_path = files.filetoupload.path;
                let file_name = files.filetoupload.name;
                let file_new_loc = 'G:/Node/node-basic/practice-1/form' + file_name;
                fs.rename(temp_path,file_new_loc,(err)=>{
                    if(err){
                        console.log(err);
                        throw "Unable to Upload";
                        res.write("Faild to upload");
                    }else{
                        res.write("File Uploaded");
                    }
                })
                
            }else{
                res.write("Please select a xml file. Other file is not supported.");
            }
            //console.log(files);
            
            res.end();
        });

        
    }else{
        let form_html = './form/form.html';
        fs.readFile(form_html,(err,data)=>{
            if(err) throw "something went wrong";
            res.writeHead(200,{
                'Content-Type': 'text/html'
            });
            res.write(data);
            return res.end();
        });
    }
    
}).listen(8080);
