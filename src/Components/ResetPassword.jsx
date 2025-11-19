import React, { useContext } from "react";
import AuthContext from "../Contexts/AuthContext";

const ResetPassword = () => {
    const { email, resetPassword} = useContext(AuthContext)


  const handleResetPassword = (e) => {
    e.preventDefault();
      const email = e.target.elements.email.value;
      
      resetPassword(email).then(()=> window.location.href = "https://mail.google.com")
  };

  return (
    <div>
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse bg-[#F4F7FB] rounded-lg mx-2.5 my-5 lg:my-20">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleResetPassword}>
                <fieldset className="fieldset">
                  <label className="label text-2xl font-bold">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="input"
                    placeholder="Enter your email"
                    defaultValue={email}
                    required
                  />
                  <button className="btn btn-neutral bg-[#1A73E8] hover:bg-[#6cc44c] mt-4">
                    Reset
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
