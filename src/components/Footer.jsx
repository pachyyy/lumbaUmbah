function Footer() {

  return(
    <footer className="flex w-full flex-wrap align-items-center mx-auto justify-between p-2 fixed -bottom-20 left-0 right-0 z-30 bg-[#73D4FF] rounded-full pb-20 pt-5">

      <div className="flex flex-col-3 justify-center items-center w-[98%] mx-auto">

        {/* Copyright & Class */}
        <div className="container flex flex-col items-center mx-auto left-0 right-0 text-center">
          <p>&copy; {new Date().getFullYear()} <b>LUMBA-UMBAH</b></p>
          
          <p><br/>TI 2023 C - Kelompok 5</p>
        </div>

        {/* Logo */}
        <div className="flex flex-wrap bottom-10 mx-auto">
          <a><img src="./logo-navy.png" className="h-15 w-15"></img></a>
        </div>

        {/* Social Media */}
        <div className="flex flex-wrap bottom-10 mx-auto">
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