import React from "react";

import style from "../Styles/Hero.module.css";
import Herochild from "./Herochild";

const Hero = () => {
  return (
    <div>
      <div className="main px-5 py-10">
        <main>
          <div className="top flex flex-col">
            <div className="flex" id={style.box}>
              {"we create".split("").map((item, index) => (
                <span
                  className="font-semibold text-[10vw] tracking-tighter leading-none"
                  key={index}
                  id={style.box}
                >
                  {item}
                </span>
              ))}
            </div>
            {/* <div className="second flex flex-row items-center gap-3">
              // {/* <div
              //   id={style.box}
              //   className="box w-[12vw] rounded-lg h-[10vh] bg-cyan-500 text-center text-4xl hidden"
              // ></div> */}
            {/* <div className="flex font-semibold text-[10vw] tracking-tighter leading-none">
                {"Some New".split("").map((item, index) => (
                  <span key={index} id={style.box}>
                    {item}
                  </span>
                ))}
              </div>
            </div> */}
            <div className="flex font-semibold text-[10vw] tracking-tighter leading-none">
              {"Some Thing".split("").map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </div>
          </div>
        </main>
      </div>
      <Herochild />
    </div>
  );
};

export default Hero;
