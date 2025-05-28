import { Link, NavLink } from 'react-router-dom';

function NavBar() {
  return(
    <>
    <nav id="header" className="flex w-full align-items-center mx-auto justify-between p-2 fixed top-0 left-0 right-0 z-30 bg-[#EFF9FF]">
        <div className="flex justify-between items-center w-[95%] mx-auto">
            {/* Logo  */}
          <div className="flex justify-start items-center">
            <a href="#"><img src="./logo-navy.png" alt="logo" className="m-4 h-20 w-20" /></a>
          </div>

          {/* Nav Links */}
          <div className="flex items-center gap-6 ">  
            <ul className="flex gap-[4vw] mr-10 justify-end text-sky-700">
              <li className="hover:text-white hover:bg-sky-700 transition-ease-in-out duration-300 cursor-pointer px-4 py-2 rounded-full"><Link to = "/">Home</Link></li>
              <li className="hover:text-white hover:bg-sky-700 transition-ease-in-out duration-300 cursor-pointer px-4 py-2 rounded-full"><Link to = "/price">Services & Price</Link></li>
              <li className="hover:text-white hover:bg-sky-700 transition-ease-in-out duration-300 cursor-pointer px-4 py-2 rounded-full"><Link to = "/about-us">About Us</Link></li>
            </ul>

             {/* Order Button */}
            <div>
              <button className="bg-sky-700 text-white rounded-xl px-4 py-3 ml-10 mr-10 hover:bg-green-600 cursor-pointer transition-ease-in-out duration-300"><a href="#">Order Now</a></button>
            </div>
          </div>         
        </div>
      </nav>
    </>
  );

}

export default NavBar;