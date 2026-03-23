"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnglesUp,
  faArrowRight,
  faArrowRightLong,
  faCode,
  faCross,
  faLayerGroup,
  faPalette,
  faUser,
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

        <div className="flex">
          <div className="w-3/5">
            <div className="w-full min-h-fit h-56">
              <h1>
                UX Designer <span className="h1span">+</span>
              </h1>
              <h1>
                Full-Stack Developer<span className="h1span">.</span>
              </h1>
            </div>
            <div className="flex flex-col">
              <h2 className="font-bold">MY PHILOSOPHY</h2>
              <h3 className="max-w-200">
                Formally trained in Interaction Design and Computer Programming,
                I combine art, code, and research to create meaningful
                solutions.
              </h3>
              <LandingList title="Find Me" listData={contactData} />
            </div>
          </div>
          <div className="w-2/5 flex-1 flex items-center">
            <div className="relative h-96 w-full flex items-center justify-center">
              <Image
                src="/img/cesca_logo.png"
                alt="Project screenshot"
                fill
                quality={100}
                style={{
                  objectFit: "contain",
                }}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="secondPagePadding w-full min-h-screen bg-background">
        <HeroText text="Projects" align="left" />

        <div className="w-full pb-8 font-primary font-light z-50">
          <ul className="flex gap-4 justify-center">
            {["All", "Design + Dev", "Design Only"].map((item, i) => {
              return (
                <li
                  key={i}
                  className={`text-xl border p-2 px-8 rounded-full shadow border-accent text-foreground bg-accent cursor-pointer`}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="grid gap-4 w-full justify-center grid-cols-[repeat(auto-fit,minmax(500px,1fr))]">
          {projects.map((item) => (
            <div
              key={item.id}
              className="relative projectCard flex flex-col items-center gap-4 p-8 pt-8 py-16  border border-accent hover:bg-secondary cursor-pointer"
            >
              <div>
                <h2>{item.title}</h2>
                <h3 className="mb-0 text-center">{item.subtitle}</h3>
              </div>
              <div className="border-b-5 w-2/4 border-tertiary mb-4"></div>
              <div className="flex flex-col gap-1 w-full">
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="text-accent text-2xl"
                  />
                  <p>{item.role.join(" & ")}</p>
                </div>

                <div className="flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faLayerGroup}
                    className="text-accent text-2xl"
                  />
                  <p>{item.tech.join(", ")}</p>
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faPalette}
                    className="text-accent text-2xl"
                  />
                  <p>{item.tags.join(", ")}</p>
                </div>
              </div>
              <p>{item.description}</p>
              <div className="relative h-64 w-full">
                <Image
                  src="/img/i1.png"
                  alt="Project screenshot"
                  fill
                  quality={100}
                  style={{
                    objectFit: "contain",
                  }}
                  className="w-full"
                />
              </div>
              <div className="absolute bottom-4 right-4 flex gap-2 text-primary border border-primary py-1 px-4 rounded-full shadow">
                <FontAwesomeIcon
                  icon={faArrowRightLong}
                  className="text-secondary text-3xl"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      \{" "}
    </div>
  );
}
