import Lottie from "lottie-react";
import errorPage from "../../../src/errorpage.json";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div
        className="flex justify-center
     "
      >
        <Lottie
          className="w-[550px] h-[550px]"
          animationData={errorPage}
        ></Lottie>
      </div>
      <div className="flex justify-center">
        <Link to={"/"}>
          {" "}
          <button className="btn bg-black text-white">Home</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
