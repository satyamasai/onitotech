const { userModel } = require("../Models/user.model");
require("dotenv").config();

const addUser = async (req, res) => {
  const {
    address,
    age,
    city,
    country,
    email,
    emergency_num,
    guardian,
    guardian_name,
    id_number,
    id_type,
    aritial_status,
    mobile,
    name,
    nationality,
    occupation,
    pin,
    religion,
    sex,
    state,
  } = req.body;
  try {
    const user = await userModel.findOne({ mobile });
    if (user) {
      res.send({
        message: "User already exists!",
        status: "Exist",
      });
    } else {
      const new_user = new userModel({
        address,
        age,
        city,
        country,
        email,
        emergency_num,
        guardian,
        guardian_name,
        id_number,
        id_type,
        aritial_status,
        mobile,
        name,
        nationality,
        occupation,
        pin,
        religion,
        sex,
        state,
      });
      await new_user.save();
      res.send({ message: "User added Successfully", status: "Success" });
    }
  } catch (err) {
    res.send({ message: "Something went wrong", status: "Error" });
    console.log(err);
  }
};


module.exports={
    addUser
}