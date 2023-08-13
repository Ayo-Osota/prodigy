const HeroSection = () => {
  return (
    <section className="container mt-4">
      <div className="sm:w-3/4">
        <h1 className="text-neutral-200 text-4xl md:text-5xl xl:text-7.5xl font-bold max-w-full">
          User-centered design isn&apos;t just a{" "}
          <span className="text-primary">buzzword</span>{" "}
        </h1>
        <p className="text-white/40 text-xl md:text-3xl xl:text-5.5xl font-bold max-w-full">
          it&apos;s the key to creating products that truly resonate with your
          audience.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
