import Button from "./Button"

type CardVariant = "default" | "withButton" | "withImageTop" | "withImageButton";

interface CardProps {
  title: string;
  copy: string;
  imageUrl?: string;
  buttonText?: string;
  variant: CardVariant;
}

const Card: React.FC<CardProps> = ({ title, copy, imageUrl, buttonText }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4 text-left w-350 h-400 my-8 mx-4">
      {imageUrl && <img src={imageUrl} alt="Card Image" className="w-full mb-4" />}
      <h2 className="text-28 font-semibold mb-2">{title}</h2>
      <p className="text-neutral-500 mb-4">{copy}</p>
      {buttonText && <Button size="small">{buttonText}</Button>}
    </div>
  );
};

export default Card;
