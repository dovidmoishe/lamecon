import React from "react";
import { Button, Card, Typography } from "antd";

const About = () => {
  const { Text } = Typography;
  return (
    <div className="mt-5 " id="about">
      <div className=" flex flex-col items-center sm:flex-row sm:justify-between text-black  ">
        <div className="justify-center flex flex-col items-center  w-25 h-100 m-10">
          <h1 className="text-5xl font-bold pb-5">LAMECON</h1>
          <p className="text-center font-normal text-md">
            Learning Adolescent Issues for better Mentorship Expectations (LAMECON) is a Non-Governmental Organization (NGO) fully committed to positively impacting the human race.
          </p>
        <p className="text-center font-normal text-md">
            We focus in supporting the African Youth and Adolescents, with concentrated mentorship,
            and focused learning to explore ideas, innovations, and contents that the average African Youth can use to impact the Socio-economic context.
            Our interest is in discuss that are more dominant among the young person, and the issues that mitigate their growth and contributions to
            developments such as Governance,Gender, HIV/AIDS, SRH, etc.
          </p>
          <Button className="bg-black  text-white font-bold rounded-full mt-5" >Read More</Button>
        </div>
      </div>
    </div>
  );
};

export default About;