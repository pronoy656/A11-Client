import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const UpdateJob = () => {
  const job = useLoaderData();
  const { subCategory } = job;
  const { _id, user } = useContext(AuthContext);
  const { id } = useParams();
  // console.log(id);
  const handleUpdateJob = (e) => {
    e.preventDefault();
    const picture = e.target.PictureURL.value;
    const subCategory = e.target.subCategory.value;
    const name = e.target.name.value;
    const email = e.target.email.value;
    const category = e.target.category.value;
    const salaryRange = e.target.salaryRange.value;
    const JobPostingDate = e.target.JobPostingDate.value;
    const applicationDeadline = e.target.applicationDeadline.value;
    const jobApplicantsNumber = e.target.jobApplicantsNumber.value;
    const jobDescription = e.target.jobDescription.value;

    const allInputField = {
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
    };
    // console.log(allInputField);
    // console.log("id", _id);
    fetch(`https://assignment-11-server-site-beta.vercel.app/allJobs/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(allInputField),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success",
            text: "Job Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div>
      <h1 className="text-center mt-7 text-2xl font-bold">
        {" "}
        Update Your Job: {subCategory}
      </h1>
      <form onSubmit={handleUpdateJob} className="card-body">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Picture URL</span>
            </label>
            <input
              type="text"
              name="PictureURL"
              placeholder="First Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Title</span>
            </label>
            <select className="select select-bordered" name="subCategory">
              <option disabled selected>
                Pick one Job Title
              </option>
              <option value={"Ui/Ux Designer"}>Ui/Ux Designer</option>
              <option value={"Graphics Designer"}>Graphics Designer</option>
              <option value={"Web Developer"}>Web Developer</option>
              <option value={"Senior Motion Designer"}>
                Senior Motion Designer
              </option>
              <option value={"Digital Marketing"}>Digital Marketing</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">User Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              readOnly
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">User Email</span>
            </label>
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              readOnly
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text"> Job Category</span>
            </label>
            <select className="select select-bordered" name="category">
              <option disabled selected>
                Pick one Job category
              </option>
              <option value={"On-site Job"}>On-site Job</option>
              <option value={"Remote Job"}>Remote Job</option>
              <option value={"Hybrid"}>Hybrid</option>
              <option value={"Part-Time"}>Part-Time</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Salary range</span>
            </label>
            <input
              type="text"
              name="salaryRange"
              placeholder="Salary range"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Posting Date</span>
            </label>
            <input
              type="date"
              name="JobPostingDate"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Application Deadline</span>
            </label>
            <input
              type="date"
              name="applicationDeadline"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Applicants Number</span>
            </label>
            <input
              type="number"
              name="jobApplicantsNumber"
              defaultValue={0}
              readOnly
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="form-control mt-4">
          <label className="label">
            <span className="label-text">Job Description</span>
          </label>
          <textarea
            className="border"
            placeholder="JobDescription"
            name="jobDescription"
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div className="form-control mt-6">
          <input
            className="btn bg-black text-white"
            type="submit"
            value="Update Job"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateJob;
