import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import registerAnimation from "../../../src/Animation - 1715664801480.json";

const Login = () => {
  const { userLogin, signInWithGoogle } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);

  // success message
  const [success, setSuccess] = useState("");
  // error message
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    // success and errorMessage clear
    setSuccess("");
    setError("");

    userLogin(email, password)
      .then((loginUser) => {
        console.log(loginUser.user);
        navigate(location?.state ? location?.state : "/");
        setSuccess("Sign in successFully");
        toast.success("Sign in SuccessFully");
        navigate(location?.state ? location?.state : "/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        const errorCode = error.code;
        console.log(errorMessage, errorCode);
        setError("Wrong Password");
      });
  };

  // Google SignIn
  const handleSignInWithGoogle = () => {
    signInWithGoogle()
      .then((googleUser) => {
        const userGoogle = googleUser.user;
        console.log(userGoogle);
        toast.success("SignUp SuccessFully ");
        navigate(location?.state ? location?.state : "/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        const errorCode = error.code;
        console.log(errorMessage, errorCode);
      });
  };

  return (
    <div className="mt-4 bg-[url('https://i.ibb.co/4V0vH1r/high-angle-desktop-with-laptop-copy-space.jpg')] h-[700px] mb-20">
      <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-transparent rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl mb-11">
        <div className="hidden bg-cover lg:block lg:w-1/2">
          <Lottie animationData={registerAnimation}></Lottie>
        </div>

        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
          <div className="flex justify-center mx-auto">
            <img
              className="w-auto h-16 sm:h-8"
              src="https://i.ibb.co/mt4SvMk/Black-Pink-Bold-Lifestyle-Blogger-Personal-Name-Logo.png"
              alt=""
            />
          </div>

          <p className="mt-3 text-xl text-center text-white">Welcome back!</p>

          <form onSubmit={handleLogin}>
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium  text-white"
                htmlFor="LoggingEmailAddress"
              >
                Email Address
              </label>
              <input
                id="LoggingEmailAddress"
                name="email"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
              />
            </div>

            <div className="mt-4">
              <div className="flex justify-between">
                <label
                  className="block mb-2 text-sm font-medium text-white"
                  htmlFor="loggingPassword"
                >
                  Password
                </label>
              </div>

              <input
                id="loggingPassword"
                name="password"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="password"
              />
            </div>
            {success && (
              <p className="font-medium mt-3 text-green-500">{success}</p>
            )}
            {error && <p className="font-medium mt-3 text-red-600">{error}</p>}
            <div className="mt-6">
              <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-black rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                Sign In
              </button>
            </div>
            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

              <a
                href="#"
                className="text-xs text-center text-white hover:underline"
              >
                or login with email
              </a>

              <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
            </div>
            <a
              onClick={handleSignInWithGoogle}
              href="#"
              className="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <div className="px-4 py-2">
                <svg className="w-6 h-6" viewBox="0 0 40 40">
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#FFC107"
                  />
                  <path
                    d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                    fill="#FF3D00"
                  />
                  <path
                    d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                    fill="#4CAF50"
                  />
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#1976D2"
                  />
                </svg>
              </div>

              <span className="w-5/6 px-4 py-3 font-bold text-center text-white">
                Sign in with Google
              </span>
            </a>
          </form>
          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-2 dark:border-black md:w-1/4"></span>

            <Link to={"/register"}>
              {" "}
              <a
                href="#"
                className="text-base text-white uppercase  hover:underline"
              >
                or sign up
              </a>
            </Link>

            <span className="w-1/5 border-2 dark:border-gray-600 md:w-1/4"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
