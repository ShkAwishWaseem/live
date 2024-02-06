import users from "@/models/user"
import {dbConnection} from "@/db/config"



// dbConnection("mongodb://localhost:27017/blogify")
dbConnection("mongodb+srv://awishwaseem7:d8ryJLfvlD3hZnC6@cluster0.54gwnw4.mongodb.net/?retryWrites=true&w=majority")

export default async function signUp(request,response) {
     if (request.method === 'POST') {
       try {
          const { name, email, password } = request.body;
          console.log(name, email, password);
      
             const data = await users.create({
               name,
              email,
              password,
            })
            return response.status(200).json({data})

             
          } catch (error) {
            console.error('Error creating user:', error.message);
            response.status(500).json({ error: 'Internal Server Error' });
          }
        } else {
          response.status(405).json({ error: 'Method Not Allowed' });
        }
          
}