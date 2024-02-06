import users from "@/models/user";
import { dbConnection } from "@/db/config";


// dbConnection("mongodb://localhost:27017/blogify");
dbConnection("mongodb+srv://awishwaseem7:d8ryJLfvlD3hZnC6@cluster0.54gwnw4.mongodb.net/?retryWrites=true&w=majority")

export default async function login(request, response) {
  const { email, password } = request.body;
  console.log(email, password)

  try {
    const token = await users.matchPasswordAndGenerateToken(email, password);

    if (token) {
      response.status(200).json({token});

    } else {
        console.log(token);
      response.status(500).json({token});
    }
  } catch (err) {
    console.log(err, "Error is happening");
    response.status(500).redirect("/login");
    

  }
}
