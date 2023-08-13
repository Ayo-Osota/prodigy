import { projects } from "@/data";
import PortfolioCard from "./PortfolioCard";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { FiChevronLeft } from "react-icons/fi";

const indicators = () => (
  <button
    type="button"
    title="indicator"
    className="indicator hidden sm:inline-flex w-2 md:w-4 aspect-square border border-primary rounded-full transition-all ml-1 md:ml-2 first:ml-0 mt-6"
  ></button>
);

const responsiveSettings = [
  {
    breakpoint: 1280,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 4,
    },
  },
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
    },
  },
  {
    breakpoint: 640,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      canSwipe: true
    },
  },
];

const properties = {
  prevArrow: (
    <button
      title="Previous slide"
      type="button"
      className="arrow w-8 md:w-[4.5rem] hidden sm:inline-flex"
    >
      <FiChevronLeft className="chevron text-2xl" />
    </button>
  ),

  nextArrow: (
    <button
      title="Next slide"
      type="button"
      className="arrow w-8 md:w-[4.5rem] rotate-180 hidden sm:inline-flex"
    >
      <FiChevronLeft className="chevron text-2xl" />
    </button>
  ),
};

const PortfolioSetion = () => {
  return (
    <section id="portfolio" className="container mt-10 md:mt-30 scroll-mt-10">
      <h2 className="text-3xl md:text-5xl font-bold text-center max-w-[30ch] mx-auto">
        Explore the world of my <span className="text-primary">portfolio</span>
      </h2>
      <div className="w-full mt-8 md:mt-20">
        <Slide
          {...properties}
          autoplay={false}
          indicators={projects.length < 2 ? indicators : false}
          infinite={false}
          responsive={responsiveSettings}
          slidesToScroll={0}
          slidesToShow={1}
          arrows={projects.length < 2}
          canSwipe={false}
          cssClass="flex gap-4"
        >
          {projects.map((project) => {
            const { id } = project;
            return (
              <div key={id}>
                <PortfolioCard {...project}  />
              </div>
            );
          })}
        </Slide>
      </div>
    </section>
  );
};

export default PortfolioSetion;
