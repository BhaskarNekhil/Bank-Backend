const mongoose = require("mongoose")


function connnectToDB(){
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("server is connected to db")
    })
    .catch(err => {
  console.error("Detailed DB Error:", err.message);
  console.error("Error Code:", err.code); 
});  
}
module.exports= connnectToDB