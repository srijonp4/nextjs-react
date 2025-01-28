'use client';
import { FaFileZipper, FaGithub } from 'react-icons/fa6';
import { RxDropdownMenu } from 'react-icons/rx';
import { useState } from 'react';
import { FaAngleDoubleUp } from 'react-icons/fa';
import Navlink from './Navlink';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className=" bg-slate-900 sm:max-h-14 px-2 py-2 border-b border-b-slate-800">
      <div id="desktop" className="flex items-center justify-between">
        <div
          id="logo"
          className="text-4xl font-semibold hover:bg-gradient-to-r from-blue-600 via-green-500 to-pink-400 hover:bg-clip-text hover:text-transparent "
        >
          React Examples
        </div>
        <div className="flex gap-4">
          <ul
            id="desktop-links"
            className="hidden sm:flex gap-4 items-center justify-center "
          >
            <li>
              <Navlink label="Home" href="/" />
            </li>
            <li>
              <Navlink label="Examples" href="/examples" />
            </li>
            <li>
              <Navlink label="About" href="/about" />
            </li>
          </ul>
          <button
            className="btn text-4xl sm:hidden animate-wiggle"
            id="hamburger-btn"
            onClick={() => {
              setIsOpen((open) => !open);
            }}
          >
            <RxDropdownMenu />
          </button>
          <div id="codes" className="hidden sm:flex gap-2">
            <button className="btn text-green-600 outline outline-green-600 hover:text-slate-100 hover:outline-green-900 hover:bg-green-900 ">
              <FaGithub /> Github
            </button>
            <button className="btn bg-green-600  hover:bg-green-900 ">
              <FaFileZipper /> <span>Download Code</span>
            </button>
          </div>
        </div>
      </div>
      <div
        id="mobile"
        className={`${
          isOpen ? 'flex flex-col' : 'hidden'
        } border-t border-t-slate-800 pt-2 animate-appear`}
      >
        <ul
          id="mobile-links"
          className="flex flex-col justify-center items-center text-center gap-2"
        >
          <li>
            <Navlink label="Home" href="/" close={setIsOpen} />
          </li>
          <li>
            <Navlink label="Examples" href="/examples" close={setIsOpen} />
          </li>
          <li>
            <Navlink label="About" href="/about" close={setIsOpen} />
          </li>
        </ul>
        <button
          className="btn text-2xl text-red-500 animate-wiggle"
          id="close-menu-btn"
          onClick={() => {
            setIsOpen((open) => !open);
          }}
        >
          <FaAngleDoubleUp />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
