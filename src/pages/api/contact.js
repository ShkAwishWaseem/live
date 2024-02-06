import contact from "@/models/contact"
import {dbConnection} from "@/db/config"


// dbConnection("mongodb://localhost:27017/blogify")
dbConnection("mongodb+srv://awishwaseem7:d8ryJLfvlD3hZnC6@cluster0.54gwnw4.mongodb.net/?retryWrites=true&w=majority")

export default async function contactUs(req,res) {
     try {
          if(req.method === "POST"){
               const {subject,email,message}= req.body;
               console.log(message, email , subject)
               const data = await  contact.create({
                         email,
                         subject,
                         message
                    })
                    
                    
                    res.status(200).json(data)
          
          
     } 
}
     catch (error) {
          res.status(500).json({error})
          }    

          
}