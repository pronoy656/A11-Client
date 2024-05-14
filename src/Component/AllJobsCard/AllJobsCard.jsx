const AllJobsCard = ({ apply }) => {
  const { photo, title, name, email, date, category, resume } = apply;
  return (
    <div>
      <h1>All jobs card</h1>
      <div>
        <img src={photo} alt="" />
        <h1>Title: {title}</h1>
        <h1>Name: {name}</h1>
        <h1>Email: {email}</h1>
        <h1>Deadline: {date}</h1>
        <h1>Category: {category}</h1>
        <h1>Resume link: {resume}</h1>
      </div>
    </div>
  );
};

export default AllJobsCard;
