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
              <a
                href="https://github.com/NiveditaAryaK/luminary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/luminary.png" alt="Luminary project preview" />
              </a>
            </div>
            <div className="text-content">
              <h2 className="text-5xl">
                <a
                  href="https://github.com/NiveditaAryaK/luminary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Luminary
                </a>
              </h2>
              <p className="text-white-100 md:text-xl">
                Luminary is a multimodal storytelling agent built for the Gemini Live Agent Challenge. It turns a short story brief into a live cinematic experience with generated prose, illustrations, narration, branching choices, saved sessions, and resumable story worlds.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper">
                <a
                  href="https://github.com/NiveditaAryaK/agent-vault"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/images/sanctum.png" alt="Sanctum project preview" />
                </a>
              </div>
              <h2>
                <a
                  href="https://github.com/NiveditaAryaK/agent-vault"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sanctum
                </a>
              </h2>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper">
                <a
                  href="https://github.com/SangamSmilikaReddy/DFU"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/images/dfud.png" alt="DFU project preview" />
                </a>
              </div>
              <h2>
                <a
                  href="https://github.com/SangamSmilikaReddy/DFU"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Diabetic Foot Ulcer Detection
                </a>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
