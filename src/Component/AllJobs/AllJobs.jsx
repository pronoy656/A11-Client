import { useLoaderData } from "react-router-dom";
import AllJobsCard from "../AllJobsCard/AllJobsCard";

const AllJobs = () => {
  const allApplyJob = useLoaderData();

  return (
    <div>
      <h1>This is all jobs page: {allApplyJob.length}</h1>
      {allApplyJob.map((apply) => (
        <AllJobsCard key={apply._id} apply={apply}></AllJobsCard>
      ))}
    </div>
  );
};

export default AllJobs;
