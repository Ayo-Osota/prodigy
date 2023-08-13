import { navLinks } from "@/data";

type ILink = {
  id: string;
  text: string;
  path: string;
};

const Topnav = () => {
  return (
    <header className="container flex items-center justify-between py-6 md:py-10">
      <h3 className="text-sm font-bold">PRODIGY</h3>
      <nav>
        <ul className="hidden md:flex gap-16">
          {navLinks.map((link: ILink) => {
            const { id, text, path } = link;
            return (
              <li key={id}>
                <a href={path} className="text-base font-bold px-3 py-1">{text}</a>
              </li>
            );
          })}
        </ul>
      </nav>
      <a href="#" className="bg-primary text-secondary rounded-2.5xl px-14 py-2">Resume</a>
    </header>
  );
};

export default Topnav;
