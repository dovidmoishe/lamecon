import React, { useState } from "react";
import { Flex, Button, Drawer, Typography } from "antd";
import Image from "next/image";
import Logo from "@/public/logo.png";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import { JSX } from "react/jsx-runtime";
import { FaPhone } from "react-icons/fa6";

const { Text } = Typography;
interface NavBarProps {
    // Define your props here
}
interface AppMenuProps {
    isinline: boolean;
}

const items = [
    {
        id: 1,
        name: "About",
        section: "about",
    },
    {
        id: 2,
        name: "Values",
        section: "values",
    },
    {
        id: 3,
        name: "Projects",
        section: "project",
    },

    {
        id: 4,
        name: "Gallery",
        section: "gallery",
    },
    {
        id: 5,
        name: "Campaigns",
        section: "campaigns"
    },

    {
        id: 6,
        name: "Contact us",
        section: "contactus",
    },
];

// AppMenu component
function AppMenu(props: { isinline: boolean, onLinkClick: () => void }): JSX.Element {
    return (
        <div className={`flex items-center justify-between gap-3 ${props.isinline ? "flex-col" : "flex-row"
            }`}>
            <div
                className={`flex items-center gap-3 ${props.isinline ? "flex-col" : "flex-row"
                    }`}
            >
                {items.map((item) => (
                    <Link href={`#${item.section}`} key={`${item.id}`} className="cursor-pointer" onClick={props.onLinkClick} >
                        <Text className="uppercase text-grey-500 font-semibold">{item.name}</Text>
                    </Link>
                ))}
            </div>
            <div className=" md:hidden">
                <div className="flex items-center ml-4">
                    <FaPhone style={{ width: '20px', height: '20px' }} />
                    <Text>
                        <span className="ml-2 font-bold">+2349136088877</span>
                    </Text>
                    <Text className="ml-2 font-bold">Lameconprogram@gmail.com</Text>
                </div>
            </div>
        </div>
    );
}

// NavBar component
const NavBar = (props: any) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const open = () => {
        setIsOpen(true);
    };

    const close = () => {
        setIsOpen(false);
    };

    const handleLinkClick = () => {
        close(); // close the drawer when a link is clicked
    };

    return (
        <div className="flex items-center justify-between px-3 py-2 " style={{ backgroundColor: "#fff" }}>
            <div className="flex items-center">
                <Image src={Logo} alt="logo" width={75} height={75} />
                <div className="md:block hidden ml-10">
                    <AppMenu isinline={false} onLinkClick={handleLinkClick} />
                </div>
            </div>

            <div className="flex items-center justify-between">
                <div className="md:hidden block hover:cursor-pointer">
                    <AiOutlineMenu onClick={open} style={{ width: '40px', height: '40px' }} />
                </div>
            </div>

            <div className="hidden md:block">
                <div className="flex items-center ml-4">
                    <FaPhone style={{ width: '20px', height: '20px' }} />
                    <Text>
                        <span className="ml-2 font-bold">+2349136088877</span>
                    </Text>
                </div>
            </div>

            <Drawer className="bg-bgColor" onClose={close} open={isOpen}>
                <AppMenu isinline={true} onLinkClick={handleLinkClick} />
            </Drawer>
        </div>
    );
};




export default NavBar;
