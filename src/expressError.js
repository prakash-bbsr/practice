const express = require("express");
const app = express();

app.use((req,res,next)=>{
 //simulate an error
 next(new Error("An Error occured"));
});
//Handling Error in middleware
app.use((err,req,res,next)=>{
    console.log(err.message);
    res.status(500).send("Something is wrong");
});

const port = 3000;

app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
});