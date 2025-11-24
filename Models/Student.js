import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    nickname: { type: String },
    gender: { type: String, required: true },
    dob: { type: Date, required: true },
    department: { type: String, required: true },
    batch: { type: String, required: true },
    phone: { type: String, required: true },
    willAttend: { type: Boolean, required: true },
    guests: { type: Number, default: 0 },
    tshirtSize: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model('Student', studentSchema);
