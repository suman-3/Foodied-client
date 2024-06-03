import { Container } from "@/components/shared/container";
import React from "react";

const HomePage = () => {
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

            <p className="text-base text-neutral-500 text-center md:text-left my-4">Craving something delicious? Discover and order your favorite meals from top-rated local restaurants with just a few taps on Foodied!</p>
          </div>
        </section>
      </Container>
    </>
  );
};

export default HomePage;
