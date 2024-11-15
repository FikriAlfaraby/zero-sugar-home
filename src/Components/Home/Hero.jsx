import React from "react";

// utils
import { styles } from "../../Utils/Styles.js";

// react icons
import { GoArrowRight } from "react-icons/go";

const Hero = () => {
  const containerStyle = {
    backgroundImage: "url(/heroImage.gif)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%",
  };

  return (
    <main
      className="w-full min-h-[90vh] flex flex-col items-center justify-center"
      style={containerStyle}
    >
      <div className="w-full px-6 lg:w-[80%] mx-auto text-center">
        <h1 className="text-white text-[45px] lg:text-[58px] font-[700] leading-[50px] lg:leading-[75px]">
          Mengubah <span className="text-primary">Gaya Hidup</span> Generasi
          Muda Menjadi Lebih Sehat dengan{" "}
          <span className="text-primary">ZeroSugar</span>
        </h1>
        <p className="text-white text-[16px] font-[400] leading-[24px] mt-[20px] w-full md:w-[80%] mx-auto">
          ZeroSugar adalah aplikasi interaktif yang membantu remaja mengontrol
          konsumsi gula mereka. Dengan fitur analisis data, deteksi AI, dan
          dukungan ahli, kami berkomitmen untuk mendukung perubahan pola hidup
          yang lebih sehat bagi generasi muda.
        </p>

        <div className="flex items-center flex-col md:flex-row gap-[30px] justify-center mt-[30px]">
          <a
            href="https://zero-sugar-app.vercel.app/sign-in"
            className={`${styles.buttonPrimary}`}
          >
            Get Started
          </a>
          <button
            className={`flex items-center gap-[5px] text-white border-b hover:text-primary transition-all duration-500 hover:border-primary group`}
          >
            <a href="https://zero-sugar-app.vercel.app/sign-in">Know More </a>
            <GoArrowRight className="text-[1.2rem] group-hover:ml-[8px] transition-all duration-500 group-hover:text-primary" />
          </button>
        </div>
      </div>
    </main>
  );
};

export default Hero;
