import React, { useEffect, useState } from "react";
import { Typography, Button } from "antd";

const Hero: React.FC = () => {
    const { Text } = Typography;
    // const [currentImageIndex, setCurrentImageIndex] = useState(0);
    // const images = ["../../public/images/nuturing1.jpeg", "../../public/images/nuturing2.jpeg", "../../public/images/nuturing3.jpeg"]; // Add your image URLs or paths here

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    //     }, 5000); // Change 5000 to adjust the interval in milliseconds
    //     return () => clearInterval(interval);
    // }, [images.length]);

    // const backgroundImageStyle = {
    //     backgroundImage: `url(${images[currentImageIndex]})`,
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    // };
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