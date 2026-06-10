const { error } = require("console");
const fs = require("fs");
//Write file
const contentWrite = "This is the content i want write in a file";
fs.writeFile('./public/text.txt',contentWrite,'utf8',(err)=>{
    if(err){
        return ;
    }
    console.log("Write Operation is completed");
});

//Read File
fs.readFile('./public/text.txt','utf8',(err,data)=>{
    if(err){
        console.log(err);
    }
    console.log(data);
});
//ReadDir
fs.readdir('./public/', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});
//unlink a file 
//ENOENT is a standard filesystem error code that means:Error NO ENTry (or "No such file or directory")
fs.unlink('./public/text.txt', (err) => {
    if (err) {
        if (err.code === 'ENOENT') {
            console.log('File does not exist');
        } else {
            console.error(err);
        }
        return;
    }

    console.log('File deleted');
});
//Rm is deleting folder with sub folders
fs.rm('./public', { recursive: true }, (err) => {
    if (err) console.error(err);
    else console.log('Directory removed');
});
//Only deleting empty Directory
/*fs.rmdir('./public', (err) => {
    console.log(err);
});*/