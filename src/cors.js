const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());
/*app.use(cors({
    'origin':'https://localhost:3000/api/data'
}));*/
app.get('/api/data',(req,res)=>{
    res.json({mesage:"API Data"});
});

const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Server is listening on PORT ${PORT}`);
});
