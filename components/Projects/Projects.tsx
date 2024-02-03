import * as React from 'react';
import { Typography } from 'antd';
import Nurturing1 from "./nuturing1.jpeg"
import Nurturing2 from "./nuturing2.jpeg"
import Nurturing3 from "./nuturing3.jpeg"
import { StaticImageData } from 'next/image';
import Image from 'next/image';

const { Text } = Typography
export interface IAppProps {
}
interface IProjectProjects {
    ImageSrc: StaticImageData,
    Name: string,
    text: string
}

const ProjectCard = ({ ImageSrc, Name, text }: IProjectProjects) => {
    return (
        <div className="rounded-3xl p-6 m-2 my-1 text-center flex flex-col items-center bg-white cursor-pointer  ease-in duration-300 hover:scale-110 transform-gpu md:w-full w-auto" >
            <div className="">
                <Image src={ImageSrc} width={100} height={100} alt="Project image"/>
            </div>
            <Text className="text-xl mt-5 text-center">{Name}</Text>
            <div className="mt-7 text-center w-52  md:w-fit ">
                <Text className="text-gray-500">{text}</Text>
                </div>
        </div>
    )
}
export default function Projects(props: IAppProps) {
    return (
        <div className='mx-3 text-center ' id='project'>
            <div className="mb-4">
            <Text className="text-3xl">Projects</Text>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
                <ProjectCard ImageSrc={Nurturing1} Name={"Project 1"} text={"Text project"}></ProjectCard>
                <ProjectCard ImageSrc={Nurturing2} Name={"Project 1"} text={"Text project"}></ProjectCard>
                <ProjectCard ImageSrc={Nurturing3} Name={"Project 1"} text={"Text project"}></ProjectCard>
                
            </div>
        </div>
    );
}
