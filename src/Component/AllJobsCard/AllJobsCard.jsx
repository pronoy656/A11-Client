const AllJobsCard = ({ apply }) => {
  const { photo, title, name, email, date, category, resume, salary } = apply;
  return (
    <div className="mb-11">
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td className="w-1/6">
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={photo} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{title}</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td className="w-1/6">
          {email}
          <br />
          <span className="badge badge-ghost badge-sm">{name}</span>
        </td>
        <td className="w-1/6">{category}</td>
        <td className="w-1/6">{salary}</td>
        <td className="w-1/6">{date}</td>
        <th className="w-1/6">
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    </div>
  );
};

export default AllJobsCard;
