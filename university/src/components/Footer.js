import React from "react";
import Banner from "../images/Logo.png"
const Footer= () =>{
    return(
        
        <section id="Footer" className="w-full ">
            <div className=" bg-[#f3f4f6] max-lg:flex-col max-lg:items-center flex justify-around mb-[10px] ">
            <div className="flex flex-col items-center ">
                <div className="flex justify-center"> 
                <img className="w-[150px] h-[150px] max-lg:hidden" src={Banner} />
                <div className="  w-full h-auto text-center pl-[10px]">
                    <h1 className="my-3 text-[#00a6a6] font-bold text-2xl max-sm:text-xl">UNIVERSITY OF COMPUTER STUDIES, MAUBIN</h1>
                    <p className="max-sm:text-sm">Address: Between Ward 1 and 2, on Sein Mya Kan Thar Street, Maubin, Ayeyarwaddy Region, Myanmar.</p>
                    {/* Footer Email */}
                    <div className="mt-[10px] flex justify-center max-sm:flex-col max-sm:items-center" >
                    <svg className="w-[25px] h-[20px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
                    <p className="ml-[10px] leading-5 font-medium">interimcouncil.ucsmub@protonmail.com</p>
                    </div>
                    {/* Footer Phone */}
                    {/* <div className="mt-[10px] flex justify-center max-sm:flex-col max-sm:items-center" >
                    <svg className="w-[24px] h-[20px] " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">  <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
                    <p className="ml-[10px] leading-5 font-medium">+14352881331</p>
                    </div> */}
                    
                </div>

                </div>
            </div>
            {/* CATEGORY */}
            <div className="flex flex-col items-center" >
                <h1 className="text-2xl max-sm:text-xl my-3 font-bold text-[#00a6a6]">CATEGORY</h1>
                <a className="px-4 font-[500]  text-[18px] hover:text-[#00a6a6]" href="#Home">HOME</a>
            <a className="px-4 font-[500] text-[18px hover:text-sky-500" href="#About">ABOUT</a>

            <a className="px-4 font-[500] text-[18px] hover:text-[#00a6a6] hover:duration-500" href="#IUC" >IUC</a>
            <a className="px-4 font-[500] text-[18px] hover:text-[#00a6a6] hover:duration-500" href="#Course">COURSE</a>
            <a className="px-4 font-[500] text-[18px] hover:text-[#00a6a6] hover:duration-500" href="#New" >NEW&EVENTS</a>
            </div>
            {/* SOCIAL LINKS */}
            <div className="flex flex-col items-center"> 
                <h1 className=" text-2xl max-sm:text-xl my-3 font-bold text-[#00a6a6]">SOCIAL LINK</h1>
                <button className="w-[80px] h-[40px]">
               <svg className="w-[40px] h-[30px] mx-auto relative  "fill="blue"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>
                </button>
                {/* <div className="flex justify-between items-center">
                <svg className="w-[30px] h-[30px] mx-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
                <svg className="w-[30px] h-[30px] mx-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>
                <svg className="w-[30px] h-[30px] mx-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"/></svg>
                <svg className="w-[30px] h-[30px] mx-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
                </div> */}
            </div>
            </div>            

           
          {/* Sub Footer */}
          <div className="w-full mx-auto  bg-[#00a6a6] p-[12px]">
                <p className="text-center font-medium text-lg text-white font-pop">Copyright 2023 © UCSMUB | Powered by Quokka Studio</p>
            </div>  
        </section>
        
    )
}
export default Footer;



            // <div className=" bg-[#f3f4f6] max-lg:flex-col  flex justify-between mb-[10px]">
            // <div className="flex flex-col items-center ">
            //     <div className="flex justify-center"> 
            //     <img className="w-[190px] h-[196px]" src={Banner} />
            //     <div className="  w-[360px] h-[196px] pl-[10px]">
            //         <h1 className="my-3 text-[#5415b9] font-bold text-2xl">UNIVERSITY OF COMPUTER STUDIES, MAUBIN</h1>
            //         <p>Address: 7th Mile, Natmauk Road, Magway City, Magway Region, Myanmar</p>
            //         {/* Footer Email */}
            //         <div className="mt-[10px] flex " >
            //         <svg className="w-[25px] h-[20px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
            //         <p className="ml-[10px] leading-5">interimcouncil.ummg@protonmail.com</p>
            //         </div>
            //         {/* Footer Phone */}
            //         <div className="mt-[10px] flex " >
            //         <svg className="w-[24px] h-[20px] rota" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">  <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
            //         <p className="ml-[10px] leading-5">+14352881331</p>
            //         </div>
                    
            //     </div>

            //     </div>
            // </div>
            // {/* CATEGORY */}
            // <div className="flex flex-col items-center" >
            //     <h1 className="text-2xl my-3 font-bold text-[#5415b9]">CATEGORY</h1>
            //     <a className="px-4 font-[500]  text-[18px]" href="#Home">HOME</a>
            // <a className="px-4 font-[500] text-[18px]" href="#About">ABOUT</a>

            // <a className="px-4 font-[500] text-[18px]" href="#IUC" >IUC</a>
            // <a className="px-4 font-[500] text-[18px]" href="#Course">COURSE</a>
            // <a className="px-4 font-[500] text-[18px]" href="#New" >NEW&EVENTS</a>
            // </div>
            // {/* SOCIAL LINKS */}
            // <div> 
            //     <h1 className=" text-2xl my-3 font-bold text-[#5415b9]">SOCIAL LINK</h1>
            //     <div className="flex justify-between items-center">
            //     <svg className="w-[30px] h-[30px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
            //     <svg className="w-[30px] h-[30px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>
            //     <svg className="w-[30px] h-[30px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"/></svg>
            //     <svg className="w-[30px] h-[30px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
            //     </div>
            // </div>
            // </div>
