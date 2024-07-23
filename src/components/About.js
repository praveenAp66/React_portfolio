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
         <p>
         Qualification: Bachelor's degree in Electronics and Communication
         from Visveswarayya technological university  (CGPA-8.27)

         PUC: combination PCMCs from STJ college davanagere
         Marks:83.36
         </p>
        
         
        </p>

        <br />

        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          qui fugit numquam! Cum vitae temporibus molestiae dicta illum
          laboriosam similique at mollitia nihil iusto repellat numquam eos illo
          perspiciatis a unde minima commodi id cupiditate laborum iste
    
        </p>
      </div>
    </div>
  );
};

export default About;
