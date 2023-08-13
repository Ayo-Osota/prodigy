import Image from "next/image";
import ctaImg from "../public/assets/prodigy.png";

const Cta = () => {
  return (
    <section className="even-columns items-center container mt-20 md:mt-52">
      <Image src={ctaImg} alt="Promise" />
      <div>
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          Hey there! Meet{" "}
          <span className="text-primary">Orimadegun Promise</span>
        </h2>
        <p className="text-white/80 text-base md:text-2.5xl mt-4 md:mt-7">
          As a young and creative product designer, I design solutions that meet
          both user needs and business goals. My approach involves deep
          understanding of users, collaboration with cross-functional teams, and
          emphasis on user-friendly products that add value and drive growth.
        </p>
        <a href="#" className="inline-flex bg-neutral-800 rounded-2.5xl mt-4 md:mt-7 py-4 px-16 text-sm">Hire me for your next project</a>
      </div>
    </section>
  );
};

export default Cta;
