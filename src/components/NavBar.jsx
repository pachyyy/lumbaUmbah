function NavBar() {

  return(
    <>
    <nav id="header" className="flex w-full flex-wrap align-items-center mx-auto justify-between p-2 fixed top-0 left-0 right-0 z-30">
      {/* Logo  */}
      <div className="flex justify-between items-center mx-auto">
        <a href="#"><img src="./logo-navy.png" alt="logo" className="h-30 w-30" /></a>
      </div>

      {/* Nav Links */}
      <div className="-ml-13">
        <ul className="flex gap-[4vw] text-[#0069A8]">
          <li className=" "><a href="#">Home</a></li>
          <li className=" "><a href="#">Services & Price</a></li>
          <li className=" "><a href="#">Outlet</a></li>
          <li className=" "><a href="#">About Us</a></li>
        </ul>
      </div>
      
      {/* Order Button */}
      <div>
        <button className="bg-[#0069A8] text-white rounded-xl px-4 py-3 hover:bg-[#80acc7] cursor-pointer transition-ease-in-out"><a href="#">Order Now</a></button>
      </div>
    </nav>
    </>
  );

}

export default NavBar;