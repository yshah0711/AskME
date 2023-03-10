const express=require('express');
const cors=require('cors')
const collection= require("./schema")
const app=express();
const mongoose=require("mongoose");
app.use(express.json());
app.use(cors())

mongoose.set('strictQuery', false);
mongoose.connect("mongodb+srv://20xu1a0576:Askme2023@askme.qkrjnar.mongodb.net/?retryWrites=true&w=majority",{useNewUrlParser: true,})
  .then(()=>{
    console.log("MongoDB connection successfull");
  })
  .catch((e)=>console.log(e));


app.get("/Login",cors(),(req,res)=>{})
{console.log("hi")}

app.post("/Login",async(req,res)=>{
  const{email,password}=req.body

  try{
    const check=await collection.findOne({email:email})

    if(check){
      res.json("exists")
    }
    else{
      res.json("does not exist")
    }
  }
  catch(e){
    res.json("does not exist")
  }
})

app.get("/wel",async (req,res)=>{
    try {
      const user=await collection.find({});
      res.send({status:"ok",data:user})
    } 
    catch (error) {
      console.log(error);
    }
  })
  
  
  
  
  app.listen(5000,()=>{
    console.log("Server started");
  });
