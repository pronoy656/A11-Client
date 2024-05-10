import { BsArrowRight } from "react-icons/bs";
import Lottie from "lottie-react";
import bannerAnimation from "../../../src/banner animation.json";
const Banner = () => {
  return (
    <div className="md:flex border  mt-12 h-[500px] mb-12">
      <div className="w-1/2 ml-28">
        <div className="flex gap-x-3 items-center">
          <h1 className="text-6xl font-sans font-semibold text-black">
            Find Your
          </h1>
          <div className="text-6xl ml-4 font-semibold text-black">
            <BsArrowRight />
          </div>
        </div>
        <h1 className="text-6xl font-sans font-semibold text-black mt-2">
          Dream Job Here
        </h1>
        <h1 className="text-6xl font-sans font-semibold text-black mt-2">
          In One Place
        </h1>
        <h1 className="text-lg font-sans font-normal mt-4">
          Find Jobs, create trackable resume and
        </h1>
        <h1 className="text-lg font-sans font-normal mt-1">
          enrich your application
        </h1>
        <div className="mt-4">
          <button className="btn btn-outline btn-sm">Fine art</button>
          <button className="btn btn-outline btn-sm ml-2">ui designer</button>
          <button className="btn btn-outline btn-sm ml-2">ux designer</button>
          <button className="btn btn-outline btn-sm ml-2">
            Graphics designer
          </button>
        </div>
        <div className="mt-3">
          <button className="btn btn-outline btn-sm">Product designer</button>
          <button className="btn btn-outline btn-sm ml-2">Marketing</button>
          <button className="btn btn-outline btn-sm ml-2">Font-end</button>
          <button className="btn btn-outline btn-sm ml-2">
            3D illustrator
          </button>
        </div>
        <div className="mt-5">
          <input
            type="text"
            placeholder="Search jobs for categories"
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <button className="btn bg-purple-500 text-black font-semibold btn-md ml-4">
            Explore
            <BsArrowRight />
          </button>
        </div>
      </div>

      <div className="w-1/2">
        <Lottie
          className="h-[550px] w-[700px]"
          animationData={bannerAnimation}
        ></Lottie>
      </div>
    </div>
  );
};

export default Banner;
