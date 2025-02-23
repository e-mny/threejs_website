import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";
import { useEffect, useState } from "react";
import { Avatar } from "./Avatar";
import HeroText from "./HeroText";

const Hero = () => {
  const animation = "StopWalking";
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);

    return () => {
      window.removeEventListener("resize", handleVideoSrcSet);
    };
  }, []);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useGSAP(() => {
    gsap.to("#hero", { opacity: 1, delay: 2 });
    gsap.to("#avatar", { opacity: 1, y: -20, delay: 2 });
  }, []);

  return (
    <section className="w-full nav-height bg-black relative items-center justify-center flex">
      <div className="grid grid-cols-1 md:grid-cols-2 h-full w-full px-8 md:px-16 gap-8 items-center">
        {/* Left Side: Text */}
        <div className="h-full flex justify-center items-center">
          <div
            id="hero"
            className="hero-title text-white text-4xl md:text-6xl font-bold opacity-0 w-full md:w-1/2"
          >
            <HeroText />
          </div>
        </div>

        {/* Right Side: Avatar */}
        <div
          id="avatar"
          className="flex items-center justify-center opacity-0 translate-y-20 h-5/6"
        >
          <Avatar
            animation={animation}
            mouseX={mousePosition.x}
            mouseY={mousePosition.y}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
