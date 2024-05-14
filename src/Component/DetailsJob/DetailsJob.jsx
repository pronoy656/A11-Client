import { useLoaderData } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { FaFilePen } from "react-icons/fa6";
import { BsClockFill } from "react-icons/bs";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const DetailsJob = () => {
  const { user } = useContext(AuthContext);
  const jobDetails = useLoaderData();
  const {
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
  } = jobDetails;

  // const handleApply = () =>{

  // }

  // apply job
  const handleApply = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const resume = e.target.resume.value;
    const title = e.target.title.value;
    const photo = e.target.photo.value;
    const date = e.target.date.value;
    const category = e.target.category.value;

    const inputField = { name, email, resume, title, photo, date, category };
    console.log(inputField);

    // fetch
    fetch("http://localhost:5000/applyJobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(inputField),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("apply Successfully");
        }
      });
  };

  return (
    <div className="max-w-6xl mx-auto mb-16">
      <img className="h-[350px] w-full rounded-2xl" src={picture} alt="" />
      <h1 className="mt-11 text-3xl font-extrabold">Title: {subCategory}</h1>
      <h1 className="text-base font-medium mt-4">email: {email}</h1>
      <div className="border border-b-1 mt-8 mb-10"></div>
      <div className="flex space-x-3">
        <div className="w-2/3 border p-2">
          <p className="text-xl font-bold mb-4">About This Job</p>
          <h1>{jobDescription}</h1>
        </div>
        <div className="w-1/3 border p-2">
          <div className="flex gap-x-2 items-center">
            <div>
              <FaLocationDot />
            </div>
            <div>
              <h1 className="text-base font-bold">Bangladesh</h1>
            </div>
          </div>
          <h1 className="mt-5 text-xl font-bold">$ {salaryRange}</h1>
          <p className="text-base font-semibold"> Avg.salary</p>
          <h1 className="mt-9 text-lg font-semibold mb-4">Details</h1>
          <div className="flex items-center gap-x-2">
            <FaFilePen />
            <h1 className="text-base font-bold">{subCategory}</h1>
          </div>

          <div className="flex items-center gap-x-2 mt-5">
            <BsClockFill />
            <h1 className=" text-base font-bold">{category}</h1>
          </div>
          <div>
            <h1 className="mt-5 text-base font-bold">
              Deadline: {applicationDeadline}
            </h1>
          </div>
          <div>
            <h1 className="mt-5 text-base font-bold">
              Apply: {jobApplicantsNumber}
            </h1>
          </div>
          <div>
            {/* <button className="btn bg-green-600 text-white w-full rounded-2xl mt-5">
              Apply Job
            </button> */}
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button
              disabled={email === user?.email}
              className="btn disabled:cursor-not-allowed bg-green-600 text-white w-full mt-5"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              Apply Job
            </button>
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg text-center mb-3">
                  Apply Job
                </h3>
                <h3 className="font-bold text-lg  mb-3">{subCategory}</h3>
                <form onSubmit={handleApply}>
                  <div className="grid grid-cols-2 gap-x-2">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Job Name</span>
                      </label>
                      <input
                        type="text"
                        name="title"
                        defaultValue={subCategory}
                        readOnly
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Name</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        readOnly
                        defaultValue={user?.displayName}
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">email</span>
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
                        <span className="label-text">Photo Url</span>
                      </label>
                      <input
                        type="photo"
                        name="photo"
                        defaultValue={picture}
                        readOnly
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
                        name="date"
                        defaultValue={applicationDeadline}
                        readOnly
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Category</span>
                      </label>
                      <input
                        type="text"
                        name="category"
                        defaultValue={category}
                        readOnly
                        className="input input-bordered"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-control mt-3">
                    <label className="label">
                      <span className="label-text">resume Link</span>
                    </label>
                    <input
                      type="resume"
                      name="resume"
                      placeholder="Your resume link"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <button className="btn bg-green-600 text-white mt-5 w-full">
                    Submit
                  </button>
                </form>

                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn bg-black text-white">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsJob;
