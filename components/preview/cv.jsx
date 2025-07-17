import Link from 'next/link';
import React from 'react';

const Cv = ({ general, education, experience, projects }) => {
  return (
    <div className="border-2 text-[8px] md:text-xs text-black bg-white w-[400px] h-[550px] md:w-[500px] md:h-[650px] lg:w-[600px] lg:h-[850px] p-4 font-[times-new-roman]">
      <div className="flex justify-between items-start font-bold border-b pb-1 md:pb-2">
        {/* Top Section */}
        <h1 className="text-sm md:text-xl justify-start">{general.name}</h1>
        <div className="flex flex-col md:gap-1 text-[8px] md:text-xs">
          <span className="flex gap-1 justify-end ">
            <p>Email: </p>
            <p>{general.email}</p>
          </span>
          <div className="flex gap-2 justify-end">
            <span className="flex gap-1">
              <p>Mobile:</p>
              <p>{general.phoneNumber}</p>
            </span>
            <Link href={'#'}>| Linkedin</Link>
            <Link href={'#'}>| Github</Link>
          </div>
        </div>
      </div>
      {/* About */}
      {general.about && (
        <div className="text-[8px] md:text-xs py-1 md:py-2 italic border-b">
          {general.about}
        </div>
      )}
      {/* Education */}
      <div className="border-b pb-1 md:pb-2">
        <h2 className="font-bold py-1 md:py-3 uppercase text-[10px] md:text-[16px] text-center">
          Education
        </h2>
        <div className="flex flex-col gap-0.5">
          {education &&
            education.map((edu) => (
              <div key={edu.id}>
                <div className="flex justify-between">
                  <p className="font-bold">{edu.school}</p>
                  <span className="font-semibold">{edu.to}</span>
                </div>
                <div>
                  <p>{edu.title}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Cv;
