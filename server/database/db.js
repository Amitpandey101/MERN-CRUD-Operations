const mongoose=require("mongoose")

const Connection= async(username,password)=>{
const URL=`mongodb+srv://${username}:${password}@merncrud.1gyhzsm.mongodb.net/?retryWrites=true&w=majority`
    try{
       await mongoose.connect(URL)
       console.log("database connected successfully")
      
    }catch(err){

console.log(`Error while connecting to database`,err)

    }


}
module.exports=Connection;
