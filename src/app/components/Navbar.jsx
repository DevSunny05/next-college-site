"use client";
import Link from "next/link";
import React, { useRef } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  const navRef = useRef(null);

  const showMenu = () => {
    if (navRef.current) navRef.current.style.right = "0";
  };
  const hideMenu = () => {
    if (navRef.current) navRef.current.style.right = "-200px";
  };
  return (
    <nav>
      <Link href={"/"}>
        <img src="/logo.png" alt="logo" />
      </Link>
      <div className="nav-links" id="nav-links" ref={navRef}>
        <MdOutlineCancel className="fa" onClick={hideMenu} />
        <ul>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/"}>About</Link>
          </li>
          <li>
            <Link href={"/"}>Courses</Link>
          </li>
          <li>
            <Link href={"/"}>Blog</Link>
          </li>
          <li>
            <Link href={"/"}>Contact</Link>
          </li>
        </ul>
      </div>
      <IoMdMenu className="fa" onClick={showMenu} />
    </nav>
  );
};

export default Navbar;
