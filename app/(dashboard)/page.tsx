export default function DashboardPage() {
  return (
    <div>

      <div className="mb-8">

        <h2 className="text-3xl font-bold text-slate-800">
          Dashboard
        </h2>

        <p className="mt-2 text-slate-500">
  Overview of today&apos;s activities.
</p>

      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h3 className="text-sm text-slate-500">
            Employees
          </h3>

          <p className="mt-3 text-4xl font-bold">
            20
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h3 className="text-sm text-slate-500">
            Present
          </h3>

          <p className="mt-3 text-4xl font-bold text-green-600">
            18
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h3 className="text-sm text-slate-500">
            On Leave
          </h3>

          <p className="mt-3 text-4xl font-bold text-amber-500">
            1
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h3 className="text-sm text-slate-500">
            Late
          </h3>

          <p className="mt-3 text-4xl font-bold text-red-500">
            1
          </p>
        </div>

      </div>

    </div>
  );
}