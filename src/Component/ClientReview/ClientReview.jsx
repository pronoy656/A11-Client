import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../varient";

const ClientReview = () => {
  return (
    <div className="mt-11">
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
      >
        <h1 className="text-center text-3xl font-bold">
          We are work with largest company
        </h1>
        <h1 className="text-center text-3xl font-bold">Around the World</h1>
        <h1 className="text-center text-lg font-medium mt-4">
          Here are some of their words
        </h1>
      </motion.div>
      <motion.div
        variants={fadeIn("right", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto mt-10 mb-16"
      >
        <div className="border w-[370px] h-[370px] p-4">
          <img
            className="w-16 h-16 rounded-full"
            src="https://i.ibb.co/54bs2Zw/newcomer-get-know-teammates-pleased-good-looking-businesswoman-transparent-glasses-blue-collar-shirt.jpg"
            alt=""
          />
          <h1 className="text-lg font-bold">
            {" "}
            <span className="text-purple-500"> Sarah</span> <br /> Marketing
            Manager at Tech Startup:{" "}
          </h1>
          <h1 className="text-justify">
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
        <div className="border w-[370px] h-[370px] p-4">
          <img
            className="w-16 h-16 rounded-full"
            src="https://i.ibb.co/Bg8sG17/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background.jpg"
            alt=""
          />
          <h1 className="text-lg font-bold">
            {" "}
            <span className="text-purple-700"> David,</span> <br /> Software
            Engineer:{" "}
          </h1>
          <h1 className="text-justify">
            "[Job Website Name] is my go-to platform for finding new
            opportunities. The job postings are always up-to-date, and the
            website is easy to navigate. I love that I can set up job alerts for
            specific keywords and receive notifications when relevant positions
            open up.
          </h1>
          <div className="rating mt-7">
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
        <div className="border w-[370px] h-[370px] p-4">
          <img
            className="w-16 h-16 rounded-full"
            src="https://i.ibb.co/yqkt9PK/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-we.jpg"
            alt=""
          />
          <h1 className="text-lg font-bold">
            {" "}
            <span className="text-purple-600">Maria,</span> <br /> CEO of Design
            Agency:
          </h1>
          <h1 className="text-justify">
            "We've been using [Job Website Name] for years to find top talent
            for our design team. The platform allows us to post detailed job
            descriptions and showcase our company culture. We've had great
            success attracting qualified designers through [Job Website Name]'s
            targeted advertising options.
          </h1>
          <div className="rating mt-4">
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
      </motion.div>
    </div>
  );
};

export default ClientReview;
