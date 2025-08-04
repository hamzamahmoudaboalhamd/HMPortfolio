import { Link } from "react-scroll";

const FooterMain = () => {
  const footerLinks = [
    {
      name: "About Me",
      section: "about",
    },
    {
      name: "Skills",
      section: "skills",
    },
    {
      name: "Experience",
      section: "experience",
    },
    {
      name: "Projects",
      section: "projects",
    },
  ];
  return (
    <div className="px-4">
      <div className="w-full h-[1px] bg-lightGrey mt-24"></div>
      <div className="md:flex flex-row justify-between mt-4 max-w-[1200px] mx-auto ">
        <h1 className="text-3xl text-lightGrey sm:hidden md:flex">
          Hamza Mahmoud
        </h1>
        <h1 className=" text-lightGrey font-special font-extrabold text-4xl  md:hidden sm:block">
          HM
        </h1>
        <ul className=" gap-4 text-lightGrey text-xl sm:hidden md:flex">
          {footerLinks.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-120}
                  to={item.section}
                  className="hover:text-white transition-all duration-500 cursor-pointer"
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <p className="max-w-[1200px] mx-auto text-right text-sm mt-2 mb-12 text-lightBrown ">
        © 2025 Hamza Mahmoud | All Rights Reserved.
      </p>
    </div>
  );
};

export default FooterMain;
