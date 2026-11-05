import Card from "./Card";

export default function CardsCaraousel() {
  const count = [];
  for (let i = 0; i < 10; i++) {
    count.push(i);
  }
  return (
    <>
      <header className="border-base-300 border-b px-12 py-6">
        <h2 className="text-4xl font-bold">Offers</h2>
      </header>
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
    </>
  );
}
