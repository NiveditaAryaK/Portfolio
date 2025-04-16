import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
          <div className="image-wrapper">
            <a href="https://github.com/NiveditaAryaK/YouNg" target="_blank" rel="noopener noreferrer">
              <img src="/images/young.png" alt="Ryde App Interface" />
          </a>
          </div>
            <div className="text-content">
              <h2 className="text-5xl">
              <a href="https://github.com/NiveditaAryaK/YouNg" target="blank">YouNg</a>
              </h2>
              <p className="text-white-100 md:text-xl">
              A smart fashion app that harnesses the power of AI to analyze your wardrobe images, offering personalized style advice, detailed insights on trends, and recommendations to elevate your look.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper">
                <img
                  src="/images/cc.png"
                  alt="Library Management Platform"
                />
              </div>
              <h2>&ensp;&ensp;&ensp;&ensp;Credit Card Fraud Detection</h2>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper">
                <img src="/images/dfud.png" alt="YC Directory App" />
              </div>
              <h2>&ensp;&ensp;&ensp;&ensp;Diabetic Foot Ulcer Detection</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
