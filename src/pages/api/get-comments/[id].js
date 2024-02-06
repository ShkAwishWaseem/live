import Comments from "@/models/comments";
import {dbConnection} from "@/db/config"



// dbConnection("mongodb://localhost:27017/blogify")
dbConnection("mongodb+srv://awishwaseem7:d8ryJLfvlD3hZnC6@cluster0.54gwnw4.mongodb.net/?retryWrites=true&w=majority")


export default async function getComments(req,res) {
     try {     
               const {id} = req.query;
               if(id){
                    const data = await Comments.find({BlogId: id})
                    console.log(data);
                    res.status(200).json(data)
               }
               else{
                    console.log("Id not found 404 ...  :(");
               }
     } catch (error) {
                    console.log(`Errorsd is here and ${error}`);
     }

    
}