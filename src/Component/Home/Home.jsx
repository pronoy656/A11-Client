import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import UnderBanner from "../UnderBanner/UnderBanner";
import JobCard from "../JobCard/JobCard";
import ClientCard from "../ClientCard/ClientCard";
import Extra from "../Extra/Extra";
import ClientReview from "../ClientReview/ClientReview";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Home = () => {
  const allJobs = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <UnderBanner></UnderBanner>
      <Extra></Extra>
      <div className="text-center mb-14 mt-8">
        <h1 className="text-center mt-10 text-3xl font-bold">
          New Jobs For Apply
        </h1>
        <h1 className="mt-2 font-medium">100+ jobs Uploaded Per Day</h1>
      </div>
      {/*  */}
      <Tabs>
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center">
            <TabList>
              <Tab>All Jobs</Tab>
              <Tab>On Site</Tab>
              <Tab>Remote</Tab>
              <Tab>Part-Time</Tab>
              <Tab>Hybrid</Tab>
            </TabList>
          </div>

          <TabPanel></TabPanel>
          <TabPanel>
            <h2>Any content 1</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 3</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 4</h2>
          </TabPanel>
        </div>
      </Tabs>
      {/*  */}
      <div className="grid grid-cols-3 justify-center gap-x-12 max-w-6xl mx-auto">
        {allJobs.map((job) => (
          <JobCard key={job._id} job={job}></JobCard>
        ))}
      </div>
      <ClientCard></ClientCard>
      <ClientReview></ClientReview>
    </div>
  );
};

export default Home;
