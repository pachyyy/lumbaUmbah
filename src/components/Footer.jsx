import { FaWhatsapp } from "react-icons/fa";
import { Instagram } from "lucide-react";
import { FaFacebook } from "react-icons/fa";

function Footer() {

  return(
    <footer className="flex w-full flex-wrap align-items-center mx-auto bottom-0 left-0 right-0 z-30 bg-sky-300 rounded-t-4xl pt-5 text-center">

      <div className="flex flex-col-3 justify-between items-center w-[98%] mb-5 mx-auto">

        {/* Copyright & Class */}
        <div className="  flex flex-col text-sky-700 justify-start items-center mx-auto left-0 right-0 text-center">
          <p>&copy; {new Date().getFullYear()} <b>LUMBA-UMBAH</b></p>
          <p>TI 2023 C - Kelompok 5</p>
        </div>

        {/* Logo */}
        <div className="flex flex-wrap bottom-10 mx-auto">
          <a><img src="./logo-navy.png" className="h-15 w-15"></img></a>
        </div>

        {/* Social Media */}
        <div className="flex flex-wrap items-center gap-6 bottom-10 mx-auto">
          <a href="#"> <FaWhatsapp className="h-8 w-8 text-sky-700"/></a>
          <a href="#"> <Instagram className="h-8 w-8 text-sky-700"/></a>
          <a href="#"> <FaFacebook className="h-8 w-8 text-sky-700"/></a>
        </div>
      </div>
    </footer>
  )

}

export default Footer;