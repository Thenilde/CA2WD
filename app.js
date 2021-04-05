const express=require('express') //created the express packet
const app=express();//executed code
const mongoose=require('mongoose')//Code that is going to connect db

//Middlewares to expecific when routes weill be heats.

app.use('/posts',()=> {
    console.log('This is a middleware running');
});



//Routes

app.get('/',(req,resp)=>{
    resp.send('We are on home');
});

app.get('/posts',(req,resp)=>{
    resp.send('We are on posts');
});

//Connect to DB

mongoose.connect('mongodb+srv://Music:123@cluster0.vkjg1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
{useNewUrlParser:true },
()=> console.log('connected to DB Borges!')
);

//Port name to listening to the server
app.listen(3000);