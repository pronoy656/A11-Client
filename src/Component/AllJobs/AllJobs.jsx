import { useLoaderData } from "react-router-dom";
import AllJobsCard from "../AllJobsCard/AllJobsCard";

const AllJobs = () => {
  const allApplyJob = useLoaderData();

  return (
    <div className="grid grid-cols-3 max-w-7xl mx-auto gap-x-8 mb-12">
      {allApplyJob.map((apply) => (
        <AllJobsCard key={apply._id} apply={apply}></AllJobsCard>
      ))}
    </div>
  );
};

export default AllJobs;
