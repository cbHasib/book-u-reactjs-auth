import React, { useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/UserContext";

const Login = () => {
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const navigate = useNavigate();

  const { signIn, user, setLoading, loginWithGoogle, loginWithGitHub } =
    useContext(AuthContext);

  useEffect(() => {
    if (user && user.uid) {
      navigate(from, { replace: true });
    }
  }, [from, user, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        form.reset();
        navigate(from, { replace: true });
        toast.success("Successfully Login!");
      })
      .catch((error) => {
        toast.error(error.message);
        setLoading(false);
      });
  };

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((result) => {
        toast.success(`Welcome back ${result.user.displayName}!`);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message);
        setLoading(false);
      });
  };
  const handleGitHubLogin = () => {
    loginWithGitHub()
      .then((result) => {
        toast.success(`Welcome back ${result.user.displayName}!`);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message);
        setLoading(false);
      });
  };

  return (
    <div className="flex justify-center items-center h-full my-10">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-base-300 text-base-content">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block">
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-md input input-bordered"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Your Password"
              className="w-full px-4 py-3 rounded-md input input-bordered"
            />
            <div className="flex justify-end text-xs">
              <Link to="/">Forgot Password?</Link>
            </div>
          </div>
          <button type="submit" className="block w-full btn btn-primary">
            Sign in
          </button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
          <p className="px-3 text-sm text-gray-500">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <button
            onClick={handleGoogleLogin}
            type="button"
            className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:bg-blue-400 focus:outline-none"
          >
            <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
              <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"></path>
            </svg>

            <span className="hidden mx-2 sm:inline">Sign in with Google</span>
          </button>

          <button
            type="button"
            onClick={handleGitHubLogin}
            className="p-2 mx-2 text-sm font-medium text-gray-500 transition-colors duration-300 transform bg-gray-300 rounded-md hover:bg-gray-200"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 30 30">
              <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
            </svg>
          </button>
        </div>
        <p className="text-xs text-center sm:px-6">
          Don't have an account?{" "}
          <Link to="/register" className="underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
