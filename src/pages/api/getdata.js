import React from 'react';
import Blogs from "@/models/blogs"
import {dbConnection} from "@/db/config"



// dbConnection("mongodb://localhost:27017/blogify")
dbConnection("mongodb+srv://awishwaseem7:d8ryJLfvlD3hZnC6@cluster0.54gwnw4.mongodb.net/?retryWrites=true&w=majority")

export default async function getBlogs(req,res) {
          const data = await Blogs.find({}) 
          res.send(data)
          // res.status(200).json(data);

     
}