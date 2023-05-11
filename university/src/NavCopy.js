// <nav className="w-full h-20 shadow-xl bg-white fixed z-10 flex justify-between items-center
    // md:px-8 border-b-1 border-gray-600 border-solid">
    //   <div className="bg-blue-500 w-full h-full flex justify-between items-center"></div> 
    //    {/* Logo*/}
    //        <div>
    //         <img className="w-[80px] h-[80px] bg-red-500" src={Banner} />
    //        </div>
    //       {/* Button */}
    //    <div>
    //    <button className="bg-blue-500 block md:hidden"
    //            onClick={() => setIsOpen(!isOpen)}>
    //    <svg   className={`w-6 h-6 ${isOpen ? "hidden" : "block"}`}    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
    //      <path fill-rule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
    //    </svg>
       
    //    <svg className={`w-6 h-6 ${isOpen ? "block" : "hidden"}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
    //      <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd" />
    //    </svg>
    //    </button>            
    //    </div> 
       
                            


                                  
    //        </nav>    

     


// {/* NavLinks */}
// <div className={`${isOpen ? "block" : "hidden"}   md:block  `}>
// <a className="text-xl p-4 font-medium" href="#Home">Home</a>
// <a className="text-xl p-4 font-medium" href="#About">About</a>
// <a className="text-xl p-4 font-medium" href="#IUC">IUC</a>
// <a className="text-xl p-4 font-medium" href="#Course">Course</a>
// <a className="text-xl p-4 font-medium" href="#New">NEWS&EVENTS</a>

// </div>
// {/* NavLinks For Mobile View */}
// <div className={`${isOpen ? "hidden" : "block"}   sm:block sm:absolute sm:bg-violet-300  `}>
// <a className="text-xl p-4 font-medium" href="#Home">Home</a>
// <a className="text-xl p-4 font-medium" href="#About">About</a>
// <a className="text-xl p-4 font-medium" href="#IUC">IUC</a>
// <a className="text-xl p-4 font-medium" href="#Course">Course</a>
// <a className="text-xl p-4 font-medium" href="#New">NEWS&EVENTS</a>

// </div>
// </div>
 
// {/* Button */}
// <div>
// <button className="bg-blue-500 block md:hidden"
//         onClick={() => setIsOpen(!isOpen)}>
// <svg   className={`w-6 h-6 ${isOpen ? "hidden" : "block"}`}    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
//   <path fill-rule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
// </svg>
 
// <svg className={`w-6 h-6 ${isOpen ? "block" : "hidden"}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
//  <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd" />
// </svg>
// </button>            
// </div> 






// import React, { useState } from 'react';
// import Banner from "../images/Logo.webp"


// function NavBar() {
//  const [isOpen, setIsOpen] = useState(false);

//  return (
//    <nav className="flex items-center justify-between flex-wrap p-6">
//      <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72">
//        <img src={Banner} className="w-100 h-100" alt="Logo" />
//      </div>
//      <div className="block lg:hidden">
//        <button
//          onClick={() => setIsOpen(!isOpen)}
//          className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
//        >
//          <svg
//            className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
//            viewBox="0 0 20 20"
//            xmlns="http://www.w3.org/2000/svg"
//          >
//            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
//          </svg>
//          <svg
//            className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
//            viewBox="0 0 20 20"
//            xmlns="http://www.w3.org/2000/svg"
//          >
//            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
//          </svg>
//        </button>
//      </div>
//      <div
//        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}
//      >
//        <div className="text-sm lg:flex-grow">
//          <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
//            First Link
//          </a>
//          <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
//            Second Link
//          </a>
//          <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
//            Third Link
//          </a>
//          <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
//            Fourth Link
//          </a>
//        </div>
       
//      </div>
//    </nav>
//  );
// }
// export default NavBar;
   
   
   
  //  <nav class="absolute z-10">
  //     <div class="bg-white fixed flex justify-between items-center w-full h-[80px] border-b-1 border-gray-600 border-solid shadow-xl">
  //       <div class="ml-[40px] font-bold text-blue-950 text-[30px]">Logo</div>
  //       <div className="w-auto mr-3 rounded-md flex justify-end bg-blue-500">
  //       <button class="mobile-menu-button px-2 py-3  w-full  md:hidden">
  //         <svg class="h-6 w-6 text-white " viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
  //       </button>
  //       </div>
  //       <div class="navLinkCon  md:flex">
  //         <a class="px-4 font-medium text-base" href="#Home">HOME</a>
  //         <a class="px-4 font-medium text-base" href="#About">ABOUT</a>
  //         <a class="px-4 font-medium text-base transition duration-500" href="#IUC">IUC</a>
  //         <a class="px-4 font-medium text-base" href="#Course">COURSE</a>
  //         <a class="px-4 font-medium text-base" href="#New">NEW&EVENTS</a>
  //       </div>
  //     </div>
  //     <div class="mobile-menu hidden">
  //       <a class="block px-4 py-2 font-medium text-base border-b border-gray-600" href="#Home">HOME</a>
  //       <a class="block px-4 py-2 font-medium text-base border-b border-gray-600" href="#About">ABOUT</a>
  //       <a class="block px-4 py-2 font-medium text-base transition duration-500" href="#IUC">IUC</a>
  //       <a class="block px-4 py-2 font-medium text-base border-b border-gray-600" href="#Course">COURSE</a>
  //       <a class="block px-4 py-2 font-medium text-base" href="#New">NEW&EVENTS</a>
  //     </div>
  //     </nav>



//   <nav className="z-10 bg-white fixed flex justify-between items-center w-full h-[80px]  border-b-1 border-gray-600 border-solid shadow-xl">
      
// <div className="ml-[40px] font-bold text-blue-950 text-[30px]">Logo</div>
// <div className="navLinkCon mr-[70px] ">
// <a className="px-4 font-[500]  text-[18px]  " href="#Home">HOME</a>
// <a className="px-4 font-[500] text-[18px] " href="#About">ABOUT</a>

// <a className="px-4 font-[500] text-[18px] transition duration-500" href="#IUC" >IUC</a>
// <a className="px-4 font-[500] text-[18px]" href="#Course">COURSE</a>
// <a className="px-4 font-[500] text-[18px]" href="#New" >NEW&EVENTS</a>
// </div>


// </nav>