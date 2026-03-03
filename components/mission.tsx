import {
  BetweenHorizonalStart,
  Home,
  Link2,
  SendHorizonal,
  UserRoundPen,
} from "lucide-react";
import mission from "@/public/seo.jpg";
import Image from "next/image";

const data = [
  {
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Praesentium labore tempora velit, a quos voluptates quas doloribus quibusdam corrupti blanditiis.",
    icon: <UserRoundPen />,
  },
  {
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium labore tempora velit, a quos voluptates quas doloribus quibusdam corrupti blanditiis.",
    icon: <Link2 />,
  },
  {
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium labore tempora velit, a quos voluptates quas doloribus quibusdam corrupti blanditiis.",
    icon: <SendHorizonal />,
  },
  {
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium labore tempora velit, a quos voluptates quas doloribus quibusdam corrupti blanditiis.",
    icon: <BetweenHorizonalStart />,
  },
];

export default function Mission() {
  return (
    <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* TITRE ET SOUS TITRE */}
      <div className="lg:col-span-1 mt-4">
        <h1 className="font-bold text-2xl md:text-3xl text-muted-foreground">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </h1>
        <p className="mt-2 md:mt-4 text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium
          labore tempora velit, a quos voluptates quas doloribus quibusdam
          corrupti blanditiis. Dolores laborum adipisci voluptatibus iure quia
          commodi quos quas neque.
        </p>
      </div>

      {/* GRID VIEW */}
      <div className="mt-6 lg:mt-6 grid lg:grid-cols-3 gap8 lg:gap-12">
        <div className="lg:col-span-2 bg-green-700 rounded-xl">
          <div className="grid sm:grid-cols-2 gap-4 md:gap-4 px-4 py-4">
            {data.map((item, index) => (
              <div
                key={index}
                className="flex gap-5 bg-white px-2 py-3 rounded-2xl"
              >
                <div className="bg-amber-300 rounded-full w-36 h-10 flex items-center justify-center">
                  {item.icon}
                </div>
                <div className="grow">
                  <h3 className="font-semibold text-lg text-muted-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
