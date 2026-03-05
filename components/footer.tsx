"use client";

import {
  FacebookIcon,
  GoalIcon,
  InstagramIcon,
  LinkedinIcon,
  TicketCheckIcon,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const data = {
  brand: {
    name: "BoostDigital",
  },
  sections: [
    {
      title: "Nos Services",
      links: [
        { name: "Item1", href: "#" },
        { name: "Item2", href: "#" },
        { name: "Item3", href: "#" },
        { name: "Item4", href: "#" },
      ],
    },
    {
      title: "Agence",
      links: [
        { name: "Item1", href: "#" },
        { name: "Item2", href: "#" },
        { name: "Item3", href: "#" },
        { name: "Item4", href: "#" },
      ],
    },
  ],
  socialBrands: [
    { id: "facebook", href: "#", icon: <FacebookIcon /> },
    { id: "instagram", href: "#", icon: <InstagramIcon /> },
    { id: "goal", href: "#", icon: <GoalIcon /> },
    { id: "linkedin", href: "#", icon: <LinkedinIcon /> },
    { id: "tiktok", href: "#", icon: <TicketCheckIcon /> },
  ],
};

export default function Footer() {
  const [message, setMessage] = useState("");
  // const getCurrentYear =

  const whatsappNumber = "2694460291";
  const whatsappLink =
    message.trim().length > 0
      ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
      : "#";

  return (
    <footer className="mt-7 bg-green-700 w-full text-white">
      <div className="mt-auto w-full py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
        {/* <!-- Grid --> */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          <div className="col-span-full lg:col-span-1">
            <Link
              className="flex-none text-xl font-semibold text-foreground-inverse focus:outline-hidden focus:opacity-80"
              href="#"
              aria-label="Brand"
            >
              {data.brand.name}
            </Link>
          </div>

          {/* SECTION DES LIENS */}
          {data.sections.map((section, index) => (
            <div className="col-span-1" key={index}>
              <h4 className="font-semibold text-foreground-inverse">
                {section.title}
              </h4>

              <div className="mt-3 grid space-y-3">
                {section.links.map((item) => (
                  <p key={item.name}>
                    <Link
                      className="inline-flex gap-x-2 text-foreground-inverse/70 hover:text-foreground-inverse focus:outline-hidden focus:text-foreground-inverse"
                      href={item.href}
                    >
                      {item.name}
                    </Link>
                  </p>
                ))}
              </div>
            </div>
          ))}

          <div className="col-span-2">
            <h4 className="font-semibold text-foreground-inverse">
              Envoyez-nous un message
            </h4>

            <form>
              <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:gap-3 bg-layer rounded-lg p-2">
                <div className="w-full">
                  <label htmlFor="hero-input" className="sr-only">
                    Message WhatsApp
                  </label>
                  <input
                    type="text"
                    id="hero-input"
                    name="hero-input"
                    className="bg-white py-2.5 sm:py-3 px-4 block w-full border-yellow-600 rounded-lg sm:text-sm text-foreground placeholder:text-muted-foreground-1 focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none"
                    placeholder="Écrivez votre message WhatsApp"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <Link
                  className="w-full sm:w-auto whitespace-nowrap p-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg bg-primary border border-primary-line text-primary-foreground hover:bg-primary-hover focus:outline-hidden focus:bg-primary-focus disabled:opacity-50 disabled:pointer-events-none"
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Envoyer sur WhatsApp
                </Link>
              </div>
              <p className="mt-3 text-sm text-white/50">
                Vous serez redirigé vers WhatsApp avec ce message pré-rempli.
              </p>
            </form>
          </div>
          {/* <!-- End Col --> */}
        </div>

        <div className="mt-5 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
          <div className="flex flex-wrap justify-between items-center gap-2">
            <p className="text-sm text-white">© 2026 BoostDigital.</p>
          </div>

          <div>
            {data.socialBrands.map((social) => (
              <Link
                className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-foreground-inverse hover:bg-plain/10 focus:outline-hidden focus:bg-plain/10 disabled:opacity-50 disabled:pointer-events-none"
                href={social.href}
                key={social.id}
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
