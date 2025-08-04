import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial
        link="https://www.linkedin.com/in/hamza-mahmoud-10a395327/"
        Icon={FaLinkedinIn}
      />
      <SingleContactSocial
        link="https://github.com/hamzamahmoudaboalhamd"
        Icon={FiGithub}
      />
      <SingleContactSocial
        link="https://www.facebook.com/profile.php?id=61569741665253"
        Icon={FaFacebookF}
      />
    </div>
  );
};

export default ContactSocial;
