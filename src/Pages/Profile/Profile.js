import React, { useContext } from "react";
import { AuthContext } from "../../contexts/UserContext";
import userAvatar from "../../assets/images/user.png";
import { sendEmailVerification } from "firebase/auth";
import { toast } from "react-toastify";

const Profile = () => {
  const { user } = useContext(AuthContext);

  const handleMailSend = () => {
    sendEmailVerification(user)
      .then(() => {
        toast.success("Mail send. Check your inbox/spam!");
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <>
      {user && user?.emailVerified ? (
        <div className="max-w-lg p-8 sm:flex sm:space-x-6 bg-base-300 text-base-content m-20 mx-auto rounded-xl shadow-md">
          <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
            <img
              src={user?.photoURL ? user?.photoURL : userAvatar}
              alt=""
              referrerPolicy="no-referrer"
              className="object-cover object-center w-full h-full rounded-full dark:bg-gray-500"
            />
          </div>
          <div className="flex flex-col space-y-4">
            <div>
              <h2 className="text-2xl font-semibold">
                {user?.displayName || "Username"}
              </h2>
              <span className="text-sm dark:text-gray-400">
                Status:{" "}
                {user?.emailVerified ? (
                  <span className="text-green-600 font-bold">Verified</span>
                ) : (
                  <span className="text-red-600 font-bold">Unverified</span>
                )}
              </span>
            </div>
            <div className="space-y-1">
              <span className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  aria-label="Email address"
                  className="w-4 h-4"
                >
                  <path
                    fill="currentColor"
                    d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"
                  ></path>
                </svg>
                <span className="dark:text-gray-400">{user?.email}</span>
              </span>
              <span className="flex items-center space-x-2">
                

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                  />
                </svg>

                <span className="dark:text-gray-400">
                  {user?.uid || "No Phone Number"}
                </span>
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center flex-col gap-5 items-center text-center h-[80vh]">
          <h2 className="text-4xl font-bold text-red-600">
            Verify Your Mail First
          </h2>
          <button className="btn btn-warning" onClick={handleMailSend}>
            Send Verification Mail
          </button>
        </div>
      )}
    </>
  );
};

export default Profile;
