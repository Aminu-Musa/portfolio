import { Button, Navbar, NavbarLink } from "flowbite-react";
import { NavLink } from "react-router-dom";
import { FaWhatsapp, FaFacebook  } from "react-icons/fa";
import {Facebook, WhatsApp} from "../../assets/SVGs"

const Nav = () => {
  return (
    <div className="h-[100px]">
      {/* SIDEBAR */}

      <div className="wrapper px-6 sm:container sm:mx-auto flex items-center justify-between  h-[100%]">
        <span className="font-bold">Aminu Musa</span>
        <div className="social  flex gap-[20px]">
        <a href="https://wa.me/08091575226" target="_blank" rel="noopener noreferrer" className="text-green-500"><WhatsApp/></a>
        <a href="https://wa.me/08091575226" target="_blank" rel="noopener noreferrer" className="text-blue-500"><Facebook/></a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
