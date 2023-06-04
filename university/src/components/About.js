

import React from "react";
import Banner from "../images/about.png";

function About() {
    return (
        <section id="About" className=" w-full pt-24 ">
            <div className=" flex  justify-between items-center max-md:flex-col max-md:px-5 w-full h-auto">
                
                {/* Text Section */}
                <div data-aos="zoom-in" className="w-full md:w-[50%] lg:w-[50%] xl:w-[50%] h-full p-4 md:p-9 lg:p-9 xl:p-9 flex flex-col justify-center items-center">
                    <h1 className="text-[#00a6a6] font-bold max-md:text-2xl md:text-[30px] lg:text-4xl uppercase pb-[20px] mb-4">About The University Of Computer Studies Maubin</h1>
                    <p className="text-base lg:text-lg text-justify ">&nbsp;&nbsp;&nbsp;&nbsp;University of Computer Studies (Maubin), located in Maubin Township, about 100 km
                                (62 miles) from West of Yangon, is one of three computer universities in Ayeyarwady Region. The
                                university offers both computer science and computer technology to its undergraduate students.
                                The university's campus has the area of 53.872 acres.
                                Government Computer College (Maubin) started up on first January 2003. It was upgraded as
                                Computer University (Maubin) on 20 January 2007. In 2015, it was renamed as University of
                                Computer Studies (Maubin).</p>
                </div>
                {/* Logo Section */}
                <div data-aos="zoom-in" className="w-full md:w-[50%] lg:w-[50%] xl:w-[50%] h-full flex justify-center items-center object-cover mt-4 md:mt-0 lg:mt-0 xl:mt-0">
                    <img className="w-auto h-auto 2xl:w-[50%] 2xl:h-[50%]" src={Banner} />
                </div>
                
            </div>
            <div className="w-full font-robo  max-md:px-5 py-20 px-10  bg-[#00a6a6] bg-opacity-5 mt-[70px] flex justify-between items-center flex-col gap-y-8     lg:flex-row">
            
                    {/* Vision Statement */}
                    <div  data-aos="zoom-in" className=" max-md:w-full max-md:h-auto  w-[50%] h-[350px] max-lg:px-5 max-lg:py-12  lg:px-8 lg:py-10 xl:px-10 xl:py-16 bg-[#00a6a6] bg-opacity-10 mx-2 shadow-lg rounded-lg  text-justify md:w-[80%]">
                        
                        <h1 className="w-full text-center max-md:text-2xl text-3xl mb-5 font-bold text-[#00a6a6] font-robo">VISION STATEMENT</h1>
                        <p className="w-full  text-base font-medium text-opacity-75 font-robo">
                        &nbsp; The university offers two undergraduate programs, the Bachelor of Computer Science (B.C.Sc) and the Bachelor of Computer Technology (B.C.Tech), that are designed to equip students with the essential computer skills and knowledge necessary to become competent computer professionals. </p>
                        </div>
                        
                        {/* Mission Statement */}
                        <div  data-aos="zoom-in" className="max-md:w-full max-md:h-auto w-[50%] h-[350px] max-lg:px-5 max-lg:py-12 lg:px-8 lg:py-10 xl:px-10 xl:py-16 mx-2 bg-[#00a6a6] bg-opacity-10 shadow-lg rounded-lg text-justify  md:w-[80%] ">
                        <h1 className="w-full   text-center max-md:text-2xl text-3xl mb-5 font-bold text-[#00a6a6]">MISSION STATEMENT</h1>
                        <p className="w-full  text-base font-medium">
                        &nbsp; The University of Computer Studies (Maubin) is committed to sharing knowledge about computer  science and computer technology, educating students to be successful, ethical, and effective  problem-solvers and lifelong learners, creating a learning environment that fosters critical thinking and creativity, and enabling graduates to be well-prepared for professional careers with a strong emphasis on autonomy and innovation in the Computer Science and Technological industry.</p>
                        </div>
                        
                        </div>
        </section>
);
}

export default About;

// max-sm:w-full max-sm:h-auto  sm:w-[550px] md:w-auto lg:w-[650px] xl:w-[700px]  sm:h-[350px] md:h-[400px] lg:h-[650px] xl:h-[500px]

   