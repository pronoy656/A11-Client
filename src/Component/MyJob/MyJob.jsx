import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Table from "../Table/Table";
import Swal from "sweetalert2";

const MyJob = () => {
  const { user } = useContext(AuthContext);
  const [jobs, setJobs] = useState([]);

  const url = `http://localhost:5000/myJobs?email=${user.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  // delete operation
  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this job?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/allJobs/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your job has been deleted.",
                icon: "success",
              });
              const remaining = jobs.filter((job) => job._id !== _id);
              setJobs(remaining);
            }
          });
      }
    });
  };

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
              <Table
                key={job._id}
                job={job}
                handleDelete={handleDelete}
              ></Table>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyJob;
