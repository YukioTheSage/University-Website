import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NewsCard({data}) {
    const navigate = useNavigate();
  return (
    <section  >
            

            <div data-aos="zoom-in-up" className="relative card1 shadow-lg border  rounded-lg  max-md:h-[420px] md:h-[450px] lg:h-[450px]  xl:h-[450px] 2xl:h-[500px] sm:w-1/2 md:w-full lg:w-full xl:w-full  sm:mx-auto ">
                <img className="h-1/2 w-full rounded-t-lg border-t-0" src={data.src} />
                <div className="text-center">
                <h1 className="text-base max-md:text-sm font-semibold px-3">{data.title}</h1>
                
                
                </div>
                <h2 className=" pr-2 text-lg font-medium absolute right-0 bottom-[70px]">{data.date}</h2>
                <button onClick={() => navigate(`/newdetail/${data.id}`)} className="absolute bottom-0 w-full  bg-[#00a6a6] py-4 px-14 border-t-2 text-white  border-solid border-white font-medium rounded-b-lg ">More Detail</button>
                


            </div>
            
            
            
            
            
            
              
        </section>
  )
}
