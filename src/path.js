const path = require("path");
//console.log(path);

const fullPath = path.join("/public",'text.txt');
console.log(fullPath);

//parsing Path
const parsepath = path.parse("/public/text.txt");
console.log(parsepath);

//Joining Path segments together
const fullPath1 = path.join(__dirname,'folder','file.txt');

console.log("Full path is =",fullPath1);
//Resolving the absolute path
const absolutePath = path.resolve('src/folder','file.txt');
console.log("AbsolutePath=",absolutePath);
//Getting the directory name of a path
const directoryName = path.dirname('/folder/file.txt');
console.log("Directory name",directoryName);
//Getting the file extension of a path
const fileExtension = path.extname('/folder/file.txt');
console.log("File Extension name",fileExtension);

//Parsing a path into an object with its components
const pathObject = path.parse('/folder/file.txt');
console.log("Object path",pathObject);