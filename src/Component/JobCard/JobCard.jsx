import { FaRegHeart } from "react-icons/fa";

const JobCard = ({ job }) => {
  const {
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
      <div className="w-[380px] h-[300px] border bg-base-100 shadow-lg rounded-2xl p-4 mb-11">
        <div className="flex justify-between">
          <img className="w-14 h-14 rounded-full" src={picture} alt="" />
          <FaRegHeart />
        </div>
        <h1 className="text-2xl font-bold">Title:{subCategory}</h1>
        <div className="flex gap-x-4 mt-3">
          <div className="btn btn-sm bg-slate-100">{category}</div>
          <div className="btn btn-sm bg-slate-100">
            Apply : {jobApplicantsNumber}
          </div>
        </div>
        <p className="btn btn-sm bg-slate-100 mt-3">{email}</p>
        <div className="border border-b-1 border-black mt-7"></div>
        <div className="flex justify-between mt-6">
          <div>
            <h1 className="text-xl font-bold">${salaryRange}</h1>
            <h1>
              <span className="text-lg font-medium">Deadline:</span>{" "}
              {applicationDeadline}
            </h1>
          </div>
          <button className="btn bg-black text-white btn-sm">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
