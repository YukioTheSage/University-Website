import React from "react";
import Banner from "../images/banner.png";


function Home() {
    return(
        <section  id="Home" className="w-full h-[650px]  pt-28">
            <div className="w-full h-[550px] overflow-hidden">
            <img  className="w-full h-full object-center" src={Banner}></img>
            </div>
            
        </section>
    );
}
export default Home;