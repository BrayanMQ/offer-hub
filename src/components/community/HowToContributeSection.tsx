import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/community/SectionHeading";

const contributionSteps = [
  "Read the contribution guide and code of conduct.",
  "Pick an issue tagged good-first-issue or help-wanted.",
  "Discuss approach quickly in an issue or discussion thread.",
  "Open your PR with tests, screenshots, and clear scope.",
];

export const HowToContributeSection = () => {
  return (
    <section id="how-to-contribute" className="py-24 bg-transparent">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="How to Contribute"
          title="A quick path from first issue to first merge"
          subtitle="Everything you need to go from first issue to first merge."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {contributionSteps.map((step) => (
            <article
              key={step}
              className="rounded-2xl bg-bg-elevated p-6 shadow-neu-raised"
            >
              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="mt-1 text-theme-primary flex-shrink-0" />
                <p className="text-base font-light leading-relaxed text-content-primary">
                  {step}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};


