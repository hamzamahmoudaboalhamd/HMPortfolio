import { useState, useEffect } from "react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const toggleVisibility = () => {
    const scrollPosition =
      window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const maxScroll = documentHeight - windowHeight;

    const progress = (scrollPosition / maxScroll) * 100;
    setScrollProgress(Math.min(progress, 100));

    if (scrollPosition > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    const scrollStep = () => {
      const currentPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      if (currentPosition > 0) {
        window.requestAnimationFrame(scrollStep);
        window.scrollTo(0, currentPosition - currentPosition / 20);
      }
    };
    scrollStep();
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white p-4 rounded-full shadow-lg transform transition-all duration-200 ease-out hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50 active:scale-85"
          aria-label="Back to top"
          title="Back to top"
          style={{
            animation: isVisible
              ? "fadeInUp 0.3s ease-out, smoothBounce 1.5s ease-in-out infinite 0.3s"
              : "none",
          }}
        >
          <svg
            className="w-6 h-6 transform transition-transform duration-200 ease-out hover:translate-y-[-3px] hover:scale-110"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </>
  );
};

export default BackToTop;
