//Import Express
const express = require("express");
//create an express application
const app = express();

app.use(express.static('public'));
//define middleware function
const myMiddelware = (req,res,next) =>{
    res.send("Interview");
    console.log("Interview");
    next();//Call the next middleware function
}
const myMiddelware2 = (req,res,next) =>{
    res.send("Happy");
    next();//Call the next middleware function
}
//Use middleware globally all routes
app.use(myMiddelware);
//app.use(myMiddelware2);
const port = 3000;

app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})