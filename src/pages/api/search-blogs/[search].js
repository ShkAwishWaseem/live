import Blogs from '@/models/blogs';
import { dbConnection } from '@/db/config';



// dbConnection('mongodb://localhost:27017/blogify');
dbConnection("mongodb+srv://awishwaseem7:d8ryJLfvlD3hZnC6@cluster0.54gwnw4.mongodb.net/?retryWrites=true&w=majority")

export default async function getBlogs(req, res) {
  try {
    const { search } = req.query;

    // Check if id is missing or invalid
    if (!search) {
      return res.status(400).json({ error: 'Missing or invalid missing' });
    } else {
      
      const data = await Blogs.find({category : search})
      console.log(data);
      res.send(data); 
    }
  } catch (error) {
    console.log(`Error: ${error}`);
    res.status(500).json({ error });
  }
}
