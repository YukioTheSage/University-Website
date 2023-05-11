import React from "react";
import Banner from "../images/banner.jpg";


function Home() {
    return(
        <section id="Home" className="w-full h-[650px]  pt-28">
            
            <img className="w-full h-[550px] object-cover" src={Banner}></img>

            
        </section>
    );
}
export default Home;