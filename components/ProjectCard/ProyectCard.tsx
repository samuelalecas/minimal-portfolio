import { ReactNode } from "react";
import { JavascriptIcon, P5Icon } from "../Icons";

export const ProjectCard = ({ data }: { data: any }) => {
  const { img, title, icons, url } = data;
  return (
    <article className="max-w-[500px] group">
      <a
        className="inline-block w-full h-[260px] relative mb-4"
        href={url}
        target="_blank"
      >
        <img
          src={img}
          alt=""
          className="object-cover h-[260px] group-hover:-translate-x-5 group-hover:-translate-y-5 transition duration-100 group-hover:cursor-pointer"
        />
        <div className="absolute -z-10 top-0 w-full h-[260px] bg-black"></div>
      </a>
      <div className="flex justify-between">
        <a href={url} target="_blank">
          {" "}
          <h3 className="text text-2xl hover:underline">{title}</h3>
        </a>
        <div className="flex gap-2 text-gray-400 hover:*:text-gray-900">
          {icons.map((icon: ReactNode) => icon)}
        </div>
      </div>
    </article>
  );
};
