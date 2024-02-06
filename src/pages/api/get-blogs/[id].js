// api/get-blogs/[id].js
import Blogs from '@/models/blogs';
import { dbConnection } from '@/db/config';
import mongoose from "mongoose";

// Import ObjectId from mongoose
const { ObjectId } = mongoose.Types;

// Establish database connection
// dbConnection('mongodb://localhost:27017/blogify');
dbConnection("mongodb+srv://awishwaseem7:d8ryJLfvlD3hZnC6@cluster0.54gwnw4.mongodb.net/?retryWrites=true&w=majority")

export default async function getBlogs(req, res) {
  try {
    const { id } = req.query;

    // Check if id is missing or invalid
    if (!id) {
      return res.status(400).json({ error: 'Missing or invalid id' });
    } else {
      // Convert id to ObjectId using new keyword
      const objectId = new ObjectId(id);
      
      const data = await Blogs.findById(objectId);
      console.log(data);

      res.json(data); 
    }
  } catch (error) {
    console.log(`Error: ${error}`);
    res.status(500).json({ error });
  }
}
