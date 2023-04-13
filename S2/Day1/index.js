
const express=require("express")
const fs=require("fs")

const app=express()
app.use(express.json())
app.get("/",(req,res)=>{
    res.setHeader("content-type","text/html")
    res.send(`<h1>Home Page</h1>`)
})

app.get("/data",(req,res)=>{
    const datastream=fs.createReadStream("./data.json","utf-8")
    datastream.pipe(res)
})
app.post("/adddata",(req,res)=>{

console.log(req.body)
res.send(`Data has been added`)
    
})


app.get("/students",(req,res)=>{
   let data=fs.readFileSync("./data.json","utf-8")
   res.send(data)
})

app.listen(4500,()=>{
    console.log("server is running at port 4500")
})