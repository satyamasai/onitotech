import React from "react";
// import { Button } from '@mui/material/Button';
import { useForm } from "react-hook-form";
import axios from 'axios'
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required(),
  age: yup.number().positive().required("This is required"),
  sex: yup.string().required(),
  mobile: yup.string().matches(/^[6-9]\d{9}$/, "Mobile number is invalid"),
  emergency_num: yup
    .string()
    .matches(/^[6-9]\d{9}$/, "Emergency contact number is invalid"),
  id_type: yup.string(),
  id_number: yup
    .string()
    .when("id_type", {
      is: "aadhar",
      then: ()=>yup
        .string()
        .matches(
          /^\d{12}$/,
          "Aadhar number should be a valid 12-digit numeric string"
        ),
      otherwise: () =>
        yup
          .string()
          .matches(
            /^[A-Za-z]{5}\d{4}[A-Za-z]{1}$/,
            "PAN number should be a valid 10-digit alpha-numeric string"
          ),
    })
    .required("Govt issued ID is a required field"),
});

const Home = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

//   ----onsubmit--------------
  const onSubmit = (data) => {
    console.log(data);
    axios.post('http://localhost:8008/adduser',data)
    .then((res)=>{
        console.log(res)
        window.location.reload()
    })
    .catch((err)=>{
        console.log(err)
    }
)
  };

  return (
    <div className="home">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* personal details section */}

        <div className="personal_details">
          <div className="heading">
            <h3>Personal Details : </h3>
          </div>
          <div className="personals_input">
            <div className="name_mobile_div">
              <div>
                <label htmlFor="">
                  Name <span>*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  {...register("name")}
                />
              </div>
              {errors.name && <span>{errors.name.message}</span>}{" "}
              <div>
                <label htmlFor="">Mobile </label>
                <input
                  type="number"
                  name="mobile"
                  placeholder="Mobile"
                  {...register("mobile")}
                />
              </div>
              {errors.mobile && <span>{errors.mobile.message}</span>}{" "}
            </div>
            <div className="age_sex_gov_div">
              <div className="age_sex_div">
                <div className="age_div">
                  <div style={{ display: "flex" }}>
                    <label htmlFor="">
                      Age <span> * </span> {"  "}
                    </label>
                    <input
                      type="number"
                      name="age"
                      placeholder="Age"
                      {...register("age")}
                    />
                  </div>
                  {errors.age && <span>{errors.age.message}</span>}{" "}
                </div>
                <div className="sex_div">
                  <div>
                    <label htmlFor="">
                      Sex<span>*</span>
                    </label>
                    <select name="sex" {...register("sex")}>
                      <option value="">Sex</option>
                      <option value="male">M</option>
                      <option value="female">F</option>
                    </select>
                  </div>
                  {errors.sex && <span>{errors.sex.message}</span>}{" "}
                </div>
              </div>
              <div className="govt_id_div">
                <div className="govt_id">
                  <label htmlFor="">Govt issued ID</label>
                  <select name="id_type" {...register("id_type")}>
                    <option value="">ID type</option>
                    <option value="aadhar">Aadhar</option>
                    <option value="pan">PAN</option>
                  </select>
                  <input
                    name="id_number"
                    type="text"
                    placeholder="govt id Number"
                    {...register("id_number")}
                  />
                </div>
                {errors.id_number && <span>{errors.id_number.message}</span>}{" "}
              </div>
            </div>
          </div>
        </div>
        {/*-------------------- contact details section ----------------*/}

        <div className="contact_details">
          <div className="heading">
            <h3>Contact Details : </h3>
          </div>
          <div className="contact_input">
            <div className="gaurdian_details">
              <label htmlFor="">Guardian Details </label>
              <select name="guardian" id="" {...register("guardian")}>
                <option value="">Select Guardian</option>
                <option value="mother">Mother</option>
                <option value="father">Father</option>
              </select>

              <input
                type="text"
                name="guardian_name"
                placeholder="Enter Guardian Name"
                {...register("guardian_name")}
              />
            </div>

            <div className="email_emergency">
              <div className="email">
                <label htmlFor="">Email </label>
                <input
                  {...register("email")}
                  type="text"
                  name="email"
                  placeholder="Enter Email"
                />
              </div>

              <div className="emergency">
                <div>
                  <label htmlFor="">Emergency number </label>
                  <input
                    type="text"
                    name="emergency_num"
                    placeholder="Enter Emergency number"
                    {...register("emergency_num")}
                  />
                </div>
                {errors.emergency_num && (
                  <span>{errors.emergency_num.message}</span>
                )}{" "}
              </div>
            </div>
          </div>
        </div>
        {/* ----------contact details section-------------- */}

        <div className="address_details">
          <div className="heading">
            <h3>Address Details : </h3>
          </div>
          <div className="address_inputs">
            <div className="address_city">
              <div>
                <label htmlFor="address">Address:</label>
                <input
                  {...register("address")}
                  placeholder="Enter Address"
                  type="text"
                  id="address"
                  name="address"
                />
              </div>
              <div>
                <label htmlFor="city">City:</label>
                <input
                  {...register("city")}
                  placeholder="Enter City"
                  type="text"
                  id="city"
                  name="city"
                />
              </div>
            </div>
            <div className="state_pin_country">
              <div className="state_pin">
                <div>
                  <label htmlFor="state">State: </label>
                  <select
                    {...register("state")}
                    type="text"
                    id="state"
                    name="state"
                  >
                    <option value="">Select State</option>
                    <option value="delhi">Delhi</option>
                    <option value="maharastra">Maharastra</option>
                    <option value="madhya pradesh">Madhya Pradesh</option>
                    <option value="uttar pradesh">Uttar Pradesh</option>
                    <option value="haryana">Haryana</option>
                    <option value="punjab">Punjab</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="pin">Pin: </label>
                  <input
                    {...register("pin")}
                    placeholder="Enter PIN"
                    type="text"
                    id="pin"
                    name="pin"
                  />
                </div>
              </div>
              <div className="country">
                <label htmlFor="country">Country:</label>
                <input
                  {...register("country")}
                  type="text"
                  id="country"
                  placeholder="Enter Country Name"
                  name="country"
                />
              </div>
            </div>
          </div>
        </div>
        {/*--------------- others details section -----------*/}
        <div className="others_details">
          <div className="heading">
            <h3>Others Details : </h3>
          </div>
          <div className="others_input">
            <div className="occu_nationality">
              <div className="occupation">
                <label htmlFor="">Occupation </label>

                <input
                  {...register("occupation")}
                  name="occupation"
                  type="text"
                  placeholder="Occupation"
                />
              </div>
              <div className="nationality">
                <label htmlFor="">Nationality </label>
                <input
                  {...register("nationality")}
                  type="text"
                  name="nationality"
                  placeholder="Nationality"
                />
              </div>
            </div>

            <div className="Religion">
              <label htmlFor="">Religion </label>
              <select {...register("religion")} type="text" name="religion">
                <option value="">Select Religion</option>
                <option value="">Hindu</option>
                <option value="">Muslim</option>
                <option value="">Sikh</option>

                <option value="">Chritian</option>
              </select>
            </div>

            <div className="maritial_status">
              <label htmlFor="">Maritial Status</label>
              <select
                {...register("maritial_status")}
                name="maritial_status"
                id=""
              >
                <option value="">Maritial status</option>
                <option value="single">Single</option>
                <option value="married">Married</option>
                <option value="divorced">Divorced</option>
              </select>
            </div>
            <div className="blood_grp">
              <label htmlFor="">Blood Group</label>
              <select {...register("maritial_status")} name="blood_group" id="">
                <option value="">Blood Group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>
          </div>
        </div>
        <div className="submit_div">
          <div>
            
            <input className="submit_btn" type="submit" value={"Submit"} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Home;
