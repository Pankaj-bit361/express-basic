const express=require("express")

const app=express()

app.use((req,res,next)=>{

})

app.get("/",(req,res)=>{
    res.send("Home page")
})

app.get("/about",(req,res)=>{
    res.send("About page")
})

app.get("/contact",(req,res)=>{
    res.send("Contact page")
})

app.get("/data",(req,res)=>{
    res.send("Data page")
})

app.listen(8080,()=>{
    console.log("server is running at 8080")
})