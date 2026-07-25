import { Star, GitFork, Eye, AlertCircle } from "lucide-react";

interface RepoStatsProps {
     stars?: number;
     forks?: number;
     watchers?: number;
     openIssues?: number;
}

export function RepoStats({
     stars,
     forks,
     watchers,
     openIssues,
}: RepoStatsProps) {
     const isUnavailable =
          [stars, forks, watchers, openIssues].some((value) => value === undefined);

     if (isUnavailable) {
          return (
               <div
                    className="rounded-2xl p-6 shadow-raised"
                    style={{ background: "#F1F3F7" }}
               >
                    <p className="text-sm font-semibold" style={{ color: "#19213D" }}>
                         Stats temporarily unavailable
                    </p>
                    <p className="mt-2 text-xs" style={{ color: "#6D758F" }}>
                         Live GitHub repository metrics could not be loaded right now.
                    </p>
               </div>
          );
     }

     const stats = [
          {
               icon: Star,
               value: stars!,
               label: "Stars",
          },
          {
               icon: GitFork,
               value: forks!,
               label: "Forks",
          },
          {
               icon: Eye,
               value: watchers!,
               label: "Watchers",
          },
          {
               icon: AlertCircle,
               value: openIssues!,
               label: "Open Issues",
          },
     ];

     return (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
               {stats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                         <div
                              key={stat.label}
                              className="flex flex-col items-center text-center p-6 rounded-2xl shadow-raised"
                              style={{ background: "#F1F3F7" }}
                         >
                              <Icon size={20} style={{ color: "#149A9B" }} />
                              <span
                                   className="text-3xl font-black tracking-tight mt-3"
                                   style={{ color: "#149A9B" }}
                              >
                                   {stat.value.toLocaleString()}
                              </span>
                              <span
                                   className="text-sm uppercase tracking-widest mt-2"
                                   style={{ color: "#6D758F" }}
                              >
                                   {stat.label}
                              </span>
                         </div>
                    );
               })}
          </div>
     );
}
