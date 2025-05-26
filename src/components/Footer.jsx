function Footer() {

  return(
    <footer className="flex w-full flex-wrap align-items-center mx-auto justify-between p-2 fixed -bottom-17 left-0 right-0 z-30 bg-[#73D4FF] rounded-full pb-20 pt-5">

      <div className="flex gap-15 w-full mx-auto">

        {/* Copyright & Class */}
        <div className="flex flex-col left-0 right-0 text-center max-w-[33%] mx-auto text-[#0069A8]">
          <p>&copy; {new Date().getFullYear()} <b>LUMBA-UMBAH</b></p>
          <p>TI 2023 C - Kelompok 5</p>
        </div>

        {/* Logo */}
        <div className="flex flex-wrap bottom-10 mx-auto">
          <a><img src="./logo-navy.png" className="h-15 w-15"></img></a>
        </div>

        {/* Social Media */}
        <div className="flex bottom-10 gap-3 mx-auto">
          <a href="#"><img src="./assets/whatsapp.png" className="h-15 w-15"></img></a>
          <a href="#"><img src="./assets/instagram.png" className="h-15 w-15"></img></a>
          <a href="#"><img src="./assets/facebook.png" className="h-15 w-15"></img></a>
          <a href="#"><img src="./github.png" className="h-15 w-15"></img></a>
        </div>
      </div>
    </footer>
  )

}

export default Footer;