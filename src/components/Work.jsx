import React from "react";
import WorkImg from "../assets/WorkImg.jpg";
import realEstate from "../assets/realEstate.jpg";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">// Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}

          {/* Grid Item */}
          <div className="bg-[#fec7d7] shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto">
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl pt-4 font-bold text-black tracking-wider">
                Xenwingo
              </span>
              <div className="pt-8 text-center">
                <a href="https://www.xenwingo.com/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-black text-white font-bold text-lg">
                    Link
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="bg-[#ef4565] p-4 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto">
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Food Website in AngularJS
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Link
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
