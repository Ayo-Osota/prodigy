import Image from "next/image";

interface Props {
  authorName: string;
  companyName: string;
  jobTitle: string;
  quoteText: string;
  photoUrl: string;
}

const TestimonialCard = ({
  authorName,
  companyName,
  jobTitle,
  quoteText,
  photoUrl,
}: Props) => {
  return (
    <div>
     <p>{quoteText}</p> 

     <div>
        <Image src={photoUrl} alt={authorName} width={56} height={56}/>
     </div>
      {authorName}
      {companyName}
      {jobTitle}
      {photoUrl}
    </div>
  );
};

export default TestimonialCard;
