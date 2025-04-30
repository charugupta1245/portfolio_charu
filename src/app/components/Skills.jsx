// import React from 'react'

// const Skills = () => {
//   return (
//     <>
   
//  <div className="min-h-screen flex flex-col items-center justify-center px-4 py-10 text-white">
//   <div className="flex flex-col items-center max-w-[900px] w-full">
//    <div className="mb-4">
//     <button className="flex items-center gap-2 text-xs text-[#7a6fff] border border-[#7a6fff] rounded-full px-3 py-1">
//      <i className="fas fa-magic">
//      </i>
//      Think better with Next js 13
//     </button>
//    </div>
//    <h1 className="text-white text-xl font-semibold mb-2 text-center">
//     Making apps with modern technologies
//    </h1>
//    <p className="handwritten text-white text-sm mb-8 text-center">
//     Never miss a task, deadline or idea
//    </p>
//    <div className="flex flex-wrap justify-center gap-6 mb-6 ">
//     <img alt="HTML5 logo orange shield with white 5" className="h-10 w-10 " height="40" src="https://storage.googleapis.com/a1aa/image/0879d4c9-a3a6-4745-303a-b3a1159ae7fd.jpg" width="40"/>
//     <img alt="CSS3 logo blue shield with white 3" className="h-10 w-10" height="40" src="https://storage.googleapis.com/a1aa/image/b7f64347-c294-4c95-6b95-6e120a8b8da0.jpg" width="40"/>
//     <img alt="JavaScript logo yellow square with black JS letters" className="h-10 w-10" height="40" src="https://storage.googleapis.com/a1aa/image/90a9c172-62fc-4112-1831-c6e1a3edb23d.jpg" width="40"/>
//     <img alt="Tailwind CSS logo blue wave shape" className="h-10 w-10" height="40" src="https://storage.googleapis.com/a1aa/image/9e0455a9-e96f-458a-f746-58e209bcc66b.jpg" width="40"/>
//     <img alt="React logo blue atom shape" className="h-10 w-10" height="40" src="https://storage.googleapis.com/a1aa/image/24e8c83a-f67a-4117-3766-b8bbdfc1c439.jpg" width="40"/>
//     <img alt="Redux logo purple atom shape" className="h-10 w-10" height="40" src="https://storage.googleapis.com/a1aa/image/880cb413-d5fb-4193-1619-2c89aa5f3358.jpg" width="40"/>
//     <img alt="Recoil logo red atom shape with yellow center" className="h-10 w-10" height="40" src="https://storage.googleapis.com/a1aa/image/ed18b74d-c90e-4715-dde6-a1046d1c4413.jpg" width="40"/>
//     <img alt="TypeScript logo blue square with white TS letters" className="h-10 w-10" height="40" src="https://storage.googleapis.com/a1aa/image/adb3a72f-ef4e-490e-308f-2a6da895e1fc.jpg" width="40"/>
//     <img alt="Next.js logo white hexagon with black NEXT.js text" className="h-10 w-10" height="40" src="https://storage.googleapis.com/a1aa/image/e7f42a64-5c1b-445e-98d3-f73a7a040656.jpg" width="40"/>
//     <img alt="Vercel logo pink and purple M shape" className="h-10 w-10" height="40" src="https://storage.googleapis.com/a1aa/image/c7dba931-a566-4757-54af-bbd49dea164c.jpg" width="40"/>
//     <img alt="Storybook logo purple rounded square with white S letter" className="h-10 w-10" height="40" src="https://storage.googleapis.com/a1aa/image/3deaa92b-4da5-4626-4f3c-fdc853af1a97.jpg" width="40"/>
//     <img alt="Node.js logo green hexagon with white node text" className="h-10 w-10" height="40" src="https://storage.googleapis.com/a1aa/image/6cc3d5f5-3d1a-4bf8-f0a6-d3c8c6125afa.jpg" width="40"/>
//     <img alt="MongoDB logo green leaf shape" className="h-10 w-10" height="40" src="https://storage.googleapis.com/a1aa/image/5738f432-b788-4707-ec7b-6ae6174fd3d9.jpg" width="40"/>
//    </div>
//    <div className="flex flex-wrap justify-center gap-6 mb-6">
//     <img alt="HTML5 logo orange shield with white 5" className="h-10 w-10" height="40" src="https://storage.googleapis.com/a1aa/image/0879d4c9-a3a6-4745-303a-b3a1159ae7fd.jpg" width="40"/>
//     <img alt="CSS3 logo blue shield with white 3" className="h-10 w-10" height="40" src="https://storage.googleapis.com/a1aa/image/b7f64347-c294-4c95-6b95-6e120a8b8da0.jpg" width="40"/>
//     <img alt="JavaScript logo yellow square with black JS letters" className="h-10 w-10" height="40" src="https://storage.googleapis.com/a1aa/image/90a9c172-62fc-4112-1831-c6e1a3edb23d.jpg" width="40"/>
//     <img alt="Tailwind CSS logo blue wave shape" className="h-10 w-10" height="40" src="https://storage.googleapis.com/a1aa/image/9e0455a9-e96f-458a-f746-58e209bcc66b.jpg" width="40"/>
//     <img alt="MUI logo blue stylized M" className="h-10 w-10" height="40" src="https://storage.googleapis.com/a1aa/image/65ce7392-6f80-4f1c-b0c5-2a72fddfaa11.jpg" width="40"/>
//     <img alt="React logo blue atom shape" className="h-10 w-10" height="40" src="https://storage.googleapis.com/a1aa/image/24e8c83a-f67a-4117-3766-b8bbdfc1c439.jpg" width="40"/>
//     <img alt="Redux logo purple atom shape" className="h-10 w-10" height="40" src="https://storage.googleapis.com/a1aa/image/880cb413-d5fb-4193-1619-2c89aa5f3358.jpg" width="40"/>
//     <img alt="Recoil logo red atom shape with yellow center" className="h-10 w-10" height="40" src="https://storage.googleapis.com/a1aa/image/ed18b74d-c90e-4715-dde6-a1046d1c4413.jpg" width="40"/>
//     <img alt="TypeScript logo blue square with white TS letters" className="h-10 w-10" height="40" src="https://storage.googleapis.com/a1aa/image/adb3a72f-ef4e-490e-308f-2a6da895e1fc.jpg" width="40"/>
//     <img alt="Next.js logo white hexagon with black NEXT.js text" className="h-10 w-10" height="40" src="https://storage.googleapis.com/a1aa/image/e7f42a64-5c1b-445e-98d3-f73a7a040656.jpg" width="40"/>
//    </div>
//    <div className="flex flex-wrap justify-center gap-6 mb-6">
//     <img alt="Node.js logo green hexagon with white node text" className="h-10 w-10" height="40" src="https://storage.googleapis.com/a1aa/image/6cc3d5f5-3d1a-4bf8-f0a6-d3c8c6125afa.jpg" width="40"/>
//     <img alt="Express.js logo black hexagon with white express text" className="h-10 w-10" height="40" src="https://storage.googleapis.com/a1aa/image/e2135c87-9334-421c-352e-cd343315ec6e.jpg" width="40"/>
//     <img alt="MongoDB logo green leaf shape" className="h-10 w-10" height="40" src="https://storage.googleapis.com/a1aa/image/5738f432-b788-4707-ec7b-6ae6174fd3d9.jpg" width="40"/>
//     <img alt="Firebase logo yellow flame shape" className="h-10 w-10" height="40" src="https://storage.googleapis.com/a1aa/image/03692c5c-3611-46c3-2763-89ba6818043f.jpg" width="40"/>
//     <img alt="PostgreSQL logo blue elephant head" className="h-10 w-10" height="40" src="https://storage.googleapis.com/a1aa/image/515206a0-d50e-4d45-9cec-4c34ad176151.jpg" width="40"/>
//     <img alt="MySQL logo blue dolphin" className="h-10 w-10" height="40" src="https://storage.googleapis.com/a1aa/image/d6c5f716-6512-4f38-2207-6922143c8397.jpg" width="40"/>
//     <img alt="Prisma logo dark teal diamond shape" className="h-10 w-10" height="40" src="https://storage.googleapis.com/a1aa/image/6a1088f0-3140-4649-9955-740f74f00a23.jpg" width="40"/>
//     <img alt="GraphQL logo pink atom shape" className="h-10 w-10" height="40" src="https://storage.googleapis.com/a1aa/image/86afbe4e-dcea-46de-9b1d-46518139ed49.jpg" width="40"/>
//    </div>
//    <div className="flex flex-wrap justify-center gap-6 mb-6">
//     <img alt="React logo blue atom shape" className="h-10 w-10 border border-[#7a6fff] rounded" height="40" src="https://storage.googleapis.com/a1aa/image/24e8c83a-f67a-4117-3766-b8bbdfc1c439.jpg" width="40"/>
//     <img alt="Jest logo yellow circle with black stylized J" className="h-10 w-10" height="40" src="https://storage.googleapis.com/a1aa/image/903da999-2eb5-42f6-7fc6-5eebdfd043b8.jpg" width="40"/>
//     <img alt="Docker logo blue whale with containers" className="h-10 w-10" height="40" src="https://storage.googleapis.com/a1aa/image/a8417d8c-1c37-4cc6-5455-d382e99d300d.jpg" width="40"/>
//     <img alt="Figma logo multi-color F shape" className="h-10 w-10" height="40" src="https://storage.googleapis.com/a1aa/image/20f56acd-f07b-46a6-5860-fe0602f8c513.jpg" width="40"/>
//    </div>
//    <div className="flex flex-col items-center gap-1">
//     <img alt="Go programming language mascot gopher blue cartoon" className="h-10 w-10" height="40" src="https://storage.googleapis.com/a1aa/image/0cdb34fd-4778-43ed-8135-f12f7b6b4434.jpg" width="40"/>
//     <span className="text-[#00add8] font-bold text-lg">
//      GO
//     </span>
//    </div>
//   </div>
//  </div>

//     </>
//   )
// }

// export default Skills
'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';

const TechItem = ({ src, alt, className = '' }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, margin: "0px" });

  return (
    <motion.img
      ref={ref}
      alt={alt}
      src={src}
      className={`h-16 w-16 ${className}`}
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ 
        duration: 1.0,
        type: 'spring',
        stiffness: 120,
        damping: 12,
        mass: 0.5
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    />
  );
};

const Skills = () => {
  const containerRef = React.useRef(null);
  const isInView = useInView(containerRef, { once: false, margin: "0px" });

  return (
    <div 
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-center px-4 py-10 text-white"
    >
      <div className="flex flex-col items-center max-w-[900px] w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.6 }}
          className="mb-4"
        >
          <button className="flex items-center gap-2 text-lg text-[#7a6fff] border border-[#7a6fff] rounded-full px-3 py-3 hover:bg-[#7a6fff]/10 transition-all">
            <i className="fas fa-magic"></i>
            Think better with Next js 13
          </button>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.6, delay: 0.4 }}
          className="text-white text-2xl md:text-3xl font-semibold mb-2 text-center"
        >
          Making apps with modern technologies
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="handwritten text-white text-lg mb-8 text-center"
        >
          Never miss a task, deadline or idea
        </motion.p>


        <div className="flex flex-wrap justify-center gap-8 mb-8 ">
          {/* First Row */}
          <TechItem src="https://storage.googleapis.com/a1aa/image/0879d4c9-a3a6-4745-303a-b3a1159ae7fd.jpg" alt="HTML5 " className="border-2 border-[#00add8] rounded-full" />
          <TechItem src="https://storage.googleapis.com/a1aa/image/b7f64347-c294-4c95-6b95-6e120a8b8da0.jpg" alt="CSS3"  className="border-2 border-[#00add8] rounded-full" />
          <TechItem src="https://storage.googleapis.com/a1aa/image/90a9c172-62fc-4112-1831-c6e1a3edb23d.jpg" alt="JavaScript"  className="border-2 border-[#00add8] rounded-full" />
          <TechItem src="https://storage.googleapis.com/a1aa/image/9e0455a9-e96f-458a-f746-58e209bcc66b.jpg" alt="Tailwind CSS"  className="border-2 border-[#00add8] rounded-full" />
          <TechItem src="https://storage.googleapis.com/a1aa/image/24e8c83a-f67a-4117-3766-b8bbdfc1c439.jpg" alt="React"  className="border-2 border-[#00add8] rounded-full"/>
          <TechItem src="https://storage.googleapis.com/a1aa/image/880cb413-d5fb-4193-1619-2c89aa5f3358.jpg" alt="Redux"  className="border-2 border-[#00add8] rounded-full"/>
          <TechItem src="https://storage.googleapis.com/a1aa/image/ed18b74d-c90e-4715-dde6-a1046d1c4413.jpg" alt="Recoil" className="border-2 border-[#00add8] rounded-full" />
          <TechItem src="https://storage.googleapis.com/a1aa/image/adb3a72f-ef4e-490e-308f-2a6da895e1fc.jpg" alt="TypeScript" className="border-2 border-[#00add8] rounded-full" />
          <TechItem src="https://storage.googleapis.com/a1aa/image/e7f42a64-5c1b-445e-98d3-f73a7a040656.jpg" alt="Next.js" className="border-2 border-[#00add8] rounded-full" />
        </div>

        <div className="flex flex-wrap justify-center gap-8 mb-8">
          {/* Second Row */}
          <TechItem src="https://storage.googleapis.com/a1aa/image/6cc3d5f5-3d1a-4bf8-f0a6-d3c8c6125afa.jpg" alt="Node.js"  className="border-2 border-[#00add8] rounded-full"/>
          <TechItem src="https://storage.googleapis.com/a1aa/image/e2135c87-9334-421c-352e-cd343315ec6e.jpg" alt="Express.js"  className="border-2 border-[#00add8] rounded-full"/>
          <TechItem src="https://storage.googleapis.com/a1aa/image/5738f432-b788-4707-ec7b-6ae6174fd3d9.jpg" alt="MongoDB" className="border-2 border-[#00add8] rounded-full" />
          <TechItem src="https://storage.googleapis.com/a1aa/image/03692c5c-3611-46c3-2763-89ba6818043f.jpg" alt="Firebase"  className="border-2 border-[#00add8] rounded-full"/>
          <TechItem src="https://storage.googleapis.com/a1aa/image/515206a0-d50e-4d45-9cec-4c34ad176151.jpg" alt="PostgreSQL"  className="border-2 border-[#00add8] rounded-full"/>
          <TechItem src="https://storage.googleapis.com/a1aa/image/d6c5f716-6512-4f38-2207-6922143c8397.jpg" alt="MySQL"  className="border-2 border-[#00add8] rounded-full"/>
          <TechItem src="https://storage.googleapis.com/a1aa/image/6a1088f0-3140-4649-9955-740f74f00a23.jpg" alt="Prisma"  className="border-2 border-[#00add8] rounded-full"/>
          <TechItem src="https://storage.googleapis.com/a1aa/image/86afbe4e-dcea-46de-9b1d-46518139ed49.jpg" alt="GraphQL" className="border-2 border-[#00add8] rounded-full" />
        </div>

        <div className="flex flex-wrap justify-center gap-8 mb-8">
          {/* Tools Row */}
          <TechItem src="https://storage.googleapis.com/a1aa/image/903da999-2eb5-42f6-7fc6-5eebdfd043b8.jpg" alt="Jest"  className="border-2 border-[#00add8] rounded-full" />
          <TechItem src="https://storage.googleapis.com/a1aa/image/a8417d8c-1c37-4cc6-5455-d382e99d300d.jpg" alt="Docker"  className="border-2 border-[#00add8] rounded-full" />
          <TechItem src="https://storage.googleapis.com/a1aa/image/20f56acd-f07b-46a6-5860-fe0602f8c513.jpg" alt="Figma"  className="border-2 border-[#00add8] rounded-full" />
          <TechItem src="https://storage.googleapis.com/a1aa/image/3deaa92b-4da5-4626-4f3c-fdc853af1a97.jpg" alt="Storybook"  className="border-2 border-[#00add8] rounded-full" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="flex flex-col items-center gap-2"
        >
          <TechItem 
            src="https://storage.googleapis.com/a1aa/image/0cdb34fd-4778-43ed-8135-f12f7b6b4434.jpg" 
            alt="Go" 
            className="border-2 border-[#00add8] rounded-full"
          />
          <span className="text-[#00add8] font-bold text-xl">GO</span>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
