"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

const experiences = [
    {
      id: 1,
      title: "MERN Stack Developer",
      company: "Onetick Technologies Pvt Ltd",
      duration: "2024 – 2025",
      description:
        "Built and maintained full-stack web applications using the MERN stack. Improved performance and scalability of APIs, integrated third-party services, and collaborated across teams to deliver efficient solutions.",
      image: "/images/mern.jpg", // ✅ Add your image path
    },
    {
      id: 2,
      title: "Software Engineer Trainee",
      company: "Bridge Group Solutions Pvt Ltd",
      duration: "Jan 2025 – Apr 2025",
      description:
        "Participated in Agile development cycles, worked on debugging and enhancing enterprise systems, and contributed to the creation of new modules while strengthening skills in testing and clean coding practices.",
      image: "/images/mern2.jpg", // ✅ Add your image path
    },
  ];
  

const cardVariants = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (

    <section id="experience" className=" scroll-mt-28">
  <h2 className="text-center text-4xl font-bold text-white mt-4 mb-12">
    Experience
  </h2>
  <ul
    ref={ref}
    className="grid md:grid-cols-2 gap-8 md:gap-12 px-4"
  >
    {experiences.map((exp, index) => (
      <motion.li
        key={exp.id}
        variants={cardVariants}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        transition={{ duration: 0.5, delay: index * 0.3 }}
      >
         <ExperienceCard
  title={exp.title}
  company={exp.company}
  duration={exp.duration}
  description={exp.description}
  image={exp.image}
/>

      </motion.li>
    ))}
  </ul>
</section>

   
  );
};

export default ExperienceSection;
