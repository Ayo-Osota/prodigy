import { socialMedia } from "@/data";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  
  return (
    <section id="contact" className="pb-12 md:pb-20 scroll-mt-10">
      <div className="container container-tight even-columns items-center mt-10 md:mt-30">
        <div>
          <ul className="flex flex-col gap-7 md:gap-20">
            {socialMedia.map((medium) => {
              const { id, name, link } = medium;
              return (
                <li key={id} className="social">
                  <a href={link}>
                    <h1 className="text-4xl lg:text-8xl font-bold">
                      {name}
                    </h1>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <ContactForm />
      </div>
      <footer className="container mt-8 md:mt-20">
        <a
          href="mailto:orimadegunAdebanjo@gmail.com"
          className="text-right float-right"
        >
          OrimadegunAdebanjo@gmail.com
        </a>
      </footer>
    </section>
  );
};

export default ContactSection;
