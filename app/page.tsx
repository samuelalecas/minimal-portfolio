import { Smile, Projects, Hero } from "@/components";

export default function Home() {
  return (
    <main className="relative p-8 md:p-24 flex flex-col gap-20 h-dvh md:h-screen">
      <Hero />
      <Projects />
    </main>
  );
}
