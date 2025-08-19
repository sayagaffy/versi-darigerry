"use client";

import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function CTASection() {
  const { ref: sectionRef, isVisible: sectionVisible } =
    useScrollAnimation<HTMLDivElement>(0.1);
  const { ref: buttonsRef, isVisible: buttonsVisible } =
    useScrollAnimation<HTMLDivElement>(0.3);

  return (
    <section
      ref={sectionRef}
      className={`px-6 py-20 animate-on-scroll-scale ${sectionVisible ? "animate-visible" : ""}`}
    >
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-6 font-bold text-white text-4xl">
          Ready to Transform Your Communication?
        </h2>
        <p className="mb-8 text-purple-200 text-xl">
          Join thousands of users who have already discovered the power of
          AI-driven communication
        </p>
        <div
          ref={buttonsRef}
          className={`flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll ${buttonsVisible ? "animate-visible" : ""}`}
        >
          <button
            className="px-8 py-4 rounded-full font-semibold text-white text-lg hover:scale-105 transition-all transform"
            style={{ backgroundColor: "#6A2FF7" }}
            onMouseEnter={(e) =>
              ((e.target as HTMLButtonElement).style.backgroundColor =
                "#5A1FE7")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLButtonElement).style.backgroundColor =
                "#6A2FF7")
            }
          >
            Schedule Demo
          </button>
          <button
            className="px-8 py-4 rounded-full font-semibold text-black text-lg transition-all"
            style={{ backgroundColor: "#ffffff" }}
            onMouseEnter={(e) =>
              ((e.target as HTMLButtonElement).style.backgroundColor =
                "#f0f0f0")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLButtonElement).style.backgroundColor =
                "#ffffff")
            }
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
