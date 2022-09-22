const mongoose = require('mongoose');
const bcrypt = require("bcrypt");

const uniqueValidator = require('mongoose-unique-validator');

const UserSchema = new mongoose.Schema({
    userName: {
      type: String,
      required: [true, "Username is required"],
      unique: [true, '{PATH} already exist, please input another name.'],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: [true, '{PATH} already exist, please input email.'],
      validate: {
        validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
        message: "Please enter a valid email"
      }
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "Password must be 8 characters or longer"]
    }
  }, {timestamps: true});

  UserSchema.virtual('userId').get(function () {
    return this._id.toHexString()
  })

  UserSchema.set('toJSON', {
    virtuals: true,
  })

  // UserSchema.virtual('confirmPassword')
  // .get( () => this._confirmPassword )
  // .set( value => this._confirmPassword = value );

  // UserSchema.pre('validate', function(next) {
  //   if (this.password !== this.confirmPassword) {
  //     this.invalidate('confirmPassword', 'Password must match confirm password');
  //   }
  //   next();
  // });

  UserSchema.pre("save", async function (next) {
    try {
      const hashedPassword = await bcrypt.hash(this.password, 10);
      console.log("hashedPassword", hashedPassword);
      this.password = hashedPassword;
      next();
    } catch (err) {
      console.log("error in save", err);
    }
  });

  

UserSchema.plugin(uniqueValidator, {message: '\'{VALUE}\' is already in use. Try another name.'});

const User = mongoose.model('User', UserSchema);

module.exports = { User: User };