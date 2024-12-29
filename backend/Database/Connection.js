const mongoose = require("mongoose");
 const Connection  = async ()=>{

    try{
       
     const connect = await mongoose.connect("")
     console.log("DataBase Connected Successfully")
    }
    catch(e){
        console.log(`DataBase Connection Error ${e}`)
    }

}

module.exports = Connection;