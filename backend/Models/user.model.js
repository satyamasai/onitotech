const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: String, required: true },
    sex: { type: String, required: true },
    mobile: { type: Number },
    id_type: { type: String },
    id_number: {  },
    maritial_status: { type: String },
    nationality: { type: String },
    pin: { type: Number },
    religion: { type: String },
    state: { type: String },
    address: { type:String },
    city: { type: String },
    country: { type: String },
    guardian: { type: String },
    guardian_name: { type: String },
    occupation: { type:String },
    email: { type: String },
    emergency_num: { type: Number },
  },
  { timestamps: true }
);

const userModel = mongoose.model("user", userSchema);

module.exports = {
  userModel,
};
