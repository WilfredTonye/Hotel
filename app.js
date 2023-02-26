//importing packages
const express = require('express');
const morgan = require('morgan');

const app = express();

app.set("view engine", "ejs");
// routes
//home route
app.get('/', (req,res) =>{
    res.render('index');
})

app.listen(2004, () =>{
    console.log('listening on port 2004.......')
})