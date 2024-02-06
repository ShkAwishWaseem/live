import Comments from "@/models/comments";
import {dbConnection} from "@/db/config"



// dbConnection("mongodb://localhost:27017/blogify")
dbConnection("mongodb+srv://awishwaseem7:d8ryJLfvlD3hZnC6@cluster0.54gwnw4.mongodb.net/?retryWrites=true&w=majority")


export default async function comments(req,res) {
     if(req.method === "POST") {

      try {
           const {content , userName , BlogId , email} = req.body;
          //  console.log(content, userName , BlogId , email)

          const data = await Comments.create(
              {
               content,
               userName,
               BlogId,
               email
              } 
          )
          
          res.status(200).json(data)

          //  res.redirect("/home")
          
      } catch (error) {
          console.log(`Awish Error is here : ${error}` )
      }
     }
}