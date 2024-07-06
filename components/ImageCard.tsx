import { TransitionLink } from "./TransitionLink";

interface CardProps {
  image: string;
  title: string;
  description: string;
}

const ImageCard: React.FC<CardProps> = ({ image, title, description }) => {
  return (
    <TransitionLink href={`/detail/${title}`}>
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white dark:bg-gray-800">
        <img className="w-full" src={image} alt={title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-gray-900 dark:text-gray-100">
            {title}
          </div>
          <p className="text-gray-700 dark:text-gray-300 text-base">
            {description}
          </p>
        </div>
      </div>
    </TransitionLink>
  );
};

export default ImageCard;
