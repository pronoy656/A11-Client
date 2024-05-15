import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import AppliedCard from "../AppliedCard/AppliedCard";

const AppliedJobs = () => {
  const { user } = useContext(AuthContext);
  const [appJobs, setAppJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]); //888888

  // 8888888
  const handleJobFilter = (filter) => {
    if (filter === "all") {
      setDisplayJobs(appJobs);
    } else if (filter === "On site job") {
      const onsiteJobs = appJobs.filter(
        (job) => job.category === "On-site job"
      );
      setDisplayJobs(onsiteJobs);
    } else if (filter === "Remote job") {
      const remoteJob = appJobs.filter((job) => job.category === "Remote Job");
      setDisplayJobs(remoteJob);
    } else if (filter === "Hybrid") {
      const hybridJob = appJobs.filter((job) => job.category === "Hybrid");
      setDisplayJobs(hybridJob);
    } else if (filter === "Part time") {
      const partTimeJob = appJobs.filter((job) => job.category === "Part-Time");
      setDisplayJobs(partTimeJob);
    }
  };
  //8888888888

  const url = `https://assignment-11-server-site-beta.vercel.app/applyJob?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setAppJobs(data);
        setDisplayJobs(data); //88888
      });
  }, []);
  return (
    <div>
      <h1 className="text-center text-3xl font-semibold mt-8">
        My applied Jobs
      </h1>
      <div className="flex justify-center mt-8">
        <details className="dropdown">
          <summary className="m-1 btn">Filter by</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li onClick={() => handleJobFilter("all")}>
              <a>All</a>
            </li>
            <li onClick={() => handleJobFilter("On site job")}>
              <a>On site Job</a>
            </li>
            <li onClick={() => handleJobFilter("Remote job")}>
              <a>Remote Job</a>
            </li>
            <li onClick={() => handleJobFilter("Hybrid")}>
              <a>Hybrid</a>
            </li>
            <li onClick={() => handleJobFilter("Part time")}>
              <a>Part time</a>
            </li>
          </ul>
        </details>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3">
        {displayJobs.map((card) => (
          <AppliedCard key={card._id} card={card}></AppliedCard>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
