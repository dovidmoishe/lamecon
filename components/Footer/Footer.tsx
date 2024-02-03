import React from "react";
import { Layout } from "antd";
import ImageLogo from "@/public/logo.png";
import Image from "next/image";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import Link from "next/link";

const { Footer } = Layout;

const AppFooter = () => {
  return (
    <Footer className="bg-transparent text-black p-4">
      <div className="flex flex-wrap flex-col items-center md:justify-between md:flex-row text-center gap-5">
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 flex items-center justify-center">
          <Image src={ImageLogo} alt="Company Logo" width={200} height={200} />
        </div>

        <div>
          <ul className="list-none p-0 m-0 flex gap-3">
            <li>
              <Link href="/#about">ABOUT</Link>
            </li>
            <li>
              <Link href="/#projects">PROJECTS</Link>
            </li>
            <li>
              <Link href="/#gallery">GALLERY</Link>
            </li>
            <li>
              <Link href="/#contact">CONTACT US</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="list-none p-0 m-0 flex items-center gap-3">
            <li>
              <Link href="#">
                <BsTwitter size={32} />
              </Link>
            </li>
            <li>
              <Link href="#">
                <BsFacebook size={32} />
              </Link>
            </li>
            <li>
              <Link href="#">
                <AiFillInstagram  size={32} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Footer>
  );
};

export default AppFooter;
