import mongoose from 'mongoose';

const { Schema, model } = mongoose;

// Also needs an image
const roomSchema = new Schema({
  user: { type: String, required: true },
  heading: { type: String, required: true, min: 6, max: 255 },
  selectedFile: { type: String, required: true },
  guests: { type: Number, required: true, max: 20 },
  bed: { type: Number, required: true, max: 10 },
  bedRooms: { type: Number, required: true, max: 10 },
  bathRooms: { type: Number, required: true, max: 10 },
  kitchen: { type: Boolean, required: true },
  parking: { type: Boolean, required: true },
  wifi: { type: Boolean, required: true },
  date: { type: Date, default: Date.now },
});

export const Room = mongoose.models.Room || mongoose.model('Room', roomSchema);
