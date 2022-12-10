import React from "react";
import img1 from "../../../assests/Image/Wedding Photography.png";
import img2 from "../../../assests/Image/Photography Services.png";
import img3 from "../../../assests/Image/learning.png";
import img4 from "../../../assests/Image/Airnoix.png";

const Project = () => {
  return (
    <div className="my-16">
      <h1 className="text-3xl font-bold mb-12">My Projects</h1>
      <section className="grid grid-cols-2 gap-7">
        <div className="grid grid-cols-2 gap-1 shadow-lg rounded-lg py-5 px-9">
          <div className="flex flex-col justify-evenly">
            <div className="w-[50%]">
              <h1 className="text-3xl font-bold">Photography Services</h1>
            </div>
            <div className="w-[50%]">
              <button className="flex">
                View Project
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div>
            <img src={img1} className="rounded-lg shadow-md h-[250px]" alt="" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-1 shadow-lg rounded-lg py-5 px-9">
          <div className="flex flex-col justify-evenly">
            <div className="w-[50%]">
              <h1 className="text-3xl font-bold">Learning Platform</h1>
            </div>
            <div className="w-[50%]">
              <button className="flex">
                View Project
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div>
            <img src={img3} className="rounded-lg shadow-md h-[250px]" alt="" />
          </div>
        </div>
      </section>
      <section className="grid grid-cols-2 gap-7 mt-10">
        <div className="grid grid-cols-2 gap-1 shadow-lg rounded-lg py-5 px-9">
          <div className="flex flex-col justify-evenly">
            <div className="w-[50%]">
              <h1 className="text-3xl font-bold">Quiz Contest</h1>
            </div>
            <div className="w-[50%]">
              <button className="flex">
                View Project
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div>
            <img src={img2} className="rounded-lg shadow-md h-[250px]" alt="" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-1 shadow-lg rounded-lg py-5 px-9">
          <div className="flex flex-col justify-evenly">
            <div className="w-[50%]">
              <h1 className="text-3xl font-bold">Aironex Computers</h1>
            </div>
            <div className="w-[50%]">
              <button className="flex">
                View Project
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div>
            <img src={img4} className="rounded-lg shadow-md h-[250px]" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
