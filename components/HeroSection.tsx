import { stacks } from "@/data";
import { useEffect, useRef, useState } from "react";

const HeroSection = () => {
  const imageContainer = useRef(null);
  const [radiusLength, setRadiusLength] = useState<number>(0);
  const [rotationPos, setRotationPos] = useState<number>(0);
  const [screenWidth, setScreenWidth] = useState<number>(0);
  const [top, setTop] = useState<string>("0");
  const [left, setLeft] = useState<string>("0");
  const [index, setIndex] = useState<number>(2);

  const sectionDeg = 360 / (stacks.length);

  const radianSectionDeg = (sectionDeg * Math.PI * 1) / 360;

  const calculateTopAndLeft = (i: number, screenWidth: number) => {
    let calculatedTop = "0";
    let calculatedLeft = "0";

    if (screenWidth <= 768) {
      calculatedTop =
        radiusLength * Math.sin(radianSectionDeg * -(i + rotationPos)) +
        100 +
        "px";
      calculatedLeft =
        radiusLength * Math.cos(radianSectionDeg * -(i + rotationPos)) +
        0 +
        "px";
    } else {
      calculatedTop =
        radiusLength * Math.sin(radianSectionDeg * -(i + rotationPos)) +
        300 +
        "px";
      calculatedLeft =
        radiusLength * Math.cos(radianSectionDeg * -(i + rotationPos)) -
        0 +
        "px";
    }

    return { calculatedTop, calculatedLeft };
  };

  useEffect(() => {
    const handleResize = () => {
      const newScreenWidth = window.innerWidth;
      setScreenWidth(newScreenWidth);
      if (newScreenWidth <= 768) {
        setRadiusLength(100);
      } else {
        setRadiusLength(300);
      }
      const { calculatedTop, calculatedLeft } = calculateTopAndLeft(
        index,
        screenWidth
      );
      setTop(`${calculatedTop}px`);
      setLeft(`${calculatedLeft}px`);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    let autoSlide = setInterval(() => {
      slide(-1);
    }, 1000);
    return () => {
      clearInterval(autoSlide);
    };
  }, [index]);

  const slide = (n: number) => {
    setIndex(n + index);

    setRotationPos(-(n + index - 2));
  };

  return (
    <section className="container mt-4 grid grid-flow-col grid-cols-6 grid-rows-1 h-[200px] md:h-[590px]">
      <div className="col-span-5 col-start-1 col-end-6 row-start-1 mt-15 md:mt-32">
        <h1 className="text-neutral-200 text-2xl xs:text-4xl md:text-5xl xl:text-7.5xl font-bold max-w-full">
          User-centered design isn&apos;t just a{" "}
          <span className="text-primary">buzzword</span>{" "}
        </h1>
        <p className="text-white/40 text-lg xs:text-xl md:text-3xl xl:text-5.5xl font-bold max-w-full mt-4 md:mt-10">
          it&apos;s the key to creating products that truly resonate with your
          audience.
        </p>
      </div>

      <div className="blur w-full md:w-52 h-60 col-start-4 col-span-2 row-start-1 mt-15 md:mt-32"></div>

      <ul
        ref={imageContainer}
        className="col-span-3 col-start-7 col-end-5 md:col-end-4 row-start-1 flex justify-self-end relative w-full overflow-hidden max-w-md min-w-[136px]"
      >
        {stacks.map((stack, i) => {
          const { calculatedTop, calculatedLeft } = calculateTopAndLeft(i, screenWidth);
          const style = {
              top: `${calculatedTop}`,
              left: `${calculatedLeft}`,
          };
          return (
            <li style={style} className="absolute transition-all duration-1000" key={stack.id}>
              <stack.icon />
            </li>
          );
        })}
        {stacks.map((stack, i) => {
          const { calculatedTop, calculatedLeft } = calculateTopAndLeft(i + 4, screenWidth);
          const style = {
              top: `${calculatedTop}`,
              left: `${calculatedLeft}`,
          };
          return (
            <li style={style} className="absolute transition-all duration-1000" key={stack.id}>
              <stack.icon />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default HeroSection;
