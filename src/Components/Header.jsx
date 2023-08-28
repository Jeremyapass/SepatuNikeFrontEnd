import React from "react";
import cart from "../Gambar/shopping_cart.png"
import garistiga from "../Gambar/GARIS 3.png";
import elips from "../Gambar/Ellipse.png"
import "../css.css"

const Header = () =>{
    return(
        <div className=" bg-white rounded border-r-[#CF3645] grid grid-rows-[1fr_1fr_1fr] gap-3 rows-start-1 row-span-3">
            <div className=" grid  grid-rows-[80%_20%] place-items-center ">
                <div className=" tommy font-bold flex text-[30px] -ml-16 -mr-16 mt-6 rotate-270 "> 
                    <button className="text-[#CF3645]">PRO</button> <button className="text-[#4f4f4f]">GEAR</button>
                </div>
                {/* <img src={progearheader} className="self-end h-[189px] w-[25px] -mb-3" alt="" /> */}
                <img src={garistiga} className="cursor-pointer ease-in-out duration-300 hover:scale-110 h-[20px] mb-4 w-[20px] self-end" alt="" />
            </div>

             <div className=" grid grid-rows-[20%_80%] justify-items-center">
                <img src={cart} className="ease-in-out duration-300 hover:scale-110 cursor-pointer h-[20px]  w-[20px] " alt="" />
                {/* <img src={elips} className=" h-[20px] absolute  w-[20px] " alt="" /> */}
                    <button className="text-[#4f4f4f] tommy text-end  w-56  -ml-24 -mr-24 mb-12 self-end rotate-270">Sport Gear That You Need</button> 
                {/* <img src={tulisankecil} className="  w-[20px] h-[80%] -mb-10 self-end absolute" alt="" /> */}
             </div>

        </div>
    )
}

export default Header