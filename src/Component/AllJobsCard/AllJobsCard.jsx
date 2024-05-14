const AllJobsCard = ({ apply }) => {
  const { photo, title, name, email, date, category, resume, salary } = apply;
  return (
    <div>
      <div className="w-[450px] border space-y-5 p-3">
        <img className="w-[450px] h-[200px] rounded-2xl" src={photo} alt="" />
        <h1 className="text-2xl font-bold">Title: {title}</h1>
        <div className="flex justify-between">
          <h1 className="btn btn-sm bg-slate-100 text-black">Name: {name}</h1>
          <h1 className="btn btn-sm bg-slate-100 text-black">Email: {email}</h1>
        </div>
        <div className="flex justify-between">
          <h1 className="btn btn-sm bg-slate-100 text-black">
            Deadline: {date}
          </h1>
          <h1 className="btn btn-sm bg-slate-100 text-black">
            Category: {category}
          </h1>
        </div>
        <h1 className="btn btn-sm bg-slate-100 text-black">Salary: {salary}</h1>
        <h1>
          {" "}
          <span className="text-lg font-medium">Resume link:</span> {resume}
        </h1>
        <div className="flex justify-end">
          <button className="btn bg-black text-white">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default AllJobsCard;
