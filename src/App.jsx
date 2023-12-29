import React from "react";
import Header from "./Components/Header";
import Kiri from "./Components/Kiri";
import Kanan from "./Components/Kanan";
import sepatubesar from "./Gambar/sepatubesar.jpg";
import PROGEAR from "./Gambar/PROGEAR.png"
import "./css.css";
import Bawah from "./Components/Bawah";

function App() {
  return (
    <div className=" bg-gradient-to-r from-slate-100 to-[#F6F6F6]">
      
      <img src={sepatubesar} className=" absolute m-auto z-20 w-70% h-screen left-1/2  -translate-x-55% " alt="" />
      
      <div className=" grid-rows-[1fr_1fr_1fr] relative gap-3 grid-cols-[70px_1fr_1fr_1fr] grid min-h-screen">
        <Header/>
        <Kiri/>
        <Kanan/>
        <Bawah/>

         <img src={PROGEAR} className="w-[1420px] h-[155px] col-span-3 place-self-center -mt-6" alt="" />
    
        <div className=" flex col-start-4 row-start-3 text-xs opacity-30">
          <div className=" ml-[260px]  self-end  flex-row w-[206px]">
            <p className="text-end">Copyright By Jeremya Pascal</p>
            <p className="text-end">Designed By Savero Lubi</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
