import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import UnderBanner from "../UnderBanner/UnderBanner";
import JobCard from "../JobCard/JobCard";

const Home = () => {
  const allJobs = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <UnderBanner></UnderBanner>
      <h1>All Jobs{allJobs.length}</h1>
      <div className="flex justify-center gap-x-8">
        {allJobs.map((job) => (
          <JobCard key={job._id} job={job}></JobCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
