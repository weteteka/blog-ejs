import mongoose from "mongoose"

export const DB = ()=>{
mongoose.connect(process.env.MONGO_URI,{
    dbName: 'post'
})
.then(()=>console.log("Mongo conectado!!"))
.catch((e)=>console.log(e))
}