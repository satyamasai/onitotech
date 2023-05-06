import React from "react";

const Home = () => {
  return (
    <div className="home">
      <form>
      {/* personal details section */}
     
      <div className="personal_details">
      <div className="heading" >
        <h3>Personal Details</h3>
        </div>
          <div className="personals_input">
            <div className="name_mobile_div">
              <div>
                <label htmlFor="">Name*</label>
                <input type="text" name="name" placeholder="Name" />
              </div>

              <div>
                <label htmlFor="">Mobile*</label>
                <input type="text" name="mobile" placeholder="Mobile" />
              </div>
            </div>
            <div className="age_sex_gov_div">
              <div className="age_sex_div">
                <div>
                  <label htmlFor="">Age*</label>
                  <input type="text" name="age" placeholder="Age" />
                </div>
                <div>
                  <label htmlFor="">Sex*</label>
                  <select>
                    <option value="">Sex</option>
                    <option value="">M</option>
                    <option value="">F</option>
                  </select>
                </div>
              </div>
              <div className="govt_id_div">
                <label htmlFor="">Govt issued ID*</label>

                <div>
                  <select>
                    <option value="">ID type</option>
                    <option value="">Aadhar</option>
                    <option value="">PAN</option>
                  </select>
                  <input type="text" placeholder="govt id" />
                </div>
              </div>
            </div>
          </div>
        </div>
       {/* contact details section */}
      
       <div className="personal_details">
       <div className="heading" >
         <h3>Contact Details</h3>
         </div>
           <div className="personals_input">
             <div className="name_mobile_div">
               <div>
                 <label htmlFor="">Name*</label>
                 <input type="text" name="name" placeholder="Name" />
               </div>
 
               <div>
                 <label htmlFor="">Mobile*</label>
                 <input type="text" name="mobile" placeholder="Mobile" />
               </div>
             </div>
             <div className="age_sex_gov_div">
               <div className="age_sex_div">
                 <div>
                   <label htmlFor="">Age*</label>
                   <input type="text" name="age" placeholder="Age" />
                 </div>
                 <div>
                   <label htmlFor="">Sex*</label>
                   <select>
                     <option value="">Sex</option>
                     <option value="">M</option>
                     <option value="">F</option>
                   </select>
                 </div>
               </div>
               <div className="govt_id_div">
                 <label htmlFor="">Govt issued ID*</label>
 
                 <div>
                   <select>
                     <option value="">ID type</option>
                     <option value="">Aadhar</option>
                     <option value="">PAN</option>
                   </select>
                   <input type="text" placeholder="govt id" />
                 </div>
               </div>
             </div>
           </div>
         </div>

        </form>

    </div>
  );
};

export default Home;
