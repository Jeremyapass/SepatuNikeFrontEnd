import React from "react";
import bintang from "../Gambar/bintang.png"



const kiri = () =>{
    return(
        <div className=" absolute col-start-2 z-30 row-start-2">
            <div className=" ml-3 -mt-9  z-10 col-start-2 row-start-2 h">
                <p className=" from-[#CF3645] to-[#86151F] font-extrabold text-[85px] bg-clip-text text-transparent bg-gradient-to-r tommy ">Nike Phantom</p>
                <p className="-mb-3 -mt-12 from-[#CF3645] to-[#86151F] tracking-tighter font-bold text-[85px] bg-clip-text text-transparent bg-gradient-to-r tommy ">GX Academy</p>
            </div>
            
            <p className=" ml-3 louis font-bold text-[#4F4F4F] text-[22px]">Custom Multi-Ground Footbal Boot</p>
 
            <div className="text-[#4f4f4f] flex mt-3 ml-3">
                <p className=" -mt-2 text-[30px] font-extrabold">€123,47</p>
                
                <img src={bintang} className="ml-10  w-[80px] h-[30px]" alt="" />
            </div>

            <div className=" mt-4 ml-3 flex">
                <p className="geomotos mr-10 text-[11px]">More info</p>
                <p className="text-[#CF3645] geomotos text-[11px]">DELIVERY</p>
            </div>
        </div>
    )
}

export default kiri