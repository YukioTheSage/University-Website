import React from "react";
import Banner from "../images/banner2.webp";
import Banner1 from "../images/C1_icon.webp";
import Banner2 from "../images/C2_icon.webp";
import Banner3 from "../images/C3_icon.webp";

const Iuc= () => {
    return(
        
        <section id="Iuc" className=" w-full">
        <div className=" w-full max-lg:h-auto max-lg:pt-28 max-lg:pb-5 h-[528px] 
            flex justify-between items-center max-lg:flex-col mx-auto ">
                {/* Text Section */}
                <div className=" max-lg:w-full  lg:w-[50%] h-full   max-lg:mx-auto   max-lg:pt-0  lg:pt-28 max-md:px-7 md:px-10 lg:px-10">
                <h1 className="w-full text-[#00a6a6]  font-bold max-md:text-2xl md:text-4xl lg:text-4xl pb-[20px] ">INTERIM UNIVERSITY COUNCIL</h1>
                <p className=" w-full  max-lg:text-base lg:text-lg font-medium  mb-[8px] text-justify">&nbsp;&nbsp;&nbsp;As for University of Computer Studies (Maubin), Interim University Council was founded to
become the one which actually represents students, teachers and staffs of this
university; to strive against military dictator with the collaboration of students, teachers and staffs
in harmony; to implement interim education plan so that the CDM students do not pass up their
educational opportunities; and to cooperate with the National Unity Government more effectively.</p>

               
                </div>
                {/* Image Section */}
                <div className="w-[50%] h-full flex justify-center items-center object-cover max-lg:hidden "> 
                 <img className="w-[447px] h-[222px] " src={Banner}  />
                 </div>
            </div>
            {/* THE CORE COMMITTEE OF IUC */}
            <div className=" w-full h-auto border-t">
                <h1 className=" md:text-4xl max-md:text-3xl pt-8 font-bold text-center text-[#00a6a6] mb-14">THE CORE COMMITTEE OF IUC</h1>
                <div className="  w-full h-full p-5 mx-auto  flex flex-wrap gap-x-20 gap-y-24 justify-center items-center text-justify">
                <div className="card1  max-md:overflow-y-scroll  w-[350px] h-[430px] p-[20px]  rounded-lg border border-slate-400  shadow-slate-200 shadow-[0_8px_8px_5px] ;">
                        
                        <img className=" w-[80px] mx-auto max-md:-translate-y-0 -translate-y-16" src={Banner2} />
                        <div className="max-md:-translate-y-0  -translate-y-12">
                        <h1 className="text-[20px]  font-bold text-[#00a6a6] mb-4  text-center">Academic Affairs Committee </h1>
                        <p className="text-[16px]" >The Academic Committee is implementing academic programs for teachers and students. The academic programs include</p>
                        <ul className="list-disc text-[14px] pl-[15px]">
                            <li className="">Capacity building/knowledge sharing programs for teachers</li>
                            <li>Creating courses for undergraduate students</li>
                            <li>Creating extracurricular courses for personal and professional development</li>
                        </ul>
                        <p className="text-[14px]" >The academic committee manages the academic affairs of the students. The academic committee also develops the academic policies to be applied for the interim as well as future academic programs.</p>
                    
                        </div>
                       </div>
                    <div className="card2  max-md:overflow-y-scroll w-[350px] h-[430px] p-[20px]  rounded-lg border border-slate-400  shadow-slate-200 shadow-[0_8px_8px_5px] ;">
                        
                        <img className=" w-[80px] mx-auto max-md:-translate-y-0 -translate-y-16" src={Banner2} />
                        <div className="max-md:-translate-y-0 -translate-y-12">
                        <h1 className="text-[20px]  font-bold text-[#00a6a6] mb-4  text-center">Student Affairs Committee</h1>
                        <p className="text-[16px]" >The Academic Committee is implementing academic programs for teachers and students. The academic programs include</p>
                        <ul className="list-disc text-[14px] pl-[15px]">
                            <li className="">Capacity building/knowledge sharing programs for teachers</li>
                            <li>Creating courses for undergraduate students</li>
                            <li>Creating extracurricular courses for personal and professional development</li>
                        </ul>
                        <p className="text-[14px]" >The academic committee manages the academic affairs of the students. The academic committee also develops the academic policies to be applied for the interim as well as future academic programs.</p>
                    
                        </div>
                       </div>
                       <div className="card3  max-md:overflow-y-scroll w-[350px] h-[430px] p-[20px]  rounded-lg border border-slate-400  shadow-slate-200 shadow-[0_8px_8px_5px] ;">
                        
                        <img className=" w-[80px] mx-auto max-md:-translate-y-0 -translate-y-16" src={Banner2} />
                        <div className="max-md:-translate-y-0 -translate-y-12">
                        <h1 className="text-[20px]  font-bold text-[#00a6a6] mb-4  text-center">Research and Innovation Committee</h1>
                        <p className="text-[16px]" >The Academic Committee is implementing academic programs for teachers and students. The academic programs include</p>
                        <ul className="list-disc text-[14px] pl-[15px]">
                            <li className="">Capacity building/knowledge sharing programs for teachers</li>
                            <li>Creating courses for undergraduate students</li>
                            <li>Creating extracurricular courses for personal and professional development</li>
                        </ul>
                        <p className="text-[14px]" >The academic committee manages the academic affairs of the students. The academic committee also develops the academic policies to be applied for the interim as well as future academic programs.</p>
                    
                        </div>
                       </div>
                    <div className="card4  max-md:overflow-y-scroll w-[350px] h-[430px] p-[20px]  rounded-lg border border-slate-400  shadow-slate-200 shadow-[0_8px_8px_5px] ;">
                        
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
                       <div className="card5  max-md:overflow-y-scroll w-[350px] h-[430px] p-[20px]  rounded-lg border border-slate-400  shadow-slate-200 shadow-[0_8px_8px_5px] ;">
                        
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
                       </div>
                   
                </div>
            </div>
        </section>
        
    )
}
export default Iuc;