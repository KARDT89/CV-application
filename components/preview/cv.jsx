import React from 'react';

const Cv = ({generalData}) => {
    return (
        <div className="border-2 text-black bg-white min-w-[700px] min-h-[800px]">
            <h1>{generalData.name}</h1>
            <h1>{generalData.email}</h1>
            <h1>{generalData.phoneNumber}</h1>
            <h1>{generalData.about}</h1>
        </div>
    );
};

export default Cv;