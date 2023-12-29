import React from "react";
import pkanan from "../Gambar/panah kanan.png"
import pkiri from "../Gambar/panah kiri.png"
import search from "../Gambar/search.png"

const Bawah = () =>{
    return(
        <div className=" z-30 row-start-3 items-center justify-center flex col-start-3">
        
        <img src={pkiri} className="cursor-pointer  ease-in-out duration-300 hover:scale-110  w-[50px]" alt="" />

        <img src={search} className="cursor-pointer  ease-in-out duration-300 hover:scale-110 w-[60px] ml-7 mr-7" alt="" />

        <img src={pkanan} className="cursor-pointer  ease-in-out duration-300 hover:scale-110  w-[50px]" alt="" />


        </div>
    )
}

export default Bawah