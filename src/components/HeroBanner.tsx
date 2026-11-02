const data = [
  {
    id: 3842,
    title: "Highway Driving (Epic Games) Giveaway",
    worth: "$9.99",
    thumbnail: "https://www.gamerpower.com/offers/1/6ae7cab593610.jpg",
    image: "https://www.gamerpower.com/offers/1b/6ae7cab593610.jpg",
    description:
      "Score Highway Driving for free on Epic Games Store. Highway Driving is 3D racing game with casual gameplay.",
    instructions:
      "1. Click the button to visit the giveaway page.\r\n2. Log in to your Epic Games Store account.\r\n3. Click the button to add the game to your library",
    open_giveaway_url:
      "https://www.gamerpower.com/open/highway-driving-epic-games-giveaway",
    published_date: "2026-11-01 18:26:45",
    type: "Game",
    platforms: "PC, Epic Games Store",
    end_date: "2026-11-08 23:59:00",
    users: 2400,
    status: "Active",
    gamerpower_url:
      "https://www.gamerpower.com/highway-driving-epic-games-giveaway",
    open_giveaway:
      "https://www.gamerpower.com/open/highway-driving-epic-games-giveaway",
  },
];
export default function HeroBanner() {
  return (
    <section
      className="min-h-fit"
      style={{
        backgroundImage: `url(${data[0].image})`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `cover`,
      }}
    >
      <div className="hero from-base-100/80 to-base-100 min-h-[75vh] bg-linear-to-b from-0%">
        <div className="hero-content h-full w-full flex-col lg:flex-row">
          <img
            alt="Tailwind CSS hero component"
            src={data[0].thumbnail}
            className="max-w-sm shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{data[0].title}</h1>
            <p className="py-6">{data[0].description}</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
}
