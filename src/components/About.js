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
        <p className="text-xl mt-10">
         <h3 className="font-bold">Education Details:</h3>
         <pre>
         Qualification: Bachelor's degree in Electronics and Communication Engineering
         from Visveswarayya technological university  (CGPA-8.27)
        </pre>
        <br/>
        <pre>
         PUC: combination [PCMCs] from STJ college davanagere
         Marks:83.36
         </pre>
  
        </p>

        <br />
      </div>
    </div>
  );
};

export default About;
