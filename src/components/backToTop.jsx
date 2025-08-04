import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa6";

function backToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={handleClick}
          className="fixed bottom-10 right-4 bg-orange-500 text-white px-4 py-4 bg-orange rounded-full shadow  hover:bg-orange-600 hover:bg-brown hover:text-cyan transition-all duration-600 ease"
        >
          <FaArrowUp className="text-2xl" />
        </button>
      )}
    </>
  );
}

export default backToTop;
