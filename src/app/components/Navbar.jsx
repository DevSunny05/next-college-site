import Link from "next/link";
import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  return (
    <nav>
      <Link href={"/"}>
        <img src="/logo.png" alt="logo" />
      </Link>
      <div className="nav-links">
        <MdOutlineCancel className="fa" />
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
      <IoMdMenu className="fa" />
    </nav>
  );
};

export default Navbar;
