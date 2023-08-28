import React from "react";
import Header from "./Components/Header";
import Kiri from "./Components/Kiri";
import Kanan from "./Components/Kanan";
import sepatubesar from "./Gambar/sepatubesar.jpg";
import PROGEAR from "./Gambar/PROGEAR.png"
import "./css.css";
import Bawah from "./Components/bawah";

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
      </div>
    </div>
  );
}

export default App;
