// import User from "@/models/user"
import Blogs from "@/models/blogs"
import {dbConnection} from "@/db/config"



// dbConnection("mongodb://localhost:27017/blogify")
dbConnection("mongodb+srv://awishwaseem7:d8ryJLfvlD3hZnC6@cluster0.54gwnw4.mongodb.net/?retryWrites=true&w=majority")

export default async function blogs(req,res) {
     if(req.method === "POST"){
          const {headline,category,content, img_url , createdBy}= req.body;
          try {
               
               await  Blogs.create({
                    headline,
                    content,
                    category,
                    img_url,
                    createdBy
               })
               
               res.redirect("/home")
               
          } catch (error) {
                    console.log(error + "Awish error is happening");
          }
          
          

          
          
     }
}