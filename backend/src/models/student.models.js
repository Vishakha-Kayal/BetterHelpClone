import mongoose, { Schema } from "mongoose";
import bcryptjs from 'bcryptjs';

const studentSchema = new Schema(
  {
    studentPhoto: {
      type: String,
      required: true,
    },
    aadharNumber: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      trim: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    identityCard: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
  },
  {
    timestamps: true,
  }
);

studentSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    const salt = await bcryptjs.genSalt(10);
    this.password = await bcryptjs.hash(this.password, salt);
    next();
});

studentSchema.methods.isPasswordCorrect = async function(password) {
    return await bcryptjs.compare(password, this.password);
};

export const Student = mongoose.model('Student', studentSchema);