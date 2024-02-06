const mongoose = require('mongoose');

const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const blogSchema = new Schema(
  {
    headline: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      
    },
    createdBy : {
      
      type: String,
      required: true,
    },
    img_url: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
blogSchema.pre("save", function (next) {
  console.log("Before saving:", this);
  try {
    const updatedCategory = this.category.toLowerCase();
    this.category = updatedCategory;
    next();
  } catch (error) {
    console.error("Error in pre-save middleware:", error);
    next(error);
  }
});

module.exports =
    mongoose.models.blogs || mongoose.model('blogs', blogSchema);
