import React, { useState } from "react";
import vectorkcil from "../Gambar/kanan/vectorkcil.png"
import vectorbesar from "../Gambar/kanan/vectorbesar.png"
import spatuoren from "../Gambar/kanan/spatuoren.jpeg"
import spatubiru from "../Gambar/kanan/spatu biru.png"
import putihijo from "../Gambar/kanan/spatuputihijo.jpg"
import putihabu from "../Gambar/kanan/spatuputihabu.png"
import bulatanmerah from "../Gambar/kanan/bulatanmerah.png"


const Kanan = () =>{

const [jumlah, setJumlah] = useState(0);

    return(
        <div className="absolute grid grid-rows-[20%_45%_20%_20%_20%] col-start-4 row-start-2">
            <div className="grid grid-cols-[4fr_1fr_1fr]  relative ">
                <p className="geomotos text-lg self-center font-black z-30 ">PERSONALIZE</p>
                <button className=" geomotos text-[10px] self-end font-black mb-2 cursor-pointer  ease-in-out duration-300 hover:scale-110 hover:bg-black rounded hover:text-[#F6F6F6]">INSPIRATION</button>
                <button className="geomotos w-14  text-[10px] ml-2 self-end font-black mb-2 cursor-pointer  ease-in-out duration-300 hover:scale-110 hover:bg-black rounded hover:text-[#F6F6F6]">CUSTOM</button>
                <img src={vectorbesar} className=" col-start-1 col-span-3 w-[460px]" alt="" />
            </div>

            <div className=" grid z-10 grid-cols-[115px_115px_115px_115px]">
                <img src={spatuoren} className="" alt="" />
                <img src={spatubiru} className="" alt="" />
                <img src={putihijo} className="" alt="" />
                <img src={putihabu} className="" alt="" />
            </div>

            <div className="mt-4 geomotos text-lg">
                <p>Size</p>
                <img src={vectorbesar}  className=" mt-2 w-[460px] " alt="" />
            </div>

            <div className="flex mt-4 font-bold text-xl ">
                <button className="z-30 cursor-pointer  ease-in-out duration-300 hover:scale-110  mr-6">40</button>
                <button className="z-30 cursor-pointer  ease-in-out duration-300 hover:scale-110  mr-5">40,5</button>
                <button className="z-30 cursor-pointer  ease-in-out duration-300 hover:scale-110  mr-6">41</button>
                <button className="z-30 mr-5 cursor-pointer  ease-in-out duration-300 hover:scale-110 ">41,5</button>
                <button className="mr-6 cursor-pointer  ease-in-out duration-300 hover:scale-110 ">42</button>
                <button className="mr-5 cursor-pointer  ease-in-out duration-300 hover:scale-110 ">42,5</button>
                <button className="mr-6 cursor-pointer  ease-in-out duration-300 hover:scale-110 ">43</button>
                <button className="mr-6 cursor-pointer  ease-in-out duration-300 hover:scale-110 ">43,5</button>
                <button className="mr-5 cursor-pointer  ease-in-out duration-300 hover:scale-110 ">44</button>
            </div>

            <div className="z-30 grid grid-cols-[50%_50%] mt-4">
                <div className="flex items-center">
                    <button onClick={() => setJumlah((i) => i = i-1)} className="transition text-[#CF3645]  w-8 cursor-pointer hover:scale-150  active:text-black  ease-in  duration-150 mr-10 text-[25px]">-</button>
                    <p className="font-bold text-[40px]">{jumlah}</p>
                    <button onClick={() => setJumlah((i) => i = i+1)} className="transition text-[#CF3645] active:text-black w-8 hover:scale-110 cursor-pointer ml-10 text-[25px]">+</button>
                </div>

                <button className="bg-[#CF3645] hover:scale-105 ease-in-out duration-300 active:text-[#CF3645] active:bg-[#F6F6F6]  text-base ml-6 font-bold w-[200px] h-[44px] self-center  text-center p-2  rounded-2xl text-[#F6F6F6] ">
                    BUY NOW 
                </button>
            </div>
            
        </div>
    )
}

export default Kanan