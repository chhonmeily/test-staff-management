import mongoose from "mongoose";

const StaffSchema = new mongoose.Schema({
  fullName: {
    type: mongoose.Schema.Types.String,
  },
  dateOfBirth: {
    type: mongoose.Schema.Types.String,
  },
  gender: {
    type: mongoose.Schema.Types.Number,
    male: 1,
    female: 2,
  },
});

export const Staff = mongoose.model("Staff", StaffSchema);
