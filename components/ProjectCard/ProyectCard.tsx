import { ReactNode } from "react";
import { JavascriptIcon, P5Icon } from "../Icons";

export const ProjectCard = ({ data }: { data: any }) => {
  const { img, title, icons, url } = data;
  return (
    <article className="max-w-[500px] group">
      <a
        className="inline-block w-full h-[150px] md:h-[260px] relative mb-4"
        href={url}
        target="_blank"
      >
        <img
          src={img}
          alt=""
          className="w-full object-cover h-[150px] md:h-[260px] group-hover:-translate-x-3 group-hover:-translate-y-3 transition duration-100 group-hover:cursor-pointer"
        />
        <div className="absolute -z-10 top-0 w-full h-[150px] md:h-[260px] bg-black"></div>
      </a>
      <div className="flex justify-between">
        <a href={url} target="_blank">
          {" "}
          <h3 className="text text-xl md:text-2xl hover:underline">{title}</h3>
        </a>
        <div className="flex gap-2 text-gray-400 hover:*:text-gray-900">
          {icons.map((icon: ReactNode, index: number) => (
            <div key={index}>{icon}</div>
          ))}
        </div>
      </div>
    </article>
  );
};
