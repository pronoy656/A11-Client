import { CiBullhorn } from "react-icons/ci";
import { SiCodesignal } from "react-icons/si";
import { IoIosPeople } from "react-icons/io";
import { FaHandHoldingUsd } from "react-icons/fa";
import { FaUserSecret } from "react-icons/fa";
import { PiHandshakeFill } from "react-icons/pi";
import { RiCustomerService2Line } from "react-icons/ri";
import { GoFileDirectory } from "react-icons/go";
const Extra = () => {
  return (
    <div className="mb-20">
      <h1 className="text-center  mt-10 mb-10 text-3xl font-bold">
        Trusted by the worlds <br /> biggest Business
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 max-w-5xl mx-auto space-y-10 ">
        <div className="flex items-center gap-x-4 bg-base-100 shadow-lg  w-56 hover:scale-105 hover:bg-indigo-200  transition duration-500">
          <div className="text-2xl text-red-500 font-semibold">
            <CiBullhorn />
          </div>
          <h1 className="text-lg font-semibold">
            Marketing & <br />
            comunication
            <br />
            <span className="text-sm font-normal">100 Jobs available</span>
          </h1>
        </div>
        <div className="flex items-center gap-x-4 bg-base-100 shadow-lg  w-56 hover:scale-105 hover:bg-indigo-200  transition duration-500">
          <div className="text-2xl text-red-500 font-semibold">
            <SiCodesignal />
          </div>
          <h1 className="text-lg font-semibold">
            Design & <br />
            Development
            <br />
            <span className="text-sm font-normal">100 Jobs available</span>
          </h1>
        </div>
        <div className="flex items-center gap-x-4 bg-base-100 shadow-lg  w-56 hover:scale-105 hover:bg-indigo-200  transition duration-500">
          <div className="text-2xl text-red-500 font-semibold">
            <IoIosPeople />
          </div>
          <h1 className="text-lg font-semibold">
            Research & <br />
            Development
            <br />
            <span className="text-sm font-normal">100 Jobs available</span>
          </h1>
        </div>
        <div className="flex items-center gap-x-4 bg-base-100 shadow-lg  w-56 hover:scale-105 hover:bg-indigo-200  transition duration-500">
          <div className="text-2xl text-red-500 font-semibold">
            <FaHandHoldingUsd />
          </div>
          <h1 className="text-lg font-semibold">
            Finance & <br />
            management
            <br />
            <span className="text-sm font-normal">100 Jobs available</span>
          </h1>
        </div>
        <div className="flex items-center gap-x-4 bg-base-100 shadow-lg  w-56 hover:scale-105 hover:bg-indigo-200  transition duration-500">
          <div className="text-2xl text-red-500 font-semibold">
            <FaUserSecret />
          </div>
          <h1 className="text-lg font-semibold">
            Armforce & <br />
            Securoty
            <br />
            <span className="text-sm font-normal">100 Jobs available</span>
          </h1>
        </div>
        <div className="flex items-center gap-x-4 bg-base-100 shadow-lg  w-56 hover:scale-105 hover:bg-indigo-200  transition duration-500">
          <div className="text-2xl text-red-500 font-semibold">
            <PiHandshakeFill />
          </div>
          <h1 className="text-lg font-semibold">
            Business & <br />
            consulting
            <br />
            <span className="text-sm font-normal">100 Jobs available</span>
          </h1>
        </div>
        <div className="flex items-center gap-x-4 bg-base-100 shadow-lg  w-56 hover:scale-105 hover:bg-indigo-200  transition duration-500">
          <div className="text-2xl text-red-500 font-semibold">
            <RiCustomerService2Line />
          </div>
          <h1 className="text-lg font-semibold">
            Customer & <br />
            care
            <br />
            <span className="text-sm font-normal">100 Jobs available</span>
          </h1>
        </div>
        <div className="flex items-center gap-x-4 bg-base-100 shadow-lg  w-56 hover:scale-105 hover:bg-indigo-200  transition duration-500">
          <div className="text-2xl text-red-500 font-semibold">
            <GoFileDirectory />
          </div>
          <h1 className="text-lg font-semibold">
            Project & <br />
            Management
            <br />
            <span className="text-sm font-normal">100 Jobs available</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Extra;
