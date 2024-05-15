import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import registerAnimation from "../../../src/Animation - 1715664801480.json";

const Register = () => {
  const { userCreate, updateUserProfile, user, setUer } =
    useContext(AuthContext);

  // success Message
  const [success, setSuccess] = useState("");
  // Error Message
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(name, photo, email, password);

    // success and error msg clear
    setSuccess("");
    setError("");

    // password validation
    if (password.length < 6) {
      setError("Password Should be at least 6 characters");
      toast.error("Password Should be at least 6 characters");
      return;
    }

    userCreate(email, password)
      .then((createUser) => {
        const user = createUser.user;
        // console.log(user);
        updateUserProfile(name, photo).then(() => {
          setUer({ displayName: name, photoURL: photo });
        });
        setSuccess("Account Created Successfully");
        toast.success("SignUp Successfully");
      })
      .catch((error) => {
        const errorMessage = error.message;
        const errorCode = error.code;
        // console.log(errorMessage, errorCode);
        setError("Already have this Account");
        toast.error("Already Have this Account");
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-[url('https://i.ibb.co/tq34JW5/flat-lay-clean-office-desk.jpg')] mb-10 mt-11">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center   lg:text-left mr-8"></div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 md:ml-96">
            <h1 className="text-center text-2xl font-bold mt-2">
              Signup Here..
            </h1>
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="You name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="photo"
                  name="photo"
                  placeholder="Photo Url"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              {success && (
                <p className="font-medium mt-3 text-green-500">{success}</p>
              )}
              {error && (
                <p className="font-medium mt-3 text-red-600">{error}</p>
              )}
              <div className="form-control mt-6">
                <button className="btn bg-black text-white">Sign up</button>
              </div>
              <h1>
                Already have an Acount? please{" "}
                <Link to={"/login"}>
                  {" "}
                  <span className="text-lg font-bold">Login</span>
                </Link>
              </h1>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
