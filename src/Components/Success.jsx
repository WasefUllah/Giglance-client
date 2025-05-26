import React from "react";
import CountUp from "react-countup";

const Success = ({ data }) => {
  return (
    <div className="flex justify-center items-center gap-3 my-5">
      {data.map((datum, index) => (
        <div key={index} className="w-[22%] p-10 bg-gray-100 rounded-2xl">
          <img src={datum.image} alt="" />
          <p className="font-bold text-3xl text-left my-2">
            <CountUp start={0} end={datum.count} duration={5.0}></CountUp>+
          </p>
          <p className="text-left">{datum.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Success;
