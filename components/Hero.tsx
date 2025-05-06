import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { useCallback } from "react";
import { Particles } from "@tsparticles/react";
import { type Container, type Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const Hero = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    // This adds the bundle to tsParticles
    // Using loadFull to load all tsParticles features
    try {
      await loadSlim(engine);
    } catch (error) {
      console.error("Error initializing tsParticles:", error);
    }
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      console.log(container);
    },
    []
  );

  return (
    <div className="pb-20 pt-36 relative">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: { enable: true, mode: "push" },
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: {
              push: { quantity: 4 },
              repulse: { distance: 200, duration: 0.4 },
            },
          },
          particles: {
            color: { value: "#ffffff" },
            collisions: { enable: true },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: {
                enable: false,
              },
              speed: 2,
              straight: false,
            },
            number: {
              density: { enable: true, area: 800 },
              value: 30,
            },
            opacity: { value: 0.6 },
            shape: { type: "circle" },
            size: {
              value: 3,
              random: {
                enable: true,
              },
            },
          },
          detectRetina: true,
        }}
        className="absolute top-0 left-0 w-full h-full z-0"
      />

      {/* Your existing Spotlight and content */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center gap-4">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Developer / Designer / Editor
          </p>

          <TextGenerateEffect
            words="Hey There ! I'm Shashank Jha"
            className="text-center font-bold text-[40px] md:text-5xl lg:text-6xl leading-[3]"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-base lg:text-lg text-gray-300 mt-2.5">
            A Next.js Developer based in Delhi.
          </p>

          <a href="#about">
            <MagicButton
              title="Download Resume"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
