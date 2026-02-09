"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnglesUp,
  faArrowRight,
  faCross,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

import LandingList from "./components/LandingList";
import { educationData, projects } from "./data/data";
import HeroText from "./components/HeroText";

export default function Home() {
  const [showProjects, setShowProjects] = useState(false);

  return (
    <div className="pagePadding flex w-screen">
      <div className="w-full">
        <HeroText text="I’m Cesca," align="left" />
        <div className="w-full min-h-fit h-1/2">
          <h1>
            UX Designer <span className="h1span">+</span>
          </h1>
          <h1>
            Software Developer<span className="h1span">.</span>
          </h1>
        </div>
        <LandingList title="Education" listData={educationData} />
      </div>
      <div
        className={`fixed top-0 left-[10%] flex flex-col items-center w-[90%] bg-primary shadow-2xl
    transition-transform duration-400 ease-in-out
    ${showProjects ? "translate-x-0" : "translate-x-[90%]"}
  `}
      >
        <button
          onClick={() => setShowProjects((prev) => !prev)}
          className="rotate-90 absolute bottom-[20%] -left-37 bg-primary px-8 py-2 rounded-b-2xl"
        >
          <h2 className="text-foreground text-2xl rotate-180 flex items-center justify-center gap-2 w-48 cursor-pointer">
            {showProjects ? (
              <>
                Close
                <FontAwesomeIcon
                  icon={faCircleXmark}
                  className="text-3xl ml-1 text-accent"
                />
              </>
            ) : (
              <>
                Projects
                <FontAwesomeIcon
                  icon={faAnglesUp}
                  className="text-3xl ml-1 text-accent"
                />
              </>
            )}
          </h2>
        </button>

        <div className="pagePadding h-screen overflow-y-auto no-scrollbar">
          <HeroText text="Projects" align="center" />
          <div className="grid w-full gap-6 grid-cols-1 sm:grid-cols-2 auto-rows-fr">
            {projects.map((item) => (
              <div key={item.id} className="p-4 border h-96 projectCard">
                <h2>{item.title}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
