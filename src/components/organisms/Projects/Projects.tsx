import DefaultProject from "@assets/default-project.jpeg";
import IconProject from "@assets/icon-projects.svg";
import { Image } from "atoms/Image";
import { Link } from "atoms/Link";
import { TitleSection } from "molecules/TitleSection";
import React from "react";
import { BiLinkExternal } from "react-icons/bi";

import type { ProjectsProps } from "./types";

export const Projects = ({ projects }: ProjectsProps) => {
  return (
    <TitleSection
      className="p-2 lg:px-20"
      title="Projetos"
      src={IconProject}
      alt=""
    >
      <ul className="grid auto-rows-auto grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] items-center justify-items-center gap-8 md:grid-cols-[repeat(auto-fill,_minmax(450px,_1fr))]">
        {projects.map(({ name, description, link, type, img }) => (
          <li className="h-full w-full" key={name}>
            <Link className="h-full w-full" href={link}>
              <section className="relative flex h-full w-full flex-row items-center gap-2 overflow-hidden rounded shadow-lg">
                <Image
                  className="hidden aspect-square h-full w-auto object-cover md:block"
                  src={img.src ?? DefaultProject}
                  alt={img.alt}
                />
                <div className="mt-2 flex h-full grow flex-col gap-2 p-2">
                  <h3 className="pr-12 text-base">{name}</h3>
                  <p className="overflow-hidden text-xs leading-tight">
                    {description}
                  </p>
                  <ul className="mb-2 flex grow flex-row flex-wrap items-end gap-1 text-xs">
                    {type.map((item) => (
                      <li
                        className="shrink rounded bg-gray-50 p-1 capitalize text-gray-700"
                        key={item}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="absolute right-1 top-1 flex flex-row flex-nowrap items-center gap-1 text-sm text-blue-600">
                    Link
                    <BiLinkExternal className="fill-blue-600" />
                  </p>
                </div>
              </section>
            </Link>
          </li>
        ))}
      </ul>
    </TitleSection>
  );
};
