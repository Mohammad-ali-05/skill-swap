import React, { useContext } from "react";
import AuthContext from "../Contexts/AuthContext";

const Profile = () => {
  const { user, setUser, updateUserProfile } = useContext(AuthContext);

  const handleProfileUpdate = (e) => {
    e.preventDefault();

    const name = e.target.elements.name.value;
    const photoUrl = e.target.elements.photoURL.value;

    updateUserProfile({
      displayName: name,
      photoURL: photoUrl,
    }).then(() => setUser({ ...user, displayName: name, photoURL: photoUrl }));
  };

  return (
    <div className="px-2 md:px-14 lg:px-28 flex flex-col md:flex-row justify-center items-center gap-10 mt-5 md:mt-20">
      <div className="bg-[#F4F7FB] p-5 rounded-lg">
        <h2 className="text-center my-5 text-[#2F435C] text-2xl font-bold">
          My profile
        </h2>
        <div>
          <img
            className="rounded-full w-25 mx-auto my-3.5"
            src={user.photoURL}
            alt=""
          />
          <h3 className="text-xl font-medium my-1.5">
            Name: {user.displayName}
          </h3>
          <p className="text-xl font-medium my-1.5">Email: {user.email}</p>
        </div>
      </div>
      <div className="bg-[#F4F7FB]">
        <h2 className="text-center mt-3 text-[#2F435C] text-2xl font-bold">
          Update profile
        </h2>
        <div className="card  w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleProfileUpdate}>
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="input"
                  placeholder="Enter new name"
                  required
                />
                <label className="label">Photo url</label>
                <input
                  type="text"
                  name="photoURL"
                  className="input"
                  placeholder="Enter new photo url"
                  required
                />
                <button className="btn btn-neutral mt-4">Update</button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
