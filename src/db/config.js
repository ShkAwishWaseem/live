import  mongoose from "mongoose"

const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id);

async function dbConnection (url){
     return await mongoose.connect(url)
}
// In your db/config.js or a separate file



module.exports = {dbConnection, isValidObjectId}
