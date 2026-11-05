import Card from "./Card";

export default function CardsCaraousel() {
  const count = [];
  for (let i = 0; i < 10; i++) {
    count.push(i);
  }
  return (
    <div className="bg-base-300 p-12">
      <div className="carousel carousel-start flex w-full gap-4 rounded">
        {count.map((_, index) => {
          return (
            <div className="carousel-item flex-1" key={index}>
              <Card />
            </div>
          );
        })}
      </div>
    </div>
  );
}
