import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Wallet } from "lucide-react";

const data = [
  {
    icon: <Wallet />,
    title: "titre",
    description: "description",
  },
  {
    icon: <Wallet />,
    title: "titre",
    description: "description",
  },
  {
    icon: <Wallet />,
    title: "titre",
    description: "description",
  },
  {
    icon: <Wallet />,
    title: "titre",
    description: "description",
  },
  {
    icon: <Wallet />,
    title: "titre",
    description: "description",
  },
  {
    icon: <Wallet />,
    title: "titre",
    description: "description",
  },
  {
    icon: <Wallet />,
    title: "titre",
    description: "description",
  },
  {
    icon: <Wallet />,
    title: "titre",
    description: "description",
  },
];

export default function WhatWeCanDoForYou() {
  return (
    <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="mx-auto text-start mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          Ce que nous pouvons faire pour vous
        </h2>
        <p className="mt-3 text-sm sm:text-base text-muted-foreground-2">
          Découvrez comment nous pouvons vous aider à développer votre présence
          en ligne et atteindre vos objectifs business.
        </p>
      </div>
      <div className="space-y-6 grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-6 md:gap-10">
        {data.map((action, index) => (
          <Card
            className="size-full bg-card shadow-lg rounded-lg p-5"
            key={index}
          >
            <div className="flex items-center gap-x-4 mb-3">
              <div className="inline-flex justify-center items-center size-15.5 rounded-full border-4 border-primary-100 bg-primary-200 text-primary-800 dark:border-primary-900 dark:bg-primary-800 dark:text-primary-400">
                {action.icon}
              </div>
              <CardHeader className="shrink-0">
                <CardTitle className="block text-lg font-semibold text-foreground">
                  {action.title}
                </CardTitle>
              </CardHeader>
            </div>
            <CardDescription className="text-muted-foreground-2">
              {action.description}
            </CardDescription>
          </Card>
        ))}
      </div>
    </div>
  );
}
