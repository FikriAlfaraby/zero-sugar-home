import React from "react";
import { styles } from "../../Utils/Styles.js";

const Aboutus = () => {
  return (
    <section
      id="about"
      className="md:py-[40px] w-full grid-cols-1 grid lg:grid-cols-2"
    >
      <img src="/tentang-kami.jpg" alt="image" className="w-full mx-auto" />
      <article className="bg-[#FBFBFB] p-[30px] md:p-[60px] flex flex-col justify-center">
        <h1 className="text-[40px] font-[700] leading-[60px]">Tentang Kami</h1>
        <p className="text-[16px] font-[400] leading-[24px] text-[#585858] mt-[5px] mb-[30px] w-[80%]">
          Tim kami berdedikasi & berkomitmen untuk menciptakan solusi kesehatan
          yang interaktif dan mudah diakses. ZeroSugar hadir untuk membantu
          generasi muda menjalani gaya hidup sehat, mengurangi konsumsi gula,
          dan memahami dampaknya terhadap kesehatan mereka.
        </p>

        <div className="flex flex-col gap-[15px]">
          <div className="flex items-center gap-[8px]">
            <img
              src="/Icons/check-circle.png"
              alt="icon"
              className="w-[20px]"
            />
            <h3 className="text-[20px] font-[600]">
              Dashboard Analitik Konsumsi Gula
            </h3>
          </div>
          <div className="flex items-center gap-[8px]">
            <img
              src="/Icons/check-circle.png"
              alt="icon"
              className="w-[20px]"
            />
            <h3 className="text-[20px] font-[600]">
              Scanner Gula Berbasis Deep Learning
            </h3>
          </div>
          <div className="flex items-center gap-[8px]">
            <img
              src="/Icons/check-circle.png"
              alt="icon"
              className="w-[20px]"
            />
            <h3 className="text-[20px] font-[600]">
              Sistem Monitoring Harian Pengguna
            </h3>
          </div>
          <div className="flex items-center gap-[8px]">
            <img
              src="/Icons/check-circle.png"
              alt="icon"
              className="w-[20px]"
            />
            <h3 className="text-[20px] font-[600]">
              Katalog Ahli Kesehatan dan Gizi
            </h3>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Aboutus;
