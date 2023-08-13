import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

interface Props {
  name: string;
  description: string;
  link: string;
  imagePath: string;
}

const PortfolioCard = ({ name, description, link, imagePath }: Props) => {
  return (
    <a target="_blank" href={link} className="inline-flex p-2">
      <div className="bg-neutral-800 rounded-2xl">
        <div>
          <Image src={imagePath} alt={name} width={620} height={444} />
        </div>
        <footer className="flex h-36 py-3 px-5">
          <article>
            <h4 className="text-neutral-200 leading-none md:leading-none text-base md:text-lg font-bold">
              {name}
            </h4>
            <p className="text-neutral-200 text-sm mt-2">{description}</p>
          </article>
          <FiArrowUpRight className="text-neutral-200 shrink-0 mt-4" />
        </footer>
      </div>
    </a>
  );
};

export default PortfolioCard;
