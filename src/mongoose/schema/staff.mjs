import mongoose from "mongoose";

const StaffSchema = new mongoose.Schema({
  staffId: {
    type: mongoose.Schema.Types.ObjectId,
  },
  fullName: {
    type: mongoose.Schema.Types.String,
  },
  dateOfBirth: mongoose.Schema.Types.Date,
  gender: {
    type: mongoose.Schema.Types.Number,
    male: 1,
    female: 2,
  },
});

export const Staff = mongoose.model("Staff", StaffSchema);
