import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Table = ({ job, handleDelete }) => {
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
  } = job;

  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={picture} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{subCategory}</div>
            <div className="text-sm opacity-50">
              Apply {jobApplicantsNumber}
            </div>
          </div>
        </div>
      </td>
      <td>{email}</td>
      <td>{category}</td>
      <td>{applicationDeadline}</td>
      <td>$ {salaryRange}</td>
      <th>
        <Link to={`/update/${_id}`}>
          {" "}
          <button className="btn bg-green-400 btn-md">
            <FaPen />
          </button>
        </Link>
        <button
          onClick={() => handleDelete(_id)}
          className="btn bg-red-400 btn-md"
        >
          <MdDelete />
        </button>
      </th>
    </tr>
  );
};

export default Table;
