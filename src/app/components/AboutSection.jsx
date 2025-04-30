"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
                <li>HTML</li>
                <li>CSS</li>
        <li>JavaScript</li>
        <li>React.js</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>Next.js</li>
        <li>MongoDB</li>
        <li>PostgreSQL</li>
        <li>Computer Networking</li>
        <li>Python</li>


        {/* <li>Sequelize</li> */}
        <li>Azure</li>
        {/* <li>MERN Stack</li> */}
        <li>OOPs in Java</li>
        <li>Git & GitHub</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Bachelor of Technology CSE</li>
        <li>J.C. Bose University of Science and Technology, YMCA  </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Microsoft Azure Artificial Intelligence (Infosys) </li>
        <li>Mern Stack Development</li>
        <li>Public Speaking (Nptel)</li>
        <li>Soft Skills (Nptel)</li>


      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-white scroll-mt-28">

      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} alt="About" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a passionate and results-driven full stack web developer with hands-on experience building scalable and responsive applications using the MERN stack and Next.js. Proficient in JavaScript, React, Node.js, and backend technologies like PostgreSQL and MongoDB. I have a strong foundation in object-oriented programming with Java and have also worked with Microsoft Azure for deploying cloud-based solutions. I thrive in collaborative environments and continuously seek opportunities to learn, grow, and contribute to impactful projects.
          </p>
          <div className="flex flex-row justify-start mt-8 space-x-16">
  <TabButton
    selectTab={() => handleTabChange("skills")}
    active={tab === "skills"}
  >
    Skills
  </TabButton>
  <TabButton
    selectTab={() => handleTabChange("education")}
    active={tab === "education"}
  >
    Education
  </TabButton>
  <TabButton
    selectTab={() => handleTabChange("certifications")}
    active={tab === "certifications"}
  >
    Certifications
  </TabButton>
</div>

<div className="mt-8 min-h-[200px] transition-all duration-300">
  {TAB_DATA.find((t) => t.id === tab).content}
</div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
