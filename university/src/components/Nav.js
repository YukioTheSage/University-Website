// import React from "react";
// import { useState } from "react";
// import Banner from "../images/Logo.webp";
// import Bar from "../images/bars-solid.svg";
// import Close from "../images/xmark-solid.svg";


// function NavBar() {
//   const Links=[
//     {name:"HOME",path:"#Home"},
//     {name:"ABOUT",path:"#About"},
//     {name:"IUC",path:"#Iuc"},
//     {name:"COURSE",path:"#Course"},
//     {name:"NEW&EVENTS",path:"#New"}
//   ]


//     let [isOpen,setIsOpen] = useState(false);
//     return(
//       <nav className="fixed w-full h-28 z-10  bg-[#f3f3f3] bg-opacity-80 shadow-lg backdrop-blur-xl">
//         <div className="flex justify-between lg:items-center w-full h-full">
//             <img className="w-[100px] h-[100px] ml-7" src={Banner} alt="banner" />
//             <img
//           className="w-6 h-6 cursor-pointer lg:hidden"
//           src={isOpen ? Close : Bar}
//           alt="bar"
//           onClick={() => setIsOpen(!isOpen)}
//         />
//             <ul className={`bg-red-200 z-20 md:pl-10 pr-24 lg:h-auto h-screen max-lg:pt-10 lg:static absolute top-0 ${!isOpen ? "right-[-100%]" : "right-0"} `}>
//               {
//                 Links.map((link) =>(
//                   <li className="lg:inline-block lg:ml-10 ml-5 max-lg:my-6 lg:border-b-4 lg:border-transparent lg:hover:border-black duration-500" key={link.name}>
//                   <a href={link.path} className=" sm:text-sm md:text-md lg:text-lg  py-2 inline-block font-medium">{link.name}</a>
//                 </li>
//                 )

//                 )
//               }

              
//             </ul>
            
//             </div>
//       </nav>
        
//     );
//     }
//     export default NavBar; 


import React, { useState } from "react";
import Banner from "../images/Logo.png";
import Bar from "../images/bars-solid.svg";
import Close from "../images/xmark-solid.svg";
import { Link } from 'react-scroll';



function NavBar() {
  const Links=[
    {name:"HOME",path:"Home"},
    {name:"ABOUT",path:"About"},
    {name:"IUC",path:"Iuc"},
    {name:"COURSE",path:"Course"},
    {name:"NEW&EVENTS",path:"New"},
  ]

  const [isOpen, setIsOpen] = useState(false);
  const handleLinkClick = () =>{
    setIsOpen(false); 
  }

  return (
    <nav className="fixed w-full h-28 z-10 bg-[#f3f3f3] bg-opacity-90 shadow-lg backdrop-blur-xl">
      <div className="flex justify-between items-center  w-full h-full">
        <div className="flex justify-between items-center">
        <img
          className="w-[80px] h-[80px] ml-4 mr-2 xl:ml-16 cursor-pointer"
          src={Banner}
          alt="banner"
          
        /><h1 className="w-auto h-full max-sm:text-sm font-robo text-xl uppercase font-bold sm:text-justify">University Of Computer<br></br> Studies (Maubin)</h1>
        </div>
         <div className="z-20 rounded-lg border-2 px-3 py-2 bg-[#00a6a6] mr-4 lg:hidden">
        <img
          className="w-8 h-8 max-sm:w-4 max-sm:h-4 duration-500 cursor-pointer lg:hidden"
          
          src={isOpen ? Close : Bar}
          alt="bar"
          onClick={() => setIsOpen(!isOpen)}
        />
        </div>
        <ul className={` xl:mr-24  max-lg:bg-[#f3f3f3] max-lg:w-80 max-lg:bg-opacity-90  max-lg:backdrop-blur-xl  pr-5 lg:h-auto h-screen max-lg:pt-10 lg:static absolute top-0 duration-500 ease-linear ${!isOpen ? "right-[-100%]" : "right-0"}`}>
          {Links.map((navlink) => (
            <li className=" lg:inline-block lg:mx-3 xl:mx-6 max-lg:my-6 lg:border-b-4 lg:border-transparent lg:hover:border-[#00a6a6] duration-500 " key={navlink.name}>
              <Link to={navlink.path} spy={true} smooth={true} duration={800} offset={-50} activeClass="text-[#00a6a6]" className={`hover:text-[#00a6a6] select-none max-lg:font-semibold max-lg:mb-10  max-lg:text-xl max-lg:font-pop text-xl py-1 inline-block font-medium
               text-gray-700 max-lg:border-b-4 max-lg:border-transparent
                  max-lg:hover:border-[#00a6a6] duration-500 max-lg:w-auto  max-lg:ml-10 text-center cursor-pointer `} onClick={handleLinkClick}       >{navlink.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;


// import React, { useState, useEffect, useRef } from "react";
// import Banner from "../images/Logo.webp";
// import Bar from "../images/bars-solid.svg";
// import Close from "../images/xmark-solid.svg";

// function NavBar() {
//   const Links = [
//     { name: "HOME", path: "#Home" },
//     { name: "ABOUT", path: "#About" },
//     { name: "IUC", path: "#Iuc" },
//     { name: "COURSE", path: "#Course" },
//     { name: "NEW&EVENTS", path: "#New" },
//   ];

//   const [isOpen, setIsOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState();
//   const observer = useRef();

//   const handleLinkClick = (id) => {
//     document.getElementById(id).scrollIntoView({
//       behavior: "smooth",
//       block: "start",
//     });
//     setIsOpen(false);
//   };

//   const setObserver = (el, id) => {
//     observer.current = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setActiveSection(id);
//         }
//       },
//       { threshold: 0.7 }
//     );

//     if (el) {
//       observer.current.observe(el);
//     }
//   };

//   useEffect(() => {
//     return () => {
//       if (observer.current) {
//         observer.current.disconnect();
//       }
//     };
//   }, []);

//   return (
//     <nav className="fixed w-full h-28 z-10 bg-[#f3f3f3] bg-opacity-90 shadow-lg backdrop-blur-xl">
//       <div className="flex justify-between items-center w-full h-full">
//         <div className="flex justify-between items-center">
//           <img
//             className="w-[100px] h-[100px] ml-4 xl:ml-16 cursor-pointer"
//             src={Banner}
//             alt="banner"
//           />
//           <h1 className="w-auto h-full max-sm:text-sm font-robo text-xl uppercase font-bold sm:text-justify">
//             University Of Computer
//             <br></br> Studies,Maubin
//           </h1>
//         </div>
//         <div className="z-20 rounded-lg border-2 px-3 py-2 bg-indigo-700 mr-4 lg:hidden">
//           <img
//             className="w-8 h-8 max-sm:w-4 max-sm:h-4 duration-500 cursor-pointer lg:hidden"
//             src={isOpen ? Close : Bar}
//             alt="bar"
//             onClick={() => setIsOpen(!isOpen)}
//           />
//         </div>
//         <ul
//           className={`xl:mr-24 max-lg:bg-[#f3f3f3] max-lg:w-80 max-lg:bg-opacity-90 max-lg:backdrop-blur-xl pr-5 lg:h-auto h-screen max-lg:pt-10 lg:static absolute top-0 duration-500 ease-linear ${
//             !isOpen ? "right-[-100%]" : "right-0"
//           }`}
//         >
//           {Links.map((navlink) => (
//             <li
//               className="lg:inline-block lg:mx-3 xl:mx-6 max-lg:my-6 lg:border-b-4 lg:border-transparent lg:hover:border-sky-500 duration-500"
//               key={navlink.name}
//             >
//               <a
//                 href={navlink.path}
//                 onClick={() => handleLinkClick(navlink.path)}
//                 className={`hover:text-sky-500 active:text-sky-500 max-lg:font-semibold max-lg:mb-10  max-lg:text-xl max-lg:font-pop text-xl py-1 inline-block font-medium
//                 text-gray-700 max-lg:border-b-4 max-lg:border-transparent
//                 max-lg:hover:border-sky-500 duration-500 max-lg:w-auto  max-lg:ml-10 text-center ${
//                   activeSection === navlink.path ? "text-sky-500" : "text-gray-700"
//                 }`}>
//                                 {navlink.name}
//                               </a>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     </nav>
//                   );
//                 }
                
//                 export default NavBar;

     
          


    



    




      