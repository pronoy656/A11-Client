import React from "react";

const ClientReview = () => {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold">
        We are work with largest company
      </h1>
      <h1 className="text-center text-3xl font-bold">Around the World</h1>
      <h1 className="text-center text-lg font-medium mt-4">
        Here are some of their words
      </h1>
      <div className="grid grid-cols-3 max-w-7xl mx-auto mt-10 mb-16">
        <div className="border w-[370px] h-[300px] p-4">
          <h1>
            {" "}
            Sarah, <br /> Marketing Manager at Tech Startup:{" "}
          </h1>
          <h1>
            "I love [Job Website Name]! It's been a game-changer for our
            company's hiring process. The search filters are incredibly
            detailed, allowing us to target the exact skill sets we need. Plus,
            the candidate pool is full of qualified professionals. We've made
            some fantastic hires thanks to [Job Website Name]."
          </h1>
          <div className="rating">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
        </div>
        <div className="border w-[370px] h-[300px] p-4">
          <h1>
            {" "}
            David, <br /> Software Engineer:{" "}
          </h1>
          <h1>
            "[Job Website Name] is my go-to platform for finding new
            opportunities. The job postings are always up-to-date, and the
            website is easy to navigate. I love that I can set up job alerts for
            specific keywords and receive notifications when relevant positions
            open up. I've landed my last two jobs through [Job Website Name],
            and I highly recommend it to any job seeker."
          </h1>
          <div className="rating">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
          </div>
        </div>
        <div className="border w-[370px] h-[300px] p-4">
          <h1>
            {" "}
            Maria, <br /> CEO of Design Agency:
          </h1>
          <h1>
            "We've been using [Job Website Name] for years to find top talent
            for our design team. The platform allows us to post detailed job
            descriptions and showcase our company culture. We've had great
            success attracting qualified designers through [Job Website Name]'s
            targeted advertising options. It's a valuable tool for any employer
            looking to build a strong team."
          </h1>
          <div className="rating">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientReview;
