import Marquee from "react-fast-marquee";

const ClientCard = () => {
  return (
    <div>
      <h1 className="text-center mt-10 mb-9 text-3xl font-bold">
        Meet Our Honorable <br /> Clients
      </h1>
      <Marquee pauseOnHover={true} autoFill>
        <div className="mb-16  flex  space-x-7">
          <div className="relative">
            <img
              className="w-[300px] h-[300px] rounded-3xl border "
              src="https://i.ibb.co/gJtjBrB/portrait-successful-man-having-stubble-posing-with-broad-smile-keeping-arms-folded.jpg"
              alt=""
            />
            <div className="absolute bottom-4 left-3">
              <h1 className="text-lg font-bold">Victa Wiilie</h1>
              <h1>Digital Designer</h1>
              <div className="mt-2">
                <button className="btn btn-outline btn-sm font-semibold">
                  Developer
                </button>
                <button className="btn btn-outline btn-sm ml-4 font-semibold">
                  Manager
                </button>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              className="w-[300px] h-[300px] rounded-3xl border "
              src="https://i.ibb.co/Bsmq0M6/young-woman-with-round-glasses-yellow-sweater.jpg"
              alt=""
            />
            <div className="absolute bottom-4 left-3 text-white">
              <h1 className="text-lg font-bold">Andrea Jelic</h1>
              <h1>Brand Designer</h1>
              <div className="mt-2">
                <button className="btn btn-outline btn-sm text-base font-semibold text-white">
                  Developer
                </button>
                <button className="btn btn-outline btn-sm ml-3 text-base font-semibold text-white">
                  ui
                </button>
                <button className="btn btn-outline btn-sm ml-3 text-base font-semibold text-white">
                  Leadership
                </button>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              className="w-[300px] h-[300px] rounded-3xl border "
              src="https://i.ibb.co/Nrk4bmw/happy-senior-businessman-talking-smartphoneobile-phone.jpg"
              alt=""
            />
            <div className="absolute bottom-4 left-3 text-white">
              <h1 className="text-lg font-bold">Dan Mall</h1>
              <h1>Design Educator</h1>
              <div className="mt-2">
                <button className="btn btn-outline btn-sm font-semibold text-white">
                  Mobile
                </button>
                <button className="btn btn-outline btn-sm ml-3 font-semibold text-white">
                  Product
                </button>
                <button className="btn btn-outline btn-sm ml-3 font-semibold text-white">
                  Design
                </button>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              className="w-[300px] h-[300px] rounded-3xl border "
              src="https://i.ibb.co/ynM80SL/bohemian-man-with-his-arms-crossed.jpg"
              alt=""
            />
            <div className="absolute bottom-4 left-3">
              <h1 className="text-lg font-bold">Victa Wiilie</h1>
              <h1>Motion Designer</h1>
              <div className="mt-2">
                <button className="btn btn-outline btn-sm font-semibold">
                  Animation
                </button>
                <button className="btn btn-outline btn-sm ml-4 font-semibold">
                  Visual
                </button>
                <button className="btn btn-outline btn-sm ml-4 font-semibold">
                  Ui
                </button>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              className="w-[300px] h-[300px] rounded-3xl border "
              src="https://i.ibb.co/F4YycdF/happy-middle-aged-african-male-business-worker-has-pleasant-talk-with-friend-via-smart-phone-shares.jpg"
              alt=""
            />
            <div className="absolute bottom-4 left-3 text-white">
              <h1 className="text-lg font-bold">Daniele Bufe</h1>
              <h1>Graphic Designer</h1>
              <div className="mt-2">
                <button className="btn btn-outline btn-sm text-base font-semibold text-white">
                  Graphic Design
                </button>
                <button className="btn btn-outline btn-sm ml-4 text-base font-semibold text-white">
                  Illustration
                </button>
              </div>
            </div>
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default ClientCard;
