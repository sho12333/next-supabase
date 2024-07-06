import Card from "@/components/ImageCard";

const cardsData = [
  {
    image: "https://via.placeholder.com/300x200",
    title: "1",
    description: "This is the description for card 1.",
  },
  {
    image: "https://via.placeholder.com/300x200",
    title: "2",
    description: "This is the description for card 2.",
  },
  {
    image: "https://via.placeholder.com/300x200",
    title: "3",
    description: "This is the description for card 3.",
  },
  {
    image: "https://via.placeholder.com/300x200",
    title: "4",
    description: "This is the description for card 4.",
  },
];

const CardsPage: React.FC = () => {
  return (
    <div className="mx-auto">
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default CardsPage;
