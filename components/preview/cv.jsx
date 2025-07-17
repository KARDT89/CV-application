import Link from 'next/link';
import React from 'react';
import { FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa";

const Cv = ({ general, education, experience, projects }) => {
  function calculateDate(date) {
    const today = new Date();
    const year = today.toJSON().split('-');
    const given = date.toJSON().split('-');
    if (given[0] > year[0]) return false;
    if (given[0] >= year[0] && given[1] > year[1]) return false;
    return true;
  }
  return (
    <div
      id="resume"
      className="border-2 border-black text-[8px] md:text-xs text-black bg-white w-[350px] h-[550px] md:w-[550px] md:h-[800px] p-4 font-[times-new-roman]"
    >
      {general.name && (
        <div className="flex justify-between items-start font-bold border-b pb-1 md:pb-2">
          {/* Top Section */}
          <h1 className="text-sm md:text-xl justify-start">{general.name}</h1>
          <div className="flex flex-col md:gap-1 text-[8px] md:text-xs">
            {general.email && (
              <span className="flex gap-1 justify-end ">
                <p>Email: </p>
                <p>{general.email}</p>
              </span>
            )}
            {general.phoneNumber && (
              <div className="flex gap-1 justify-end">
                <span className="flex gap-1">
                  <p>Mobile:</p>
                  <p>{general.phoneNumber}</p>
                  
                </span>
                <div className='flex items-center gap-1'>
                  <span>|</span>
                  {general.linkedin && (
                    
                  <Link href={`${general.linkedin}`} target="_blank">
                    
                    <FaLinkedin/>
                  </Link>
                )}
                {general.x && (
                  <Link href={`${general.x}`} target="_blank">
                    <FaXTwitter/>
                  </Link>
                )}
                {general.github && (
                  <Link href={`${general.github}`} target="_blank">
                    <FaGithub/>
                  </Link>
                )}
                </div>
                
              </div>
            )}
          </div>
        </div>
      )}

      {/* About */}
      {general.about && (
        <div className="text-[8px] md:text-xs py-1 md:py-2 italic border-b">
          {general.about}
        </div>
      )}
      {/* Education */}
      {education.length > 0 && (
        <div className="border-b pb-1 md:pb-2">
          <h2 className="font-bold py-1 md:py-3 uppercase text-[10px] md:text-[14px] lg:text-[16px] text-center">
            Education
          </h2>

          {education.map(({ id, title, school, to, from }) => (
            <div key={id} className="md:space-y-0.5">
              <div className="flex justify-between">
                <p className="font-bold">{school}</p>
                <span className="font-semibold">
                  {to &&
                    (calculateDate(to) ? (
                      <p>{to.getUTCFullYear()}</p>
                    ) : (
                      <p>Ongoing</p>
                    ))}
                </span>
              </div>
              <div>
                <p>{title}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <div className="border-b pb-1 md:pb-2">
          <h2 className="font-bold py-1 md:py-3 uppercase text-[10px] md:text-[14px] lg:text-[16px] text-center">
            Projects
          </h2>
          {projects.map(({ id, name, github, live, description, date }) => (
            <div key={id} className="md:space-y-0.5 pb-1 md:pb-2">
              <div className="flex justify-between font-bold">
                <div className="flex gap-1">
                  <p>{name}</p>
                  {live && (
                    <Link href={live} target="_blank" className='flex justify-center items-center gap-1'>
                      |<FaAngleRight/> Live{' '}
                    </Link>
                  )}
                  {github && (
                    <Link href={github} target="_blank" className='flex items-center justify-center gap-1'>
                      | <FaGithub/>Github
                    </Link>
                  )}
                </div>
                <div>
                  {date &&
                    (calculateDate(date) ? (
                      <p>{date.getUTCFullYear()}</p>
                    ) : (
                      <p>Ongoing</p>
                    ))}
                </div>
              </div>
              <div>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* Experience */}
      {experience.length > 0 && (
        <div className="border-b pb-1 md:pb-2">
          <h2 className="font-bold py-1 md:py-3 uppercase text-[10px] md:text-[14px] lg:text-[16px] text-center">
            Experience
          </h2>
          {experience.map(({ id, name, position, description, from, to }) => (
            <div key={id} className="md:space-y-0.5 pb-1 md:pb-2">
              <div className="flex justify-between font-bold">
                <div className="flex gap-1">
                  <p>{name}</p>
                  {position && <p>| {position}</p>}
                </div>
                <div className="flex gap-1">
                  {from && <p>{from.getUTCFullYear()} -</p>}
                  {to &&
                    (calculateDate(to) ? (
                      <p>{to.getUTCFullYear()}</p>
                    ) : (
                      <p>Present</p>
                    ))}
                </div>
              </div>
              <div>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cv;
