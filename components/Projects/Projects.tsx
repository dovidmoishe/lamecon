import * as React from 'react';
import { Card, Typography } from 'antd';
import Project1 from "./Project1.jpeg"
import Project2 from "./Project2.jpeg"
import Project3 from "./Project3.jpeg"
import Project4 from "./Project4.jpeg"
import Project5 from './Project5.jpeg'
import Project6 from './Project6.jpeg'
import { StaticImageData } from 'next/image';
import Image from 'next/image';
import Meta from 'antd/es/card/Meta';
import Link from 'next/link';

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
        <div className="rounded-3xl m-2 my-1 text-left flex flex-col items-center bg-white cursor-pointer  ease-in duration-300 hover:scale-105 transform-gpu md:w-full w-auto" >
            <div className=" ">
    
                <Image src={ImageSrc} width={0} height={0} className="w-full h-max rounded-t-3xl " alt="Project image" />
            </div>
            <div className="m-3">
                <Text className="text-xl mt-3">{Name}</Text>
                <div className="mt-5 text-left w-52  md:w-fit ">
                    <Text className="text-gray-500 text-sm">{text}</Text>
                </div>
                <div className="mt-5">
                <Text className=' uppercase cursor-pointer text-gray-500'>Explore Project</Text>
                </div>
            </div>
        </div>
    //     <Card
    //     style={{ width: 400 }}
    //     className='rounded-3xl m-2 my-1 text-center bg-white cursor-pointer  ease-in duration-300 hover:scale-110 transform-gpu md:w-full w-auto'
    //     cover={
    //       <Image
    //         alt="example"
    //         src={ImageSrc}
    //       />
    //     }
    //     size='small'
        
    //   >
    //     <Meta
    //       title={Name}
    //       description={text}
           
    //     />
    //   </Card>
    )
}
export default function Projects(props: IAppProps) {
    return (
        <div className='mx-3 text-center ' id='project'>
            <div className="mb-8">
                <Text className="text-3xl">Projects</Text>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
                <ProjectCard ImageSrc={Project5} Name={"Lafia Reading Club"} text={"Building the reading culture "}></ProjectCard>
                <ProjectCard ImageSrc={Project5} Name={"Basic ICT for Public Secondary schools"} text={"The course BASIC ICT TRAINING is an initiative of LAMECON that focuses on public Secondary School Students to introduce them to the basics of computer with special focus on how to interface with the computer, how to use basic Applications like Microsoft Word, Excel, PowerPoint and Mavis Beacon."}></ProjectCard>
                <ProjectCard ImageSrc={Project5} Name={"Monitoring and Evaluation"} text={"Monitoring and Evaluation are fundamental processes that help improve project and organizational performance. Organizations want to be able to understand what works and what does not; funders want to see if and how projects reached objectives, and how their money is being used. "}></ProjectCard>
                <ProjectCard ImageSrc={Project5} Name={"Research and Evaluation"} text={"Dive into advanced research and data analysis with our course, Introduction to Research and Data Analysis (Evaluation) Perfect for students, academics, researchers, and market women, it equips you with essential skills to understand and analyze phenomena effectively. Elevate your research proficiency now"}>

                </ProjectCard>
                <ProjectCard ImageSrc={Project5} Name={"LAMECON Tech-Hub"} text={"Text project"}></ProjectCard>
                <ProjectCard ImageSrc={Project5} Name={"Electronic Data Collection Collection and Analytical Tools"} text={"Text project"}></ProjectCard>

            </div>
            <div className='mt-6'>
                <Link href="/projects" className='underline hover:text-slate-400 ease-in duration-200'>
                    See more projects...
                </Link>
            </div>
        </div>
    );
}
