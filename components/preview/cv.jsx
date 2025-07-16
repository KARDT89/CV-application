import React from 'react';

const Cv = ({ general, education, experience, projects }) => {
  return (
    <div className="border-2 text-black bg-white min-w-[700px] min-h-[800px]">
      <h1>{general.name}</h1>
      <h1>{general.email}</h1>
      <h1>{general.phoneNumber}</h1>
      <h1>{general.about}</h1>
      {education.map((x) => (
        <div key={x.id}>
          {x.school}
          {x.title}
          {x.from}
          {x.to}
        </div>
      ))}
    </div>
  );
};

export default Cv;
