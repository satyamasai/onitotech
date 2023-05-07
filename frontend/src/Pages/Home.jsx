import React from "react";
// import { Button } from '@mui/material/Button';

const Home = () => {
  const hadnleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.sex.value);
  };

  return (
    <div className="home">
      <form onSubmit={hadnleSubmit}>
        {/* personal details section */}

        <div className="personal_details">
          <div className="heading">
            <h3>Personal Details : </h3>
          </div>
          <div className="personals_input">
            <div className="name_mobile_div">
              <div>
                <label htmlFor="">Name <span>*</span></label>
                <input type="text" name="name" placeholder="Name" />
              </div>

              <div>
                <label htmlFor="">Mobile<span>*</span> </label>
                <input type="text" name="mobile" placeholder="Mobile" />
              </div>
            </div>
            <div className="age_sex_gov_div">
              <div className="age_sex_div">
                <div className="age_div">
                  <label htmlFor="">Age<span>*</span> </label>
                  <input type="text" name="age" placeholder="Age" />
                </div>
                <div className="sex_div">
                  <label htmlFor="">Sex<span>*</span></label>
                  <select name="sex">
                    <option value="">Sex</option>
                    <option value="male">M</option>
                    <option value="female">F</option>
                  </select>
                </div>
              </div>
              <div className="govt_id_div">
                <label htmlFor="">Govt issued ID<span>*</span></label>

                <div>
                  <select name="id_type">
                    <option value="">ID type</option>
                    <option value="">Aadhar</option>
                    <option value="">PAN</option>
                  </select>
                  <input
                    name="govt_id_number"
                    type="text"
                    placeholder="govt id Number"
                  />
                </div>
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
              <select name="guardian" id="">
                <option value="">Select Guardian</option>
                <option value="">Mother</option>
                <option value="">Father</option>
              </select>

              <input
                type="text"
                name="guardian_name"
                placeholder="Enter Guardian Name"
              />
            </div>

            <div className="email_emergency">
              <div className="email">
                <label htmlFor="">Email </label>
                <input type="text" name="email" placeholder="Enter Email" />
              </div>

              <div className="emergency">
                <label htmlFor="">Emergency number </label>
                <input
                  type="text"
                  name="emergency_num"
                  placeholder="Enter Emergency number"
                />
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
                  placeholder="Enter Address"
                  type="text"
                  id="address"
                  name="address"
                />
              </div>
              <div>
                <label htmlFor="city">City:</label>
                <input
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
                  <select type="text" id="state" name="state">
                    <option value="">Select State</option>
                    <option value="">Delhi</option>
                    <option value="">Maharastra</option>
                    <option value="">Madhya Pradesh</option>
                    <option value="">Uttar Pradesh</option>
                    <option value="">Haryana</option>
                    <option value="">Punjab</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="pin">Pin: </label>
                  <input
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

                <input name="occupation" type="text" placeholder="Occupation" />
              </div>
              <div className="nationality">
                <label htmlFor="">Nationality </label>
                <input
                  type="text"
                  name="nationality"
                  placeholder="Nationality"
                />
              </div>
            </div>

            <div className="Religion">
              <label htmlFor="">Religion </label>
              <select type="text" name="religion">
                <option value="">Select Religion</option>
                <option value="">Hindu</option>
                <option value="">Muslim</option>
                <option value="">Sikh</option>

                <option value="">Chritian</option>
              </select>
            </div>

            <div className="maritial_status">
              <label htmlFor="">Maritial Status</label>
              <select name="maritial_status" id="">
                <option value="">Maritial status</option>
                <option value="">Single</option>
                <option value="">Married</option>
                <option value="">Divorced</option>
              </select>
            </div>
            <div className="blood_grp">
              <label htmlFor="">Blood Group</label>
              <select name="blood_group" id="">
                <option value="">Blood Group</option>
                <option value="">A+</option>
                <option value="">A-</option>
                <option value="">B+</option>
                <option value="">B-</option>
                <option value="">AB+</option>
                <option value="">AB-</option>
                <option value="">O+</option>
                <option value="">O-</option>
              </select>
            </div>
          </div>
        </div>
        <div className="submit_div">
          <div>
            <button className="cancel_btn">Cancel</button>
            <input className="submit_btn" type="submit" value={"Submit"} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Home;
