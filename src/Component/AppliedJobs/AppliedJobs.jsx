import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import AppliedCard from "../AppliedCard/AppliedCard";

const AppliedJobs = () => {
  const { user } = useContext(AuthContext);
  const [appJobs, setAppJobs] = useState([]);
  const url = `http://localhost:5000/applyJob?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAppJobs(data));
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      {appJobs.map((card) => (
        <AppliedCard key={card._id} card={card}></AppliedCard>
      ))}
    </div>
  );
};

export default AppliedJobs;
