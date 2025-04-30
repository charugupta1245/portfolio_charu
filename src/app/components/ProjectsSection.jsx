"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description:
      "A modern and responsive portfolio built with React and Tailwind CSS, showcasing skills, projects, and contact information with smooth scroll and animations.",
    image: "/images/two.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/charugupta1245/portfolio",
    previewUrl: "https://github.com/charugupta1245/portfolio",
  },
  {
    id: 2,
    title: "Recipe App",
    description:
      "A dynamic recipe search application using a third-party API. Users can search recipes by ingredients or name, view nutritional info, and save favorites.",
    image: "/images/one.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/charugupta1245/recipeApp",
    previewUrl: "https://github.com/charugupta1245/recipeApp",
  },
  {
    id: 3,
    title: "Resume Builder App",
    description:
      "A user-friendly tool that helps users generate professional resumes by filling out form-based inputs. Features live preview, export to PDF, and customization options.",
    image: "/images/three.png",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 4,
    title: "Food Ordering Application - Zaykaa",
    description:
      "A full-stack mobile food ordering app where users can browse menus, place orders, and track delivery in real-time. Includes cart, payment, and order history features.",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Photo Editing Web Application",
    description:
      "An interactive photo editor allowing users to upload, crop, filter, and save images. Includes authentication and full CRUD operations for image management.",
    image: "/images/ss3.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Next.js Website",
    description:
      "A fast, SEO-optimized website built using Next.js and Tailwind CSS. Features server-side rendering, dynamic routing, and API integrations.",
    image: "/images/four.png",
    tag: ["All", "Web"],
    gitUrl: "/https://github.com/charugupta1245/TCB-Next",
    previewUrl: "/https://github.com/charugupta1245/TCB-Next",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="sec scroll-mt-28">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
