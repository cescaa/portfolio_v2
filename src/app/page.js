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
import { contactData, educationData, projects } from "./data/data";
import HeroText from "./components/HeroText";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="pagePadding w-full min-h-screen">
        <HeroText text="I’m Cesca," align="left" />
        <div className="w-full min-h-fit h-64">
          <h1>
            UX Designer <span className="h1span">+</span>
          </h1>
          <h1>
            Software Developer<span className="h1span">.</span>
          </h1>
        </div>
        <div className="flex gap-40">
          <LandingList title="Education" listData={educationData} />
          <LandingList title="Find Me" listData={contactData} />
        </div>
      </div>
      <div className={`flex flex-col items-center bg-primary border-t`}>
        <div className="secondPagePadding no-scrollbar">
          <HeroText text="Projects" align="left" />
          <div className="grid w-full gap-6 grid-cols-1 sm:grid-cols-2 auto-rows-fr">
            {projects.map((item) => (
              <div
                key={item.id}
                className="p-4 border h-96 projectCard relative"
              >
                <h2>{item.title}</h2>
                <Image
                  src="/img/203shots_so.png"
                  alt="Project screenshot"
                  fill
                  style={{
                    objectFit: "contain", // fills the box, cropping overflow
                    objectPosition: "0", // which part of the image to keep
                  }}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
