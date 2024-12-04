import mongoose, { Schema } from "mongoose";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

const userSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    profileImage: {
      type: String,
      required: true,
    },
    refreshToken: {
      type: String,
      required: false,
    },
    groupJoined: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Group'
    }],
    isPrivate:{
      type:Boolean,
      default:false
    }
    
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcryptjs.genSalt(7);
  this.password = await bcryptjs.hash(this.password, salt);
  next();
});

userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcryptjs.compare(password, this.password);
};

userSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY || "1h",
    }
  );
};

userSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    }
  );
};

export const User = mongoose.model("User", userSchema);
