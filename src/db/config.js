import  mongoose from "mongoose"

const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id);

async function dbConnection (url){
     return await mongoose.connect(url,  {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          connectTimeoutMS: 30000, 
          socketTimeoutMS: 30000, 
        })
}
// In your db/config.js or a separate file



module.exports = {dbConnection, isValidObjectId}
