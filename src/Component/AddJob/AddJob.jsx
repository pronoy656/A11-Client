const AddJob = () => {
  return (
    <div>
      <h1 className="text-center text-pink-700 text-3xl font-bold mt-4">
        Add Your Job
      </h1>
      <form className="card-body">
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
              placeholder="Your name"
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
              type="number"
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
              name="Job Posting Date"
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
              name="Application Deadline"
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
              placeholder="Job Applicants Number"
              className="input input-bordered"
              required
            />
          </div>

          {/* <textarea
            className="textarea textarea-info w-full"
            placeholder="Bio"
          ></textarea> */}
        </div>
        <div className="form-control mt-4">
          <label className="label">
            <span className="label-text">Job Description</span>
          </label>
          <textarea
            className="border"
            placeholder="Job Description"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div className="form-control mt-6">
          <input
            className="btn bg-black text-white"
            type="submit"
            value="order confirm"
          />
        </div>
      </form>
    </div>
  );
};

export default AddJob;
