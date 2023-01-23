const express= require("express")
const app = express()
const path = require("path")
const PORT = 3000

app.use(express.static("public"));


app.get("/",(req,res)=> {
  return res.sendFile(path.join(__dirname,"/view/home.html"))
})

app.get('/register', (req,res)=>{
   return res.sendFile(path.join(__dirname,"/views/register.html"))
})

app.get('/login', (req,res)=>{
 return  res.sendFile(path.join(__dirname,"/views/login.html"))
})


app.listen(3000,()=>{console.log(
`Server listen in port ${PORT}
http://localhost:${PORT}
`)})
