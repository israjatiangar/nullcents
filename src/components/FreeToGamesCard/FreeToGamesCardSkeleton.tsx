export default function FreeToGamesCardSkeleton() {
  return (
    <div
      className="card sm:card-side bg-base-200 overflow-clip outline-1 outline-transparent"
      aria-busy="true"
      aria-label="Loading game"
    >
      {/* Thumbnail */}
      <figure className="aspect-365/206 h-fit max-w-full overflow-clip sm:aspect-square md:w-1/2">
        <div className="skeleton h-full w-full rounded-none" />
      </figure>

      <div className="card-body">
        {/* Title */}
        <div className="skeleton h-7 w-3/4" />

        {/* Platform badges */}
        <div className="flex gap-2">
          <div className="skeleton h-5 w-16 rounded-full" />
          <div className="skeleton h-5 w-20 rounded-full" />
        </div>

        {/* Publisher / developer */}
        <div className="space-y-2">
          <div className="skeleton h-3 w-2/3" />
          <div className="skeleton h-3 w-1/2" />
        </div>

        {/* Short description (line-clamp-4) */}
        <div className="space-y-2">
          <div className="skeleton h-4 w-full" />
          <div className="skeleton h-4 w-full" />
          <div className="skeleton h-4 w-5/6" />
          <div className="skeleton h-4 w-2/3" />
        </div>

        {/* Actions */}
        <div className="card-actions sm:justify-end">
          <div className="skeleton rounded-field h-10 w-24" />
          <div className="skeleton rounded-field h-10 w-28" />
        </div>
      </div>
    </div>
  );
}
