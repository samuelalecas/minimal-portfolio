import { SmileIcon } from "../Icons/SmileIcon";

export const Smile = () => {
  return (
    <a
      href="https://www.youtube.com/watch?v=isHPraVICUA"
      target="_blank"
      className="absolute bottom-10 right-10 text-[6rem] hover:animate-spin hover:cursor-pointer"
    >
      <div className="transition-all duration-200 ease-in-out scale-100 hover:scale-110">
        <SmileIcon />
      </div>
    </a>
  );
};
