import { buttonVariants } from "./ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import whatsapp from "@/public/whatsapp.svg";
import hero from "@/public/hero.jpg";
import { Phone, PhoneCall, Star, StarHalf } from "lucide-react";

export default function Hero() {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
        <div>
          <h1 className="block text-3xl font-bold text-foreground sm:text-4xl lg:text-6xl lg:leading-tight">
            Start to be visible with us{" "}
            <span className="text-green-700">BoostDigital</span>
          </h1>
          <p className="mt-3 text-lg text-foreground">
            Professional strategies designed by experts to give you visibility
            for any entrepreneur and any business.
          </p>

          <div className="grid sm:inline-flex w-full gap-3 mt-7">
            <Link
              className={cn(
                buttonVariants({
                  size: "lg",
                }),
                "mt-4",
                "bg-green-500 hover:bg-green-600",
              )}
              href="https://wa.me/2694460291?text=Bonjour%20%F0%9F%91%8B%20Je%20souhaite%20en%20savoir%20plus."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={whatsapp}
                alt="WhatsApp"
                width={24}
                height={24}
                style={{ marginRight: "4px" }}
              />
              Let&apos;s talk
            </Link>
            <Link
              className={cn(
                buttonVariants({
                  size: "lg",
                }),
                "mt-4",
                "bg-amber-400 hover:bg-amber-500",
              )}
              href="https://wa.me/33600000000"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PhoneCall size={24} style={{ marginRight: "4px" }} />
              Contactez-nous
            </Link>
          </div>

          <div className="mt-6 lg:mt-10 grid grid-cols-2 gap-x-5">
            <div className="py-5">
              <div className="flex gap-x-1">
                <Star className="text-yellow-500" size={32} />
                <Star className="text-yellow-500" size={32} />
                <Star className="text-yellow-500" size={32} />
                <StarHalf className="text-yellow-500" size={32} />
              </div>

              <p className="mt-3 text-sm text-foreground">
                <span className="font-bold">Trusted by</span> -{" "}
                <Link
                  href={"https://facebook.com"}
                  className="text-blue-600 font-semibold"
                >
                  DigEcom
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="relative ms-4">
          <Image className="w-full rounded-md" src={hero} alt="Hero-Image" />
          <div className="absolute inset-0 -z-1 bg-linear-to-tr from-surface-1 via-transparent to-travia-transparent size-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6" />

          <div className="absolute bottom-0 inset-s-0">
            <svg
              className="w-2/3 ms-auto h-auto text-white dark:text-neutral-900"
              width="630"
              height="451"
              viewBox="0 0 630 451"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="531"
                y="352"
                width="99"
                height="99"
                fill="currentColor"
              />
              <rect
                x="140"
                y="352"
                width="106"
                height="99"
                fill="currentColor"
              />
              <rect
                x="482"
                y="402"
                width="64"
                height="49"
                fill="currentColor"
              />
              <rect
                x="433"
                y="402"
                width="63"
                height="49"
                fill="currentColor"
              />
              <rect
                x="384"
                y="352"
                width="49"
                height="50"
                fill="currentColor"
              />
              <rect
                x="531"
                y="328"
                width="50"
                height="50"
                fill="currentColor"
              />
              <rect x="99" y="303" width="49" height="58" fill="currentColor" />
              <rect x="99" y="352" width="49" height="50" fill="currentColor" />
              <rect x="99" y="392" width="49" height="59" fill="currentColor" />
              <rect x="44" y="402" width="66" height="49" fill="currentColor" />
              <rect
                x="234"
                y="402"
                width="62"
                height="49"
                fill="currentColor"
              />
              <rect
                x="334"
                y="303"
                width="50"
                height="49"
                fill="currentColor"
              />
              <rect x="581" width="49" height="49" fill="currentColor" />
              <rect x="581" width="49" height="64" fill="currentColor" />
              <rect
                x="482"
                y="123"
                width="49"
                height="49"
                fill="currentColor"
              />
              <rect
                x="507"
                y="124"
                width="49"
                height="24"
                fill="currentColor"
              />
              <rect x="531" y="49" width="99" height="99" fill="currentColor" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
