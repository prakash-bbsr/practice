const express = require('express');
const app = express();
const path = require('path');

//Set the view engine to EJS
app.set('view engine','ejs');

//Set the Views directory
//console.log(path.join(__dirname, '..', 'view'));
app.set('views', path.join(__dirname, '..', 'view'));

//Route to render the index.ejs template
app.get('/',(req,res)=>{
    res.render('index',{title:"Node.js with EJS"});
});
/*app.get('/', (req, res) => {
    console.log('Route hit');
    res.render('index', {
        title: 'Node.js with EJS'
    });
});*/
const PORT =3000;
app.listen(PORT,()=>{
    console.log(`Server is running on:${PORT}`);
})