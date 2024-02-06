const mongoose = require('mongoose');


const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const commentSchema = new Schema(
{
     email: {
          type: String,
          required: true,
     },
       content: {
         type: String,
         required: true,
     },
    userName: {
      type: String,
      required: true,
    },
    BlogId :{
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports =
    mongoose.models.comments || mongoose.model('comments', commentSchema);