import React from "react";
import { Button, Card, Typography } from "antd";
import Image from "next/image";
import AboutImg from './Project6.jpeg'



const About = () => {
  const { Text } = Typography;
  return (
    // <div className="mt-7 text-center md:text-left" id="about">
    //   <h1 className="text-5xl font-bold pb-5 mb-10 mx-20 text-center">WHO WE ARE</h1>
    //   <div className=" flex flex-col items-center md:items-start md:flex-row md:justify-between  text-black gap-4">
    //   <div className="p-3 w-auto md:flex-1  pl-10 md:hidden flex items-center justify-center">
    //       <Image className="rounded-md w-1/2 md:w-auto " src={AboutImg} width={700} height={700} alt="aboutImg" />
    //     </div>
    //     <div className="justify-center flex flex-col items-center  w-25 h-100 m-10 flex-2 md:flex-1">
    //       <p className="text-left font-normal text-md mb-5 ">
    //         Learning Adolescent Issues for better Mentorship Expectations (LAMECON) is a Non-Governmental Organization (NGO) fully committed to positively impacting the human race.
    //       </p>
    //       <p className="text-left font-normal text-md">
    //         We focus in supporting the African Youth and Adolescents, with concentrated mentorship,
    //         and focused learning to explore ideas, innovations, and contents that the average African Youth can use to impact the Socio-economic context.
    //         Our interest is in discuss that are more dominant among the young person, and the issues that mitigate their growth and contributions to
    //         developments such as Governance,Gender, HIV/AIDS, SRH, etc.
    //         <br></br>
    //         <br />
    //         <Text className=" text-left text-black underline font-bold mt-10" >Learn More</Text>
    //       </p>
    //     </div>
    //   <div className="p-3 w-auto md:flex-1  pl-10 hidden md:block">
    //       <Image className="rounded-md w-1/2 md:w-auto " src={AboutImg} width={300} height={300} alt="aboutImg" />
    //     </div>
    //   </div>
    // </div>

    <div className="text-center" id="about">
      <Text className="uppercase font-bold text-4xl">
        Who we are?
      </Text>
      <div className="flex items-center md:items-start flex-col md:flex-row md:justify-between ">
        <div className="p-3">
          <Image className="rounded-md " src={AboutImg} width={400} height={400} alt="aboutImg" />
        </div>
        <div className="justify-center flex flex-col items-center  w-25 h-100 m-10 flex-2 md:flex-1">
          <p className="text-left font-normal text-md mb-5 ">
            Learning Adolescent Issues for better Mentorship Expectations (LAMECON) is a Non-Governmental Organization (NGO) fully committed to positively impacting the human race.
          </p>
          <p className="text-left font-normal text-md">
            We focus in supporting the African Youth and Adolescents, with concentrated mentorship,
            and focused learning to explore ideas, innovations, and contents that the average African Youth can use to impact the Socio-economic context.
            Our interest is in discuss that are more dominant among the young person, and the issues that mitigate their growth and contributions to
            developments such as Governance,Gender, HIV/AIDS, SRH, etc.
            <br></br>
            <br />
            <Text className=" text-left text-black underline font-bold mt-10" >Learn More</Text>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;