import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../../varient";

const JobCard = ({ job }) => {
  const {
    _id,
    picture,
    subCategory,
    name,
    email,
    category,
    salaryRange,
    JobPostingDate,
    applicationDeadline,
    jobApplicantsNumber,
    jobDescription,
  } = job;
  return (
    <div>
      <motion.div
        variants={fadeIn("left", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="md:w-[380px] md:h-[330px] border bg-base-100 shadow-lg rounded-2xl p-4 mb-11 mt-11 hover:scale-105 hover:bg-indigo-200  transition duration-500"
      >
        <div className="flex justify-between">
          <img className="w-14 h-14 rounded-full" src={picture} alt="" />
          <FaRegHeart />
        </div>
        <h1 className="text-2xl font-bold">Title:{subCategory}</h1>
        <div className="flex gap-x-4 mt-3">
          <div className="btn btn-sm bg-slate-100 text-black">{category}</div>
          <div className="btn btn-sm bg-slate-100 text-black">
            Apply : {jobApplicantsNumber}
          </div>
        </div>
        <p className="btn btn-sm bg-slate-100 mt-3 text-black">{email}</p>
        <div className="border border-b-1 border-black mt-7"></div>
        <div className="flex justify-between mt-6">
          <div>
            <h1 className="text-xl font-bold">${salaryRange}</h1>
            <h1>
              <span className="text-lg font-medium">Deadline:</span>{" "}
              {applicationDeadline}
            </h1>
          </div>
          <Link to={`/details/${_id}`}>
            {" "}
            <button className="btn bg-black text-white btn-sm">
              View Details
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default JobCard;
