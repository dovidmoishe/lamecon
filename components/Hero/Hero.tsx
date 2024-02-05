import React, { useEffect, useState } from "react";
import { Typography, Button } from "antd";

const Hero: React.FC = () => {
    const { Text } = Typography;
   
    return (
        <div className="h-screen w-full relative">
            <div className="absolute inset-0 flex pt-15 flex-col justify-center items-center text-black bg-opacity-10 h-screen px-2">
                <Text>
                    <h1 className="text-6xl font-bold text-center">Nuturing Africa future</h1>
                </Text>
                <Text className="text-lg mt-5 text-black text-center"> Together we make the world a better place
                </Text>
                <div className=" flex flex-row justify-center items-center text-white bg-opacity-50 pt-5 ">
                    <Button className="bg-blue-500  text-white font-bold rounded-full">
                        Donate here
                    </Button>
                </div>

            </div>
        </div>
    );
};

export default Hero;