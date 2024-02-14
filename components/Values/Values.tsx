import React from "react";
import { Typography } from "antd";
import { GiAfrica } from "react-icons/gi";
import { BsFillArrowThroughHeartFill } from "react-icons/bs";
import { GoGoal } from "react-icons/go";
import { GiStairsGoal } from "react-icons/gi";

const { Text } = Typography;

interface GoalInterface {
    Icon: React.ReactNode;
    Name: string;
    text: string | React.ReactElement;
}

const goals = [
    {
        id: 1,
        Icon: <GiAfrica size="60" />,
        Name: "Our Motto",
        text: "Nuturing Africa Future.",
    },
    {
        id: 2,
        Icon: <BsFillArrowThroughHeartFill size="60" />,
        Name: "Core Values",
        text: (
            <ul>
                <li>Integrity</li>
                <li>Commitment</li>
                <li>Hardwork</li>
                <li>Dedication</li>
            </ul>
        ),
    },
    {
        id: 3,
        Icon: <GoGoal size="60" />,
        Name: "Goal",
        text: "We are focused on Youth and Adolescents with the aim to reduce the hinderances that affect their growth and development",
    },
    {
        id: 4,
        Icon: <GiStairsGoal size="60" />,
        Name: "Our Mission",
        text: "Through concentrated mentorship, we explore ideas, innovations, and contents, to help young persons contribute to socio-economic impact.",
    },
];
const GoalContainer = ({ Icon, Name, text }: GoalInterface) => {
    return (
        <div className="rounded-3xl p-6 m-2 my-5 text-center flex flex-col items-center bg-white cursor-pointer  ease-in duration-300 hover:scale-110 transform-gpu md:w-full w-auto" >
            <div className="flex items-center justify-center p-3 ">
                {Icon}
            </div>
            <Text className="text-xl mt-5 text-center font-semibold">{Name}</Text>
            <div className="mt-7 text-center w-52  md:w-fit ">
                <Text className="text-gray-500">{text}</Text>
            </div>
        </div>
    );
};
const CoreValues: React.FC = () => {
    return (
        <div id="values" className="text-center mt-4">
            <Text className=" uppercase text-4xl font-bold text-center  ">
                Our Core values
            </Text>
            <div className="flex flex-col justify-between items-center md:flex-row  md:items-stretch md:justify-space-around m-7 ">
                {goals.map((goal) => (
                    <GoalContainer Icon={goal.Icon} Name={goal.Name} text={goal.text} key={goal.id} />
                ))}
            </div>
        </div>
    );
};
export default CoreValues;