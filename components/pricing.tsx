import { CheckCircle, X } from "lucide-react";

const data = [
  {
    type: "Standard",
    price: "30 000",
    description: "Get started with basic features",
    option: [
      {
        optionText: "Lorem ipsum dolor sit amet consectetur",
        icon: <CheckCircle />,
      },
      {
        optionText: "Lorem ipsum dolor sit amet consectetur",
        icon: <CheckCircle />,
      },
      {
        optionText: "Lorem ipsum dolor sit amet consectetur",
        icon: <X />,
      },
      {
        optionText: "Lorem ipsum dolor sit amet consectetur",
        icon: <X />,
      },
      {
        optionText: "Lorem ipsum dolor sit amet consectetur",
        icon: <X />,
      },
      {
        optionText: "Lorem ipsum dolor sit amet consectetur",
        icon: <X />,
      },
      {
        optionText: "Lorem ipsum dolor sit amet consectetur",
        icon: <X />,
      },
      {
        optionText: "Lorem ipsum dolor sit amet consectetur",
        icon: <X />,
      },
      {
        optionText: "Lorem ipsum dolor sit amet consectetur",
        icon: <X />,
      },
      {
        optionText: "Lorem ipsum dolor sit amet consectetur",
        icon: <X />,
      },
    ],
  },
  {
    type: "Ads",
    price: "75 000",
    description: "Get started with basic features",
    option: [
      {
        optionText: "user can do this",
        icon: <CheckCircle />,
      },
      {
        optionText: "user can do this",
        icon: <CheckCircle />,
      },
      {
        optionText: "user can do this",
        icon: <CheckCircle />,
      },
      {
        optionText: "user can do this",
        icon: <CheckCircle />,
      },
      {
        optionText: "user can do this",
        icon: <CheckCircle />,
      },
      {
        optionText: "user can do this",
        icon: <CheckCircle />,
      },
      {
        optionText: "user can do this",
        icon: <CheckCircle />,
      },
      {
        optionText: "user can do this",
        icon: <CheckCircle />,
      },
      {
        optionText: "user can give this",
        icon: <CheckCircle />,
      },
      {
        optionText: "user can tacke and speak",
        icon: <X />,
      },
    ],
  },
  {
    type: "Gold",
    price: "125 000",
    description: "Get started with basic features",
    option: [
      {
        optionText: "Création d'une page Facebook",
        icon: <CheckCircle />,
      },
      {
        optionText: "Conception de Logo",
        icon: <CheckCircle />,
      },
      {
        optionText: "Conception de photo de couverture adaptée",
        icon: <X />,
      },
      {
        optionText: "Partage de publicité d'une fréquence de 5 fois/semaine",
        icon: <X />,
      },
      {
        optionText: "Conception de photo de couverture adaptée",
        icon: <X />,
      },
      {
        optionText: "Conception de photo de couverture adaptée",
        icon: <X />,
      },
      {
        optionText: "Conception de photo de couverture adaptée",
        icon: <X />,
      },
      {
        optionText: "Conception de photo de couverture adaptée",
        icon: <X />,
      },
      {
        optionText: "Conception de photo de couverture adaptée",
        icon: <X />,
      },
      {
        optionText: "Conception de photo de couverture adaptée",
        icon: <X />,
      },
    ],
  },
];

export default function Pricing() {
  return (
    <div className="content">
      <div className="overflow-hidden">
        <div className="relative">
          <div className="px-4 pt-10 sm:px-6 lg:px-8 lg:pt-14 mx-auto">
            <div className="mx-auto text-center mb-10">
              <h2 className="text-3xl leading-tight font-bold md:text-4xl md:leading-tight lg:text-5xl bg-clip-padding bg-linear-to-r from-green-400 to-yellow-200 text-black rounded-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                saepe esse incidunt eum perferendis recusandae laboriosam
                asperiores aliquid natus ad, voluptates fugiat ipsa? Aut
                accusantium rerum explicabo quasi accusamus labore!
              </p>
            </div>
            {/* GRID CARD PRICING */}
            <div
              className="mt-6 md:mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 lg:gap-3 xl:gap-6 lg:items-center"
              style={{ backgroundImage: "url('/)" }}
            >
              {data.map((item, index) => (
                <div
                  className="flex flex-col bg-card border border-card-line text-center rounded-xl p-8"
                  key={index}
                >
                  <h4 className="font-bold text-lg text-foreground">
                    Pack{" "}
                    <span
                      className="font-semibold text-blue-700 overpass-extrabold text-3xl
                  "
                    >
                      {item.type}
                    </span>
                  </h4>
                  <span className="mt-7 text-5xl text-foreground">
                    {item.price}{" "}
                    <span className="overpass-regular text-xl">KMF</span>
                  </span>
                  <p className="mt-2 text-sm text-muted-foreground-1">
                    {item.description}
                  </p>

                  <ul className="mt-7 space-y-2.5 text-sm">
                    {item.option.map((opt, idx) => {
                      const isExcluded = opt.icon.type === X;

                      return (
                        <li className="flex gap-x-2" key={idx}>
                          <span
                            className={
                              isExcluded
                                ? "text-muted-foreground"
                                : "text-green-500"
                            }
                          >
                            {opt.icon}
                          </span>
                          <span
                            className={
                              isExcluded
                                ? "text-muted-foreground line-through"
                                : "text-foreground"
                            }
                          >
                            {opt.optionText}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
