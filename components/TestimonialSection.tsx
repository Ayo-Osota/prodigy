import { testimonies } from "@/data";
import TestimonialCard from "./TestimonialCard";

const TestimonialSection = () => {
  return (
    <section className="container mt-10 md:mt-30 scroll-mt-10">
      <h2 className="text-3xl md:text-5xl font-bold text-center max-w-[38ch] mx-auto">
        What Others Are <span className="text-primary">Saying</span> About My
        Work
      </h2>
      <ul className="mt-4 md:mt-10 flex">
        {testimonies.map((testimony) => {
            return (
                <li key={testimony.id}><TestimonialCard {...testimony} /></li>
            )
        })}
      </ul>
    </section>
  );
};

export default TestimonialSection;
