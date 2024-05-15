import { useLoaderData } from "react-router-dom";

const DetailsApply = () => {
  const jobsApply = useLoaderData();
  const { title, photo, name, email, date, category, resume, salary } =
    jobsApply;

  return (
    <div>
      <h1 className="text-center mt-11 text-4xl font-semibold">
        Apply Jobs Details
      </h1>
      <div className="md:flex space-x-7 mt-10 mb-12 max-w-7xl mx-auto bg-slate-100 rounded-xl">
        <div className="md:w-1/2">
          <img className="h-[350px] w-full rounded-2xl" src={photo} alt="" />
        </div>
        <div className="md:w-1/2">
          <h1 className="mt-11 text-3xl font-extrabold text-black">
            Title : {title}
          </h1>
          <h1 className="text-base font-medium mt-4 text-black">
            Name: {name}
          </h1>
          <h1 className="text-base font-medium mt-4 text-black">
            Email: {email}
          </h1>
          <h1 className="text-base font-medium mt-4 text-black">
            Date: {date}
          </h1>
          <h1 className="text-base font-medium mt-4 text-black">
            Category {category}
          </h1>
          <h1 className="text-base font-medium mt-4 text-black">
            Resume Link: {resume}
          </h1>
          <h1 className="text-base font-medium mt-4 text-black">
            Salary: {salary}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default DetailsApply;
