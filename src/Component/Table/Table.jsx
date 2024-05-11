const Table = ({ job }) => {
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
        <button className="btn btn-ghost btn-xs">Update</button>
        <button className="btn btn-ghost btn-xs">delete</button>
      </th>
    </tr>
  );
};

export default Table;
