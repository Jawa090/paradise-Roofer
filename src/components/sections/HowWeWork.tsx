import { useState } from "react";
import { MessageSquare, Search, ListChecks, Hammer } from "lucide-react";

const steps = [
  {
    id: 1,
    label: "Step 1",
    icon: MessageSquare,
    title: "Tell Us What's Up (Or What's Leaking)",
    description: "You reach out — we listen. Whether it's a drip in the attic or a full roof redo, we start with a quick call or visit to understand your needs.",
  },
  {
    id: 2,
    label: "Step 2",
    icon: Search,
    title: "We Inspect & Assess",
    description: "Our team comes out to take a close look at your roof. We identify the problem, check for hidden damage, and give you an honest assessment.",
  },
  {
    id: 3,
    label: "Step 3",
    icon: ListChecks,
    title: "Get Your Custom Plan & Quote",
    description: "No cookie-cutter solutions here. We create a tailored plan with transparent pricing — no surprises, no hidden fees.",
  },
  {
    id: 4,
    label: "Step 4",
    icon: Hammer,
    title: "We Get to Work (You Relax)",
    description: "Our crew handles everything from start to finish. We work fast, clean up after ourselves, and leave you with a roof you can count on.",
  },
];

export default function HowWeWork() {
  const [activeStep, setActiveStep] = useState(1);
  const currentStep = steps.find((s) => s.id === activeStep) || steps[0];

  return (
    <section className="py-20 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          {/* Label with orange lines */}
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[2px] w-12" style={{ backgroundColor: 'rgb(255, 131, 59)' }}></div>
            <p className="text-sm font-semibold uppercase tracking-wider">How we work</p>
            <div className="h-[2px] w-12" style={{ backgroundColor: 'rgb(255, 131, 59)' }}></div>
          </div>
          {/* H2 */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading">
            Here's how we make roofing Easy-Peasy
          </h2>
        </div>

        {/* Steps Tabs */}
        <div className="flex flex-wrap gap-3 mb-6">
          {steps.map((step) => {
            const Icon = step.icon;
            const isActive = activeStep === step.id;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full font-semibold uppercase text-sm tracking-wide transition-all ${
                  isActive
                    ? "text-foreground"
                    : "text-foreground hover:opacity-80"
                }`}
                style={{
                  backgroundColor: isActive ? 'rgb(255, 131, 59)' : 'rgb(245, 245, 245)',
                }}
              >
                <Icon className="w-5 h-5" fill="currentColor" />
                <span>{step.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content Panel */}
        <div 
          className="p-8 md:p-12 rounded-2xl"
          style={{ backgroundColor: 'rgb(245, 245, 245)' }}
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 
              className="text-xl md:text-2xl font-bold font-heading mb-4"
              style={{ color: 'rgb(0, 0, 0)' }}
            >
              {currentStep.title}
            </h3>
            <p 
              className="text-sm md:text-base leading-relaxed"
              style={{ color: 'rgb(0, 0, 0)' }}
            >
              {currentStep.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
