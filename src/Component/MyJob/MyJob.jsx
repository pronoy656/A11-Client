import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Table from "../Table/Table";

const MyJob = () => {
  const { user } = useContext(AuthContext);
  const [jobs, setJobs] = useState([]);

  const url = `http://localhost:5000/myJobs?email=${user.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div>
      <h1>This is my job page</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>email</th>
              <th>Category</th>
              <th>Application Deadline</th>
              <th>Salary Range</th>
              {/* <th>Update</th>
              <th>Delete</th> */}
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <Table key={job._id} job={job}></Table>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyJob;
