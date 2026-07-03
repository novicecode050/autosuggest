const express=require('express');
const app=express();
const PORT=process.env.PORT||3002;
//web server:
app.use(express.static('frontend'));
app.listen(PORT,function(){
    console.log("Successfully running at http://localhost:"+PORT);
})
//use nodemon to run the server.js file and then open http://localhost:3002 in your browser to see the output.it shows dynamic content no need to refresh the page after every change in the code.