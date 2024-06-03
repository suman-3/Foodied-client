import getProducts from "@/actions/getProducts";
import { PopularContent } from "@/components/root/popular-content";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const revalidate  = 0;

const HomePage = async () => {
  const featuredProducts = await getProducts({ isFeatured: true });

  return (
    <>
      <Container className="px-4 md:px-12">
        <section className="grid grid-cols-1 md:grid-cols-2 py-12 pt-16">
          <div className="flex flex-col items-start justify-start gap-3">
            <p className="px-6 py-1 rounded-full text-neutral-500 border border-gray-300">
              Hungry ?
            </p>
            <h2 className="text-5xl font-bold tracking-wider uppercase text-neutral-700 my-4 ">
              Just Come To <span className="block py-4">Foodied & Order</span>
            </h2>

            <p className="text-base text-neutral-500 text-center md:text-left my-4">
              Craving something delicious? Discover and order your favorite
              meals from top-rated local restaurants with just a few taps on
              Foodied!
            </p>

            <div className="my-4 text-center flex justify-center gap-6 w-full md:w-auto">
              <Link href="/menu">
                <Button className="px-8 md:px-16 py-4 md:py-6 rounded-full bg-hero">
                  Order Now
                </Button>
              </Link>
              <Link href="/">
                <Button
                  variant="outline"
                  className="px-8 md:px-16 py-4 md:py-6 rounded-full"
                >
                  Explore More
                </Button>
              </Link>
            </div>
          </div>
          <div className="w-full relative h-[560px] flex items-center justify-center">
            <Image
              src="/img/Food.png"
              alt="hero-img"
              className="object-contain w-full h-full absolute"
              fill
            />
          </div>
        </section>

        {/* popular section */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 gap-y-20 my-4 py-12">
          {featuredProducts?.slice(0, 4).map((item) => (
            <PopularContent data={item} key={item.id} />
          ))}
        </section>
      </Container>
    </>
  );
};

export default HomePage;
