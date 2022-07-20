import React from "react";
import HTML from "../assets/HTML5.png";
import CSS from "../assets/css3.png";
import JavaScript from "../assets/JS.png";
import ReactImg from "../assets/react.svg";
import FireBase from "../assets/firebase.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Bootstrap from "../assets/bootstrap.png";
import Angular from "../assets/angular.png";

const Skills = () => {
  return (
    <div className="w-full h-[170vh] pt-26 bg-[#8e6f78] text-white">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-black ">
            Skills
          </p>
          <p className="py-4"> These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-16 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 pt-7 py-4 mx-auto"
              src={HTML}
              alt="HTML icon"
            />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md pt-7 py-4 shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="CSS icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md py-4 shadow-[#060606] hover:scale-110 duration-500">
            <img
              className="w-20 pt-7 mx-auto"
              src={Bootstrap}
              alt="BOOTSTRAP icon"
            />
            <p className="my-4">BOOTSTRAP</p>
          </div>
          <div className="shadow-md pt-7 py-4 shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JavaScript} alt="JS icon" />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md pt-7 py-4 shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="REACT icon" />
            <p className="my-4">REACT</p>
          </div>
          <div className="shadow-md pt-7 py-4 shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={GitHub} alt="GITHUB icon" />
            <p className="my-4">GITHUB</p>
          </div>
          <div className="shadow-md pt-7 py-4 shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Tailwind} alt="TAILWIND icon" />
            <p className="my-4">TAILWIND CSS</p>
          </div>
          <div className="shadow-md pt-7 py-4 shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={FireBase} alt="FIREBASE icon" />
            <p className="my-4">FIREBASE</p>
          </div>
          <div className="shadow-md pt-7 py-4 shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Angular} alt="ANGULAR icon" />
            <p className="my-4">ANGULAR</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
