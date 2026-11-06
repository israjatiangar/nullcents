export default function GamerPowerCardSkeleton() {
  return (
    <article className="card bg-base-100 min-w-96 shadow-sm">
      <figure className="relative">
        <div className="bg-base-200 skeleton h-48 w-full"></div>
      </figure>
      <div className="card-body">
        <div className="mb-2 flex items-center gap-2">
          <div className="badge skeleton h-4 w-20"></div>
          <div className="badge skeleton h-4 w-12"></div>
        </div>
        <div className="bg-base-200 skeleton mb-3 h-4 w-3/4"></div>
        <h2 className="bg-base-200 skeleton mb-3 h-6 w-full"></h2>
        <div className="space-y-2">
          <div className="bg-base-200 skeleton h-4 w-full"></div>
          <div className="bg-base-200 skeleton h-4 w-5/6"></div>
        </div>
        <div className="bg-base-200 skeleton mt-3 h-4 w-2/5"></div>
        <div className="card-actions mt-6">
          <div className="btn btn-accent skeleton w-28"></div>
          <div className="btn btn-soft btn-primary skeleton w-36"></div>
        </div>
      </div>
    </article>
  );
}
