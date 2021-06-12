let fs = require('fs');

let file_name = './file/text-file-read2.txt';

let prefix = 'method appends specified content to a file. If the file does not exist, the file will be created:';
let text = prefix + '\nHHHHHHHHHHHHHHHHHHHHHHHHHH';
text += '\nCreate a new file using the appendFile() method:\n';

//appendFile - if file not found, it will create new file and wwill write text
//And if found already file, then content will be append
fs.appendFile(file_name, text, (err) => {
    if(err) throw err;
    console.log("Saved and Created.");
})

let write_file = './file/write-file.txt';
//writeFile - if not found file, it will create. and if already found, it will replace
fs.writeFile(write_file,text + 'Using writeFile() method.\n',(err)=>{
    if(err) throw err;
    console.log("File Written");
})

let delete_file = './file/delete.txt';
//Deleting file using unlink() method of fs
fs.unlink(delete_file,(err)=>{
    console.log(err);

    if(!err){
        console.log('File deleted successfully');
    }else{
        console.log("File not founded.Or It's Already deleted.");
    }
});