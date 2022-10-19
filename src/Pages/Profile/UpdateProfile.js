import { updateProfile } from "firebase/auth";
import React, { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/UserContext";

const UpdateProfile = () => {
  const { user } = useContext(AuthContext);

  console.log(user);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;

    updateProfile(user, {
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => {
        toast.info("Profile Updated");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="flex justify-center items-center h-full my-10">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-base-300 text-base-content">
        <h1 className="text-2xl font-bold text-center">Update Your Profile</h1>
        <form
          onSubmit={handleSubmit}
          className="space-y-3 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-1 text-sm">
            <label htmlFor="name" className="block">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              defaultValue={user.displayName}
              className="w-full px-4 py-3 rounded-md input input-bordered"
            />
          </div>

          <div className="space-y-1 text-sm">
            <label htmlFor="photoURL" className="block">
              Photo URL
            </label>
            <input
              type="url"
              name="photoURL"
              id="photoURL"
              placeholder="Your Photo Url"
              defaultValue={user.photoURL}
              className="w-full px-4 py-3 rounded-md input input-bordered"
            />
          </div>

          <button type="submit" className="block w-full btn btn-primary">
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
