import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import ButtonBuy from "./ButtonBuy";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white">
      <div className="flex items-center font-medium justify-between">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <img src={Logo} alt="logo" className="md:cursor-pointer h-7" />
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            {open ? <RxCross1 /> : <GiHamburgerMenu />}
          </div>
        </div>
        <div className="flex flex-row items-center">
          <ul className="md:flex hidden uppercase items-center gap-8">
            <NavLinks />
          </ul>
          <div className="md:block hidden py-5 px-4">
            <ButtonBuy />
          </div>
        </div>
        {/* Mobile nav */}
        <ul
          className={`
          md:hidden bg-white absolute w-full h-full bottom-0 py-24 pl-4 duration-500 ${
            open ? "left-0" : "left-[-100%]"
          }
          `}
        >
          <NavLinks />
          <div className="py-5">
            <ButtonBuy />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
