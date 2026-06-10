//Install Third-party middleware
//npm install helmet body-parser compression
const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const compression = require('compression');
const app = express();

//Use the helmet middleware for setting HTTP security headers
app.use((req, res, next) => {
    console.log('Before helmet');
    console.log(res.getHeaders());
    next();
});

app.use(helmet());

app.use((req, res, next) => {
    console.log('After helmet');
    console.log(res.getHeaders());
    next();
});

//Example of check bodyParser
//app.use(bodyParser.json());
//Starting with Express 4.16+, Express included the JSON parser functionality directly:
app.use(express.json());
app.post('/users', (req, res) => {
    console.log(req.body);
    res.send('Received');
});

//use the compression middleware for compressing http responses
app.use(compression());
app.get('/', (req, res) => {
   res.json({
        users: Array(10000).fill({
            name: 'John Doe',
            email: 'john@example.com'
        })
    });
});


//app.use(bodyParser.urlencoded({extended:true}));



const port = 3000;

app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})