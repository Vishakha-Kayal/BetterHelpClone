import mongoose, { Mongoose, Schema } from 'mongoose';
import bcryptjs from 'bcryptjs';

const adminSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        match: /.+\@.+\..+/
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    blogs:[
        {
            type:Schema.Types.ObjectId,
            ref:'Blog',
        }
    ],
}, { timestamps: true });

// Hash password before saving
adminSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    const salt = await bcryptjs.genSalt(10);
    this.password = await bcryptjs.hash(this.password, salt);
    next();
});

// Method to compare passwords
adminSchema.methods.isPasswordCorrect = async function(password) {
    return await bcryptjs.compare(password, this.password);
};

export const Admin = mongoose.model('Admin', adminSchema);
