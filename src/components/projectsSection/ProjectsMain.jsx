import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Online store",
    year: "Mar2023",
    align: "right",
    image: "/images/website-img-1.png",
    link: "https://hamzamahmoudaboalhamd.github.io/Lila-Store/",
  },
  {
    name: "Educational Website",
    year: "Sept2023",
    align: "left",
    image: "/images/website-img-2.png",
    link: "https://hamzamahmoudaboalhamd.github.io/Educational-Website/",
  },
  {
    name: "Dash Bord",
    year: "Jan2023",
    align: "right",
    image: "/images/website-img-3.png",
    link: "https://hamzamahmoudaboalhamd.github.io/Dash-Bord/",
  },
  {
    name: "Elzero World",
    year: "May2024",
    align: "left",
    image: "/images/website-img-4.png",
    link: "https://hamzamahmoudaboalhamd.github.io/Elzero/",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
