import Image from "next/image";

export default function Home() {
  return (
    <div className="flex w-screen pb-16">
      <div className="w-full fixed font-primary text-secondary font-light">
        <ul className="flex gap-12 px-4 pt-4">
          <li className="text-2xl border border-primary p-2 px-8 text-foreground bg-primary font-normal rounded-full">
            About Me
          </li>
          <li className="text-2xl border border-primary p-2 px-8 rounded-full bg-background shadow">
            Projects
          </li>
          <li className="text-2xl border border-primary p-2 px-8 rounded-full bg-background shadow">
            Resume
          </li>
        </ul>
      </div>
      <div className="min-w-[90vw] px-8 pt-32">
        <svg viewBox="18 0 1250 160" className="w-full h-auto">
          <text x="0" y="120" className="heroText">
            I’m Cesca,
          </text>
        </svg>
        <h1>
          UX Designer <span className="h1span">+</span>
        </h1>
        <h1>
          Software Developer<span className="h1span">.</span>
        </h1>
        <h2 className="mt-32">Education</h2>
        <ul className="space-y-2">
          <li className="text-2xl font-secondary">
            Computer Programming & Analysis — Seneca College
          </li>
          <li className="text-2xl font-secondary">
            Interaction Design (Honours) — Sheridan College
          </li>
        </ul>
      </div>
      <div className="w-screen h-full min-h-screen bg-primary shadow-2xl relative">
        <button className="rotate-90 absolute bottom-[20%] -left-35 bg-primary px-8 py-2 rounded-b-2xl shadow-2xl">
          <h2 className="text-foreground text-2xl rotate-180">Projects</h2>
        </button>
        add
      </div>
    </div>
  );
}
