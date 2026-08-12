const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      validate(value) {
        if (!validate.isEmail(value)) {
          throw new Error("Email is");
        }
      },
    },
    password: { 
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      minlength: 6,
      maxlength: 14,
      validate(value) {
        if (value.toLowerCase().include("password")) {
          throw new Error('password cannot contain "password"');
        }
      },
    },
  });
  
  const User = mongoose.model ('User', userSchema)


module.exports = User;