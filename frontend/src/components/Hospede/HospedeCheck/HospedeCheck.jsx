import React from "react";

const HospedeCheck = ({ checkIn, checkOut }) => {
  return (
    <div>
      <div>
        <Text color="light-gray">Check-In</Text>
        <Text color="light-gray">{checkIn}</Text>
      </div>
      <div>
        <Text color="light-gray">Check-Out</Text>
        <Text color="light-gray">{checkOut}</Text>
      </div>
    </div>
  );
};

export default HospedeCheck;
