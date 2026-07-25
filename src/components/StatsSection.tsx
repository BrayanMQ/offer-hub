const stats = [
  { value: "10K+", label: "Active Merchants" },
  { value: "$50M+", label: "Volume Processed" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "50+", label: "Countries" },
];

export function StatsSection() {
  return (
    <section className="relative py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="relative z-10 flex flex-col items-center text-center p-8 rounded-2xl bg-bg-elevated shadow-neu-raised transition-shadow duration-300 hover:shadow-neu-raised-hover"
            >
              <span className="text-5xl font-black tracking-tight text-theme-primary">
                {stat.value}
              </span>
              <span className="text-sm font-medium mt-3 uppercase tracking-widest text-content-secondary">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
