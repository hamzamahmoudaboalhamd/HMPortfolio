import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        I am Hamza, a front-end web developer with a strong passion for creating
        visually appealing and user-friendly web applications &amp; websites.
      </p>
      <p>
        I have also gained a solid foundation in HTML, CSS, JavaScript, and I am
        always technologies and techniques to enhance my skills.
      </p>
      <div className="flex flex-row md:items-start sm:items-center mt-10 gap-4">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
            My Projects
          </button>
        </Link>
        <a
          href="drive.google.com/file/d/1Ym3CHhFJxDDqjgyPeYBQ2VhDRROnjJC5/view"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          <button className="bg-orange  border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-darkBrown transition-all duration-500 cursor-pointer md:self-start sm:self-center">
            My CV
          </button>
        </a>
      </div>
    </div>
  );
};

export default AboutMeText;
