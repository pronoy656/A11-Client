import { useLoaderData } from "react-router-dom";
import AllJobsCard from "../AllJobsCard/AllJobsCard";

const AllJobs = () => {
  const allApplyJob = useLoaderData();

  return (
    <div>
      <h1 className="text-center mt-9 mb-9 text-2xl font-bold">All Jobs</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>email</th>
              <th>Category</th>
              <th>Salary Range</th>
              <th>Application Deadline</th>
            </tr>
          </thead> */}
          <tbody>
            {allApplyJob.map((apply) => (
              <AllJobsCard key={apply._id} apply={apply}></AllJobsCard>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllJobs;
