import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <div className="text-xl mt-10">
          <h3 className="font-bold mb-4">Education Details:</h3>
          <div className="mb-8">
            <p className="font-bold">Bachelor's Degree</p>
            <div className="flex flex-col">
              <p>Bachelor's degree in Electronics and Communication Engineering</p>
              <p>from Visveswarayya Technological University</p>
              <pre>CGPA: 8.27</pre>
            </div>
          </div>
          <div>
            <p className="font-bold">PUC</p>
            <div className="flex flex-col">
              <p>Combination [PCMCs] from STJ College, Davanagere</p>
              <pre>Marks: 83.36%</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
