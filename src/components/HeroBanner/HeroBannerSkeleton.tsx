export default function HeroBannerSkeleton() {
  return (
    <>
      <header className="border-base-300 border-b px-12 py-6">
        <h2 className="text-4xl font-bold">Popular</h2>
      </header>
      <div
        className="p-12"
        style={{
          background: `url("data:image/svg+xml,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M%200%2020%20L%2020%200%22%20fill%3D%22none%22%20stroke%3D%22%2364748b%22%20stroke-width%3D%221%22%20stroke-opacity%3D%220.2%22%20%2F%3E%3C%2Fsvg%3E")`,
        }}
      >
        <div className="card md:card-side bg-base-100 overflow-clip lg:h-70">
          <div
            className="skeleton h-64 w-full rounded-none md:h-auto md:w-5/12"
            aria-hidden="true"
          />

          <div className="card-body flex flex-1 gap-4" aria-hidden="true">
            <div className="skeleton h-12 w-3/4" />

            <div className="flex flex-wrap gap-2">
              <div className="skeleton h-6 w-20 rounded-full" />
              <div className="skeleton h-6 w-24 rounded-full" />
            </div>

            <div className="flex flex-col gap-2">
              <div className="skeleton h-4 w-2/3" />
              <div className="skeleton h-4 w-1/2" />
            </div>

            <div className="flex flex-col gap-2">
              <div className="skeleton h-5 w-full" />
              <div className="skeleton h-5 w-11/12" />
              <div className="skeleton h-5 w-2/3" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
