import React, { Suspense, useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import TaskCard from "./TaskCard";
import Success from "./Success";
import Faq from "./Faq";

const Home = () => {
  const [data, setData] = useState([]);
  const [faq, setFaq] = useState([]);
  const tasks = useLoaderData();
  useEffect(() => {
    fetch("success.json")
      .then((res) => res.json())
      .then((data) => setData(data));

    fetch("faq.json")
      .then((res) => res.json())
      .then((data) => setFaq(data));
  }, []);

  return (
    <div className="">
      <div className="carousel w-full h-[450px]">
        <div id="slide1" className="carousel-item relative w-full">
          <div className="w-full flex justify-center items-center">
            <div className="bg-blue-600 text-white rounded-2xl p-10 w-11/12 md:w-3/4 shadow-lg text-center">
              <h2 className="text-3xl font-bold mb-4">Web Development</h2>
              <p className="text-lg">
                Create powerful, modern, and responsive websites or web
                applications to bring your ideas to life.
              </p>
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        {/* Slide 2 - Marketing */}
        <div id="slide2" className="carousel-item relative w-full">
          <div className="w-full flex justify-center items-center">
            <div className="bg-green-600 text-white rounded-2xl p-10 w-11/12 md:w-3/4 shadow-lg text-center">
              <h2 className="text-3xl font-bold mb-4">Marketing</h2>
              <p className="text-lg">
                Boost your brand and reach your audience through strategic
                digital marketing and social media campaigns.
              </p>
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        {/* Slide 3 - Content Writing */}
        <div id="slide3" className="carousel-item relative w-full">
          <div className="w-full flex justify-center items-center">
            <div className="bg-yellow-500 text-white rounded-2xl p-10 w-11/12 md:w-3/4 shadow-lg text-center">
              <h2 className="text-3xl font-bold mb-4">Content Writing</h2>
              <p className="text-lg">
                Deliver professional and compelling written content for blogs,
                websites, and marketing materials.
              </p>
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        {/* Slide 4 - Design */}
        <div id="slide4" className="carousel-item relative w-full">
          <div className="w-full flex justify-center items-center">
            <div className="bg-pink-600 text-white rounded-2xl p-10 w-11/12 md:w-3/4 shadow-lg text-center">
              <h2 className="text-3xl font-bold mb-4">Graphic Design</h2>
              <p className="text-lg">
                Create stunning visual content, logos, and designs that help
                brands stand out with confidence.
              </p>
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>

        <h1 className="font-bold text-2xl py-2 text-primary dark:text-secondary">Deadline Calls</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-2 lg:gap-4">
        {tasks?.map((task) => (
          <TaskCard key={task._id} task={task}></TaskCard>
        ))}
      </div>

      

      
       <div>
        <h1 className="font-bold text-2xl pt-3 text-primary dark:text-secondary">Our Services</h1>
         <Success data={data}></Success>
       </div>
     

      <div className="my-5">
        <h1 className="font-bold text-2xl pt-3 text-primary dark:text-secondary">FAQs</h1>
        <Faq faq={faq}></Faq>
      </div>
    </div>
  );
};

export default Home;
