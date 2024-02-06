// const { Schema, model } = require("mongoose");
// const { createHmac, randomBytes } = require("crypto");
// // const {createTokenForUser} = require("../services/authentication")

// const userSchema = new Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//     },
//     email: {
//       type: String,
//       required: true,
//       unique: true,
//     },
//     salt: {
//       type: String,
//     },
//     password: {
//       type: String,
//       required: true,
//     },
//   },
//   { timestamps: true }
 
// );
// userSchema.pre("save", function (next) {
//   const user = this;
//   if (!user.isModified("password")) return;

//   const salt = randomBytes(16).toString();
//   const hashedPassword = createHmac("sha256", salt)
//     .update(user.password)
//     .digest("hex");

//   (this.salt = salt), (this.password = hashedPassword);

//   next();
// });
// 
// const User = model("users", userSchema);

// module.exports = User;


const mongoose = require('mongoose');
const { createHmac, randomBytes } = require("crypto");
import {createTokenForUser , secret} from "@/services/authentication"


const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    salt: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", function (next) {
    const user = this;
    if (!user.isModified("password")) return;
  
    const salt = randomBytes(16).toString();
    const hashedPassword = createHmac("sha256", salt)
      .update(user.password)
      .digest("hex");
  
    (this.salt = salt), (this.password = hashedPassword);
  
    next();
  });


  userSchema.static("matchPasswordAndGenerateToken", async function (email, password) {
    const user = await  this.findOne({ email });
  
    if ( ! user) {
      return false;
    }
  
    const salt = user.salt;
    const hashedPassword = user.password;
  
    const userProvidedHash = createHmac("sha256", salt)
      .update(password)
      .digest("hex");
            
      if( hashedPassword !== userProvidedHash){
        return false;
      }
      else{
        const token = createTokenForUser(user);
        return token;
      }
  });
module.exports =
    mongoose.models.users || mongoose.model('users', userSchema);




















