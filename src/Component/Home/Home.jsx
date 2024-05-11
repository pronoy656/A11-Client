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

      <div className="grid grid-cols-3 justify-center gap-x-12 max-w-6xl mx-auto">
        {allJobs.map((job) => (
          <JobCard key={job._id} job={job}></JobCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
