import mongoose from "mongoose";
import bcryptjs from "bcryptjs"

const DoctorSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true ,trim:true},
  password: { type: String, required: true },
  name: { type: String, required: true },
  phone: { type: String },
  gender: {
    type: String,
    enum: ['male', 'female']
  },
  photo: {
    type: String,
    required: true,
  },
  license: {
    type: String,
    required: true,
  },
  ticketPrice: { type: Number },
  // Fields for doctors only
  specialization: { type: String },
  qualifications: {
    type: Array,
  },

  experiences: {
    type: Array,
  },

  bio: { type: String, maxLength: 50 },
  about: { type: String },
  timeSlots: { type: Array },
  reviews: [{ type: mongoose.Types.ObjectId, ref: "Review" }],
  averageRating: {
    type: Number,
    default: 0,
  },
  totalRating: {
    type: Number,
    default: 0,
  },
  isApproved: {
    type: String,
    enum: ["pending", "approved", "cancelled"],
    default: "pending",
  },
  appointments: [{ type: mongoose.Types.ObjectId, ref: "Appointment" }],
});

DoctorSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcryptjs.genSalt(10);
  this.password = await bcryptjs.hash(this.password, salt);
  next();
});

// Method to compare passwords
DoctorSchema.methods.isPasswordCorrect = async function (password) {
  return await bcryptjs.compare(password, this.password);
};

export const Doctor =  mongoose.model("Doctor", DoctorSchema);