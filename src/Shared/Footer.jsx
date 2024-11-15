import Logo from "../Components/Home/Logo";

const Footer = () => {
  return (
    <footer className="w-full px-6 lg:px-12 py-[70px] flex flex-col gap-[20px]">
      <div className="flex justify-between w-full flex-wrap gap-[40px] md:gap-[30px] border-b border-[#B7B7B7] pb-[30px]">
        <div className="w-full md:w-[20%]">
          <div className="">
            <Logo width="50px" height="50px" />
          </div>

          <p className="text-[16px] font-[400] leading-[24px] text-[#585858] mt-[10px]">
            Zero Sugar adalah aplikasi interaktif untuk membantu generasi muda
            mengontrol konsumsi gula mereka dengan teknologi analitik dan AI.
            Kami berdedikasi mendukung gaya hidup sehat melalui kemudahan akses
            informasi dan fitur deteksi otomatis.
          </p>
          <h4 className="text-[20px] leading-[22px] font-[600] mt-[20px]">
            Follow Us
          </h4>
          <div className="flex items-center gap-[15px] mt-[10px]">
            <a>
              <img
                src="/Icons/facebook.png"
                alt="facebook"
                className="w-[20px]"
              />
            </a>
            <a>
              <img
                src="/Icons/twitter.png"
                alt="twitter"
                className="w-[20px]"
              />
            </a>
            <a>
              <img
                src="/Icons/instagram.png"
                alt="instagram"
                className="w-[20px]"
              />
            </a>
            <a>
              <img
                src="/Icons/linkedin.png"
                alt="linkedin"
                className="w-[20px]"
              />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[40px] flex-1">
          <div>
            <h3 className="text-[20px] leading-[22px] font-[600]">Company</h3>
            <ul className="flex flex-col gap-[5px] footerUl">
              <li>About Us</li>
              <li>Our Services</li>
              <li>Contact Us</li>
              <li>Partners</li>
              <li>Community</li>
            </ul>
          </div>
          <div>
            <h3 className="text-[20px] leading-[22px] font-[600]">Services</h3>
            <ul className="flex flex-col gap-[5px] footerUl">
              <li>Analitik Konsumsi Gula</li>
              <li>Deteksi AI untuk Kebiasaan Konsumsi</li>
              <li>Deep Learning untuk Pendeteksian Gula</li>
              <li>Konsultasi Ahli Kesehatan</li>
              <li>Rencana Gaya Hidup Sehat</li>
              <li>Pemberitahuan Pengingat Konsumsi</li>
            </ul>
          </div>
          <div>
            <h3 className="text-[20px] leading-[22px] font-[600]">
              Media Centre
            </h3>
            <ul className="flex flex-col gap-[5px] footerUl">
              <li>Blog</li>
              <li>Artikel Kesehatan</li>
              <li>Berita Terbaru</li>
              <li>Galeri Inspirasi</li>
              <li>Media Kit</li>
            </ul>
          </div>
          <div>
            <h3 className="text-[20px] leading-[22px] font-[600]">Resources</h3>
            <ul className="flex flex-col gap-[5px] footerUl">
              <li>FAQ</li>
              <li>Pusat Bantuan</li>
              <li>Karir</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex items-center flex-wrap gap-[20px] lg:gap-0 justify-center lg:justify-between w-full">
        <p className="text-[#454545] font-[400] leading-[18px] text-[14px]">
          © Hak Cipta Seluruhnya Dilindungi ZeroSugar
        </p>

        <div className="flex flex-wrap items-center gap-[20px] justify-center md:justify-start md:gap-[50px] text-[#454545] font-[400] leading-[18px] text-[14px]">
          <a>Instagram</a>
          <a>Facebook</a>
          <a>Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
