import React from "react";
import MY_pic from "../assets/my-pic.jpeg";
import Typical from "react-typical";
import { HiArrowNarrowRight } from "react-icons/hi";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div className="bg-[#a786df] pt-10 block sm:flex">
      <div className="max-w-[600px] mx-auto px-8 pt-20 justify-center h-full">
        <p className="text-2xl pt-7">Hi, my name is</p>
        <h1 className="text-4xl sm:text-6xl text-pink-800  font-bold ">
          <Typewriter
            options={{
              strings: ["Narayana Prudhvi"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <div className="pb-6">
          <h3 className="pt-10 pr-20 text-[#521d42]">
            I'm a Knack of building applications with <br /> Front-end
            operations.
          </h3>
        </div>

        <p className="max-w-[700px]">
          I’m a frontend developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive web applications.
        </p>
        <div>
          <button className="group border-2 px-6 py-3 my-7 flex items-center hover:bg-pink-600 hover:border-pink-600">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
      <div className=" lg:mr-20">
        <img
          className="rounded-full h-[400px]"
          src={MY_pic}
          alt="home-pic"
          style={{ width: "300px" }}
        />
        <h2 className="py-9 text-4xl sm:text-4xl font-bold text-[#171b28]">
          <p className="text-xl">I'm a</p>
          <div className="text-[#68251f]">
            {" "}
            <Typewriter
              options={{
                strings: [
                  "FrontEnd Dev",
                  "HTML, CSS Dev",
                  "Javascript Dev",
                  "React JS Dev",
                  "Wordpress Dev",
                  "Angular JS Dev",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </h2>
      </div>
    </div>
  );
};

export default Home;
