import { MdOutlineStarPurple500 } from "react-icons/md";
import Marquee from "react-fast-marquee";

const UnderBanner = () => {
  return (
    <Marquee pauseOnHover={true} speed={80} autoFill>
      <div className="h-12 flex justify-between bg-black text-white border mb-11">
        <div className="flex items-center">
          <div className="text-[#9BCF53]">
            <MdOutlineStarPurple500 />
          </div>
          <p className="ml-1">Product Designer</p>
        </div>
        <div className="flex items-center">
          <div className="text-[#9BCF53]">
            <MdOutlineStarPurple500 />
          </div>
          <p className="ml-1">Marketing</p>
        </div>
        <div className="flex items-center">
          <div className="text-[#9BCF53]">
            <MdOutlineStarPurple500 />
          </div>
          <p className="ml-1">Ux Designer</p>
        </div>
        <div className="flex items-center">
          <div className="text-[#9BCF53]">
            <MdOutlineStarPurple500 />
          </div>
          <p className="ml-1">Font-end</p>
        </div>
        <div className="flex items-center">
          <div className="text-[#9BCF53]">
            <MdOutlineStarPurple500 />
          </div>
          <p className="ml-1">3D-illustrator</p>
        </div>
        <div className="flex items-center">
          <div className="text-[#9BCF53]">
            <MdOutlineStarPurple500 />
          </div>
          <p className="ml-1">Graphic Designer</p>
        </div>
        <div className="flex items-center">
          <div className="text-[#9BCF53]">
            <MdOutlineStarPurple500 />
          </div>
          <p className="ml-1">Ui Designer</p>
        </div>
        <div className="flex items-center">
          <div className="text-[#9BCF53]">
            <MdOutlineStarPurple500 />
          </div>
          <p className="ml-1">Ux Designer</p>
        </div>
      </div>
    </Marquee>
  );
};

export default UnderBanner;
