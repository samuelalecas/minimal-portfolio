import { Smile } from "@/components";

export default function Home() {
  return (
    <main className="relative p-8 md:p-24 flex flex-col gap-6 h-dvh md:h-screen">
      <h1 className="text-3xl font-medium md:font-normal md:text-6xl">{"Hi! I'm Samuel Alegre."}</h1>
      <h2 className="text-xl md:text-4xl md:mb-10">Web Developer & Senior Graphic Designer with Motion Graphics knowledge.</h2>
      <p className="text-xl md:text-2xl">Visit my <a href='https://www.linkedin.com/in/samuel-alegre-castro-54a878297' target="_blank" className="underline hover:italic">LinkedIn</a> or my <a href='https://github.com/samuelalecas' target="_blank" className="underline hover:italic">GitHub</a>.</p>
      <p className="text-xl md:text-2xl">Need a hand? <a href='/samuel_alegre_castro_cv.pdf' target="_blank" className="underline hover:italic">Hire me!</a></p>
      <p className="text-xl md:text-2xl">Or just <a href='mailto:samuelalecas@gmail.com' target="_blank" className="underline hover:italic">say hi!</a></p>
      <a href='https://www.youtube.com/watch?v=isHPraVICUA' target="_blank" className="absolute bottom-10 right-10 text-[6rem] hover:animate-spin hover:cursor-pointer"><div className="transition-all duration-200 ease-in-out scale-100 hover:scale-110"><Smile/></div></a>
    </main>
  );
}
