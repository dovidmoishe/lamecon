import * as React from 'react';
import { Card, Typography } from 'antd';
import { StaticImageData } from 'next/image';
import Image from 'next/image';
import Link from 'next/link';
import BasicICT from './BasicICT.jpeg'
import TechHub from './TechHub.jpg'
import Reading from './Reading.jpeg'

const { Text } = Typography;

interface IProjectProjects {
    ImageSrc: StaticImageData;
    Name: string;
    text: string;
}

const ProjectCard = ({ ImageSrc, Name, text }: IProjectProjects) => {
    return (
        <div className='w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 p-2 ml-10 hover:scale-105 duration-200 transform-gpu '>
            <Card
                 hoverable
                 cover={<Image alt="Project Image" src={ImageSrc.src} className="rounded-t-3xl" />}
                 bodyStyle={{ padding: '16px 20px' }}
                 style={{ width: '300px', height: '420px' }}
                 >
                <Card.Meta title={Name} description={text} />
            </Card>
        </div>
    );
};

export default function Projects() {
    return (
        <div className='mx-3 text-center' id='project'>
            <div className="mb-8 flex flex-col justify-center">
                <Text className="text-4xl font-bold pb-3">WHAT WE DO</Text>
                <p className='font-normal text-md text-grey-500'>Focused on supporting the African Youth and Adolescents, with concentrated mentorship, and focused learning to explore ideas, innovations, and contents that the average African young persons can use to impact the Socioeconomic context</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-2">
                <ProjectCard ImageSrc={Reading} Name={"Lafia Reading Club"} text={"Building the reading culture"} />
                <ProjectCard ImageSrc={BasicICT} Name={"Basic ICT for Public Secondary schools"} text={"The course BASIC ICT TRAINING is an initiative of LAMECON"} />
                {/* <ProjectCard ImageSrc={Project5} Name={"Monitoring and Evaluation"} text={"Monitoring and Evaluation are fundamental processes that help improve"} />
                <ProjectCard ImageSrc={Project5} Name={"Research and Evaluation"} text={"Dive into advanced research and data analysis with our course, Introduction"} /> */}
                <ProjectCard ImageSrc={TechHub} Name={"LAMECON Tech-Hub"} text={"The LAMECON Tech-hub is aimed at establishing a collaborative space for technology."} />
                {/* <ProjectCard ImageSrc={Project5} Name={"Electronic Data Collection Collection and Analytical Tools"} text={"Text project"} /> */}
            </div>
            <div className='mt-6 mb-6'>
                <Link href="/projects" className='underline hover:text-slate-400 ease-in duration-200'>
                    See more projects...
                </Link>
            </div>
        </div>
    );
}

