import React from "react";
import Banner from "../images/iuc.jpg";
import Banner1 from "../images/C1_icon.webp";
import Banner2 from "../images/C2_icon.webp";
import Banner3 from "../images/C3_icon.webp";
import Academic from "../images/academic.svg";
import Info from "../images/Info.webp";
import Student from "../images/Student.svg";

const Iuc= () => {
    return(
        
        <section id="Iuc" className=" w-full">
        <div className=" w-full max-lg:h-auto max-lg:pt-28 max-lg:pb-5 h-[528px] 
            flex justify-between items-center max-lg:flex-col mx-auto ">
                {/* Text Section */}
                <div data-aos="zoom-in" className=" max-lg:w-full  lg:w-[50%] h-full   max-lg:mx-auto   max-lg:pt-0  lg:pt-28 max-md:px-7 md:px-10 lg:px-10">
                <h1 className="w-full text-[#00a6a6]  font-bold max-md:text-2xl md:text-4xl lg:text-4xl pb-[20px] ">INTERIM UNIVERSITY COUNCIL</h1>
                <p className=" w-full  max-lg:text-base lg:text-lg font-medium  mb-[8px] text-justify">&nbsp;&nbsp;&nbsp;As for University of Computer Studies (Maubin), Interim University Council was founded to
become the one which actually represents students, teachers and staffs of this
university; to strive against military dictator with the collaboration of students, teachers and staffs
in harmony; to implement interim education plan so that the CDM students do not pass up their
educational opportunities; and to cooperate with the National Unity Government more effectively.</p>

               
                </div>
                {/* Image Section */}
                <div data-aos="zoom-in" className="w-[50%] h-full flex justify-center items-center object-cover max-lg:hidden "> 
                 <img className="w-[447px] h-[222px] " src={Banner}  />
                 </div>
            </div>
            {/* THE CORE COMMITTEE OF IUC */}
            <div className=" w-full h-auto border-t font-robo">
                <h1 className=" md:text-4xl max-md:text-3xl pt-8 font-bold text-center text-[#00a6a6] mb-14">THE CORE COMMITTEE OF IUC</h1>
                <div className="  w-full h-full p-5 mx-auto  flex flex-wrap gap-x-20 gap-y-24 justify-center items-center text-justify">

                <div data-aos="fade-up" className="card1   w-[350px] h-[490px] max-sm:h-[auto] p-[20px]  rounded-lg border border-slate-400  shadow-slate-200 shadow-[0_8px_8px_5px] ;">
                        
                        <img className=" w-[80px] mx-auto max-md:-translate-y-0 -translate-y-16" src={Academic} />

                        <div className="max-md:-translate-y-0  -translate-y-12">
                        <h1 className="text-[20px]  font-bold text-[#00a6a6] mb-4  text-center uppercase">The Academic Affairs Committee</h1>
                        <p className="text-[14px]">The Academic Affairs Committee is executing academic programs for the CDM teachers and students. The committee comprises</p>
                        <ul className="list-disc text-[14px] pl-[15px]">
                            <li className="">Creating new curriculum compliance with institutional and accreditation standards for the CDM students</li>
                            <li>Supporting necessary capacity building and knowledge sharing programs for the CDM students and teachers</li>
                            
                            
                            <li>Establishing rules and regulations of the requirements of professional development</li>
                        </ul>
                        <p className="text-[14px]" >The Academic Affairs Committee manages curriculum development and academic policies concerned academic affairs, and plans future education programs of the CDM students and teachers.</p>
                    
                        </div>
                       </div>
                    <div data-aos="fade-up" className="card2  max-sm:h-[auto] w-[350px] h-[490px] p-[20px]  rounded-lg border border-slate-400  shadow-slate-200 shadow-[0_8px_8px_5px] ;">
                        
                        <img className=" w-[80px] mx-auto max-md:-translate-y-0 -translate-y-16 bg-slate-200 rounded-[50%] border border-slate-200" src={Student} />
                        <div className="max-md:-translate-y-0 -translate-y-12">
                        <h1 className="text-[20px]  font-bold text-[#00a6a6] mb-4  text-center uppercase">The Student Affairs Committee</h1>
                        <p className="text-[14px]" >The specific goals and objectives of the Student Affairs Committee are</p>
                        <ul className="list-disc text-[14px] pl-[15px]">
                            <li className="">Collecting and maintaining the CDM students' data</li>
                            <li>Managing Enrollment processes and procedures</li>
                            <li>Creating the CDM students' education opportunities</li>
                            <li>Scheduling timetable for delivering targeted courses and programs</li>
                        </ul>
                        <p className="text-[14px]" >The activities of the committee serves the development of the CDM students' education.</p>
                    
                        </div>
                       </div>
                       <div data-aos="fade-up" className="card3 max-sm:h-[auto] w-[350px] h-[490px] p-[20px]  rounded-lg border border-slate-400  shadow-slate-200 shadow-[0_8px_8px_5px] ;">
                        
                        <img className=" w-[80px] mx-auto max-md:-translate-y-0 -translate-y-16 bg-sky-100 rounded-[50%] border border-sky-100" src={Info} />
                        <div className="max-md:-translate-y-0 -translate-y-12">
                        <h1 className="text-[20px]  font-bold text-[#00a6a6] mb-4  text-center uppercase">The Information and External Relations Committee</h1>
                        <p className="text-[14px]" >Information and External Relations Committee is responsible for</p>
                        <ul className="list-disc text-[14px] pl-[15px]">
                            <li className="">Formulating and executing comprehensive communication plans to effectively convey the university's mission, vision, and values</li>
                            <li>Supervising website development and social media management</li>
                            <li>Engaging with key stakeholders such as alumni and donors, and representing the institution at external events and forums</li>
                        </ul>
                        <p className="text-[14px]" >The committee provides communication procedures of the university in interim period.</p>
                    
                        </div>
                       </div>
                      {/* <div data-aos="fade-up" className="card4  max-md:overflow-y-scroll w-[350px] h-[430px] p-[20px]  rounded-lg border border-slate-400  shadow-slate-200 shadow-[0_8px_8px_5px] ;">
                        
                        <img className=" w-[80px] mx-auto max-md:-translate-y-0 -translate-y-16" src={Banner2} />
                        <div className="max-md:-translate-y-0 -translate-y-12">
                        <h1 className="text-[20px]  font-bold text-[#00a6a6] mb-4  text-center">Finance and Audit Committee </h1>
                        <p className="text-[16px]" >The Academic Committee is implementing academic programs for teachers and students. The academic programs include</p>
                        <ul className="list-disc text-[14px] pl-[15px]">
                            <li className="">Capacity building/knowledge sharing programs for teachers</li>
                            <li>Creating courses for undergraduate students</li>
                            <li>Creating extracurricular courses for personal and professional development</li>
                        </ul>
                        <p className="text-[14px]" >The academic committee manages the academic affairs of the students. The academic committee also develops the academic policies to be applied for the interim as well as future academic programs.</p>
                    
                        </div>
                       </div>
                       <div  data-aos="fade-up" className="card5  max-md:overflow-y-scroll w-[350px] h-[430px] p-[20px]  rounded-lg border border-slate-400  shadow-slate-200 shadow-[0_8px_8px_5px] ;">
                        
                        <img className=" w-[80px] mx-auto max-md:-translate-y-0 -translate-y-16" src={Banner2} />
                        <div className="max-md:-translate-y-0  -translate-y-12">
                        <h1 className="text-[20px]  font-bold text-[#00a6a6] mb-4  text-center">Information and External Relations Committee</h1>
                        <p className="text-[16px]" >The Academic Committee is implementing academic programs for teachers and students. The academic programs include</p>
                        <ul className="list-disc text-[14px] pl-[15px]">
                            <li className="">Capacity building/knowledge sharing programs for teachers</li>
                            <li>Creating courses for undergraduate students</li>
                            <li>Creating extracurricular courses for personal and professional development</li>
                        </ul>
                        <p className="text-[14px]" >The academic committee manages the academic affairs of the students. The academic committee also develops the academic policies to be applied for the interim as well as future academic programs.</p>
                    
                        </div>
                       </div> */}
                   
                </div>
            </div>
        </section>
        
    )
}
export default Iuc;