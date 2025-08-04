import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4 sm:text-sm">
      <SingleInfo
        text="aboaihamdhamzamahmoud123@gmail.com"
        Image={HiOutlineMail}
      />
      <SingleInfo text="+20 1127864364" Image={FiPhone} />
      <SingleInfo text="Sohag, Egypt" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
