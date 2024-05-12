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
      <div className="text-center mb-14 mt-8">
        <h1 className="text-center mt-10 text-3xl font-bold">
          New Jobs For Apply
        </h1>
        <h1 className="mt-2 font-medium">100+ jobs Uploaded Per Day</h1>
      </div>
      <div className="grid grid-cols-3 justify-center gap-x-12 max-w-6xl mx-auto">
        {allJobs.map((job) => (
          <JobCard key={job._id} job={job}></JobCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
