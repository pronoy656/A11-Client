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
      <div className="w-[400px] h-[250px] border">
        <div className="flex justify-between">
          <img className="w-12 h-12 rounded-full" src={picture} alt="" />
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
        <div className="flex justify-between">
          <div>
            <h1 className="text-xl font-bold">${salaryRange}</h1>
            <h1>Deadline: {applicationDeadline}</h1>
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
