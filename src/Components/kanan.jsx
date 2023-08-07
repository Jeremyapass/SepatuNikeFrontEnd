import React from "react";
import vectorkcil from "../Gambar/kanan/vectorkcil.png"
import vectorbesar from "../Gambar/kanan/vectorbesar.png"
import spatuoren from "../Gambar/kanan/spatuoren.jpeg"
import spatubiru from "../Gambar/kanan/spatu biru.png"
import putihijo from "../Gambar/kanan/spatuputihijo.jpg"
import putihabu from "../Gambar/kanan/spatuputihabu.png"
import bulatanmerah from "../Gambar/kanan/bulatanmerah.png"


const kanan = () =>{
    return(
        <div className="grid grid-rows-[20%_45%_20%_20%] col-start-4 row-start-2">
            <div className="grid grid-cols-[4fr_1fr_1fr]  relative ">
                <p className="geomotos text-lg self-center font-black z-30 ">PERSONALIZE</p>
                <p className="geomotos text-[10px] self-end font-black mb-2 ">INSPIRATION</p>
                <p className="geomotos text-[10px] self-end font-black mb-2">CUSTOM</p>
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

            <div className="mt-6  flex font-bold text-xl ">
                <p className="mr-6">40</p>
                <p className="mr-5">40,5</p>
                <p className="mr-6">41</p>
                <p className="mr-5">41,5</p>
                <p className="mr-6">42</p>
                <p className="mr-5">42,5</p>
                <p className="mr-6">43</p>
                <p className="mr-6">43,5</p>
                <p className="mr-5">44</p>
            </div>

            <div>

            </div>
            
        </div>
    )
}

export default kanan