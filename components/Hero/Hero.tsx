import React, { useEffect, useState } from "react";
import { Typography, Button } from "antd";
import Africa from '...\Hero\Africa.png'
import Image from 'next/image'
import heroCSS from '@/styles/Hero.module.css'


 
const Hero: React.FC = () => {
    const { Text } = Typography;

    return (
        <div className={`h-screen w-full relative bg-africa ${heroCSS.hero}`}>
            <Image
                className="w-full h-full bg-cover object-cover z-40 hidden md:block"
                src={`https://i.imgur.com/upNsB54.jpeg`}
                alt="hero_img"
            />
            <Image
                className="w-full h-full bg-cover object-cover z-40 md:hidden  "
                src={`https://i.imgur.com/Nkg5zhj.jpeg`}
                alt="hero_img"
            />
            <div className="absolute inset-0 flex flex-col md:items-start justify-center items-center px-8 ">
                <h1 className="text-5xl font-bold text-white md:text-black">Nuturing Africa&apos;s Future</h1>
                <p className="mt-3 text-lg text-white md:text-black">Together we make the world a better place</p>
                <div className="mt-8">
                    <button className="px-8 py-3 bg-blue-500 text-white font-bold rounded-full">
                        Donate here
                    </button>
                </div>
            </div>
        </div>

    );
};

export default Hero;