import React from "react";

const Course= () =>{
    return(
      
        <section id="Course" className="
         w-full h-auto mb-8 pt-28 px-5" >
            
                <h1 className="w-full  mb-8 text-[36px] text-[#00a6a6] text-center font-bold">Course Section</h1>
                <div className="   grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10">
                {/* Vision Statement */}
                    <div className=" h-[312px] bg-blue-200 rounded-lg text-left flex flex-col justify-center items-center p-[40px]">
                    
                        <h1 className="w-full text-[30px] mb-[20px] font-bold text-[#00a6a6] ">Course</h1>
                        <p className=" w-full text-[16px] font-medium">Coming Soon</p>
                    </div>    
                {/* Mission Statement */}
                    <div className=" h-[312px] bg-blue-200 rounded-lg text-left flex flex-col justify-center items-center p-[40px]">
                        <h1 className="w-full text-[30px] mb-[20px] font-bold text-[#00a6a6] ">Course</h1>
                        <p className=" w-full text-[16px] font-medium">Coming Soon</p>
                     </div>   

                     <div className=" h-[312px] bg-blue-200 rounded-lg text-left flex flex-col justify-center items-center p-[40px]">
                        <h1 className="w-full text-[30px] mb-[20px] font-bold text-[#00a6a6] ">Course</h1>
                        <p className=" w-full text-[16px] font-medium">Coming Soon</p>
                     </div>   
                </div>
            
                
            
        
        </section>
       
        

    )
}
export default Course;