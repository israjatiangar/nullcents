export default function HeroBannerSkeleton() {
  return (
    <div className="hero rounded-selector from-bg-base-50 min-h-[80dvh] bg-linear-0 to-black shadow-2xl">
      <div className="hero-content w-full place-content-start place-items-end place-self-end">
        <div className="flex w-6/12 flex-1 flex-col gap-2">
          <header>
            <h1 className="skeleton line-clamp-2 h-14 w-full py-2 text-5xl">
              &nbsp;
            </h1>
          </header>
          <div className="mb-2 flex flex-col gap-2">
            <div className="flex gap-2">
              <span className="badge skeleton h-4 w-16"></span>
              <span className="badge skeleton h-4 w-16"></span>
              <span className="badge skeleton h-4 w-16"></span>
            </div>
            <span className="badge badge-sm skeleton h-4 w-36"></span>
            <p className="skeleton line-clamp-3 h-16 w-full"></p>
          </div>
          <div className="flex gap-2">
            <a className="btn skeleton w-28"></a>
            <a className="btn skeleton w-28"></a>
          </div>
        </div>
      </div>
    </div>
  );
}
