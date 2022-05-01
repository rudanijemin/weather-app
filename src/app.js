const express = require("express");
const path = require("path");
const app = express();
const port = 8000


//public static path
const static_path = path.join(__dirname,"../public");

app.use(express.static(static_path));

//routing
app.get("",(req,res)=>{
    res.send("welcome to jemin project");
})

app.get("/about",(req,res)=>{
    res.send("welcome to jemin about project");
})

app.get("/weather",(req,res)=>{
    res.send("welcome to jemin  weather project");
})

app.get("*",(req,res)=>{
    res.send("404 error page");
})

app.listen(port,()=>{
    console.log(`listing port no ${port}`);
})
