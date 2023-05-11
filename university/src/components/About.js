// import React from "react";
// import Banner from "../images/banner.jpg"
 

// function About() {
//     return(
//         <section id="About" className="mt-[50px]">
//             <div className="container w-full h-[500px] 
//             flex justify-between items-center mx-auto ">
//                 {/* Text Section */}
//                 <div className="w-[50%] h-full p-9  flex flex-col justify-center items-ceter">
//                 <h1 className="font-bold text-[40px] pb-[20px] ">About University Of Computer Studies Maubin</h1>
//                 <p>University of Computer Studies Maubin (UCSMUB) is one of the computer universities in Myanmar. It is located  Maubin Township, Ayeyarwady Division, Myanmar. UCSMUB is reputed as the Union University as many students from different places of the country come to attend. After the coup de ’tat, along with the establishment of federalism, we are in a transitional period to be an autonomous university.</p>
//                 </div>
//                 {/* Logo Section */}
//                 <div className="w-[50%] h-full flex justify-center items-center object-cover "> 
//                  <img className="w-[400px] h-[400px] " src={Banner}  />
//                  </div>
//             </div>
//             <div className="w-full h-[484px] bg-[#ddd6fe] mt-[70px] flex justify-center items-center mb-[100px]">
//                 <div className=" w-[80%] h-[70%] flex justify-between items-center">
//                 {/* Vision Statement */}
//                 <div className="w-[45%] h-[300px] bg-blue-400 rounded-lg text-left flex flex-col justify-center items-center p-[40px]">
                    
//                 <h1 className="w-full text-[30px] mb-[20px] font-bold text-[#5415b9] ">VISION STATEMENT</h1>
//                 <p className=" w-full text-[16px] font-medium">The University of Computer Studies, Maubin aspires to be an autonomous learner-focused university which provides standard medical education and produces competent medical doctors.</p>
//                 </div>
//                 {/* Mission Statement */}
//                 <div className="w-[45%] h-[300px] bg-red-400 rounded-lg text-left flex flex-col justify-center items-center p-[40px]">
//                 <h1 className="w-full text-[30px] mb-[20px] font-bold text-[#5415b9] ">MISSION STATEMENT</h1>
//                 <p className=" w-full text-[16px] font-medium">The University of Computer Studies, Maubin is committed to providing a conducive learning environment which can provide fundamental knowledge, skills, attitude and personal development to its students and promote research culture and innovations.</p>
//                 </div>
//                 </div>
//             </div>
//         </section>

        

//     );
// }

// export default About;

import React from "react";
import Banner from "../images/Logo.png";

function About() {
    return (
        <section id="About" className=" w-full pt-28 ">
            <div className=" flex  justify-between items-center max-md:flex-col max-md:px-5 w-full h-auto">
                
                {/* Text Section */}
                <div className="w-full md:w-[50%] lg:w-[50%] xl:w-[50%] h-full p-4 md:p-9 lg:p-9 xl:p-9 flex flex-col justify-center items-center">
                    <h1 className="text-[#00a6a6] font-bold max-md:text-2xl md:text-[30px] lg:text-4xl uppercase pb-[20px] mb-4">About The University Of Computer Studies Maubin</h1>
                    <p className="text-base lg:text-lg text-justify">&nbsp;&nbsp;&nbsp;&nbsp;University of Computer Studies (Maubin), located in Maubin Township, about 100 km
                                (62 miles) from West of Yangon, is one of three computer universities in Ayeyarwady Region. The
                                university offers both computer science and computer technology to its undergraduate students.
                                The university's campus has the area of 53.872 acres.
                                Government Computer College (Maubin) started up on first January 2003. It was upgraded as
                                Computer University (Maubin) on 20 January 2007. In 2015, it was renamed as University of
                                Computer Studies (Maubin).</p>
                </div>
                {/* Logo Section */}
                <div className="w-full md:w-[50%] lg:w-[50%] xl:w-[50%] h-full flex justify-center items-center object-cover mt-4 md:mt-0 lg:mt-0 xl:mt-0">
                    <img className="w-[100px] sm:w-[250px] md:w-[300px] lg:w-[400px] xl:w-[300px] h-[150px] sm:h-[250px] md:h-[300px] lg:h-[400px] xl:h-[300px]" src={Banner} />
                </div>
                
            </div>
            <div className="w-full font-robo  max-md:px-5 py-20 px-10  bg-sky-100 mt-[70px] flex justify-between items-center flex-col gap-y-8     lg:flex-row">
            
                    {/* Vision Statement */}
                    <div className=" max-md:w-full max-md:h-auto  w-[50%] h-[350px] max-lg:px-5 max-lg:py-12  lg:px-8 lg:py-10 xl:px-10 xl:py-16 bg-[#f3f3f3] mx-2 shadow-lg rounded-lg  text-justify md:w-[80%]">
                        
                        <h1 className="w-full text-center max-md:text-2xl text-3xl mb-5 font-bold text-[#00a6a6]">VISION STATEMENT</h1>
                        <p className="w-full  text-base font-medium">
                        &nbsp; The university offers two undergraduate programs, the Bachelor of Computer Science (B.C.Sc) and the Bachelor of Computer Technology (B.C.Tech), that are designed to equip students with the essential computer skills and knowledge necessary to become competent computer professionals. </p>
                        </div>
                        
                        {/* Mission Statement */}
                        <div className="max-md:w-full max-md:h-auto w-[50%] h-[350px] max-lg:px-5 max-lg:py-12 lg:px-8 lg:py-10 xl:px-10 xl:py-16 mx-2 bg-[#f3f3f3] shadow-lg rounded-lg text-justify  md:w-[80%] ">
                        <h1 className="w-full   text-center max-md:text-2xl text-3xl mb-5 font-bold text-[#00a6a6]">MISSION STATEMENT</h1>
                        <p className="w-full  text-base font-medium">
                        &nbsp; The University of Computer Studies (Maubin) is committed to sharing knowledge about computer  science and computer technology, educating students to be successful, ethical, and effective  problem-solvers and lifelong learners, creating a learning environment that fosters critical thinking and creativity, and enabling graduates to be well-prepared for professional careers with a strong emphasis on autonomy and innovation in the Computer Science and Technological industry.</p>
                        </div>
                        
                        </div>
        </section>
);
}

export default About;

   