import React from "react";

const Skills = () => {
  return (
    <div className="mt-12 mb-20" id="skills">
      <h1 className="text-3xl font-bold mb-12">Professional Skills</h1>
      <section className="flex ">
        <div className="w-[50%]">
          <h1 className="mb-3">HTML-5</h1>
          <progress
            className="progress w-[85%]  block  mb-2 h-4"
            value="85"
            max="100"
          ></progress>
          <h1 className="mb-3">CSS3</h1>
          <progress
            className="progress w-[85%]   block mb-2 h-4"
            value="80"
            max="100"
          ></progress>
          <h1 className="mb-3">Tailwind</h1>
          <progress
            className="progress w-[85%]  block mb-2 h-4"
            value="85"
            max="100"
          ></progress>
          <h1 className="mb-3">JavaScript(ES6)</h1>
          <progress
            className="progress w-[85%]  block  mb-2 h-4"
            value="70"
            max="100"
          ></progress>
        </div>
        <div className="w-[50%]">
          <h1 className="mb-3">React.js</h1>
          <progress
            className="progress w-[85%]  block mb-2 h-4"
            value="70"
            max="100"
          ></progress>
          <h1 className="mb-3">Bootstrap</h1>
          <progress
            className="progress w-[85%]  block  mb-2 h-4"
            value="60"
            max="100"
          ></progress>
          <h1 className="mb-3">MongoDB</h1>
          <progress
            className="progress w-[85%]  block  mb-2 h-4"
            value="60"
            max="100"
          ></progress>
          <h1 className="mb-3">C</h1>
          <progress
            className="progress w-[85%]  block mb-2 h-4"
            value="70"
            max="100"
          ></progress>
        </div>
      </section>
    </div>
  );
};

export default Skills;
