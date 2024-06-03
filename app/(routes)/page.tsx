import getProducts from "@/actions/getProducts";
import { PopularContent } from "@/components/root/popular-content";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FileHeart, Salad, Truck } from "lucide-react";

export const revalidate = 0;

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

        <section className=" my-4 py-12 flex flex-col items-center justify-center">
          <h2 className="text-5xl md:text-5xl font-bold tracking-wider uppercase text-neutral-700 my-4">
            Why choose us ?
          </h2>
          <p className="w-full text-center md:w-[560px] text-base text-neutral-500 my-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic,
            commodi repellendus quod tempore reiciendis mollitia perferendis{" "}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full my-6 mt-20">
            <Card className="shadow-lg rounded-md border-none p-4 py-12 flex flex-col items-center justify-center gap-4">
              <Salad className="w-8 h-8 text-hero" />
              <CardTitle className="text-neutral-600">
                Serve Healthy Food
              </CardTitle>
              <CardDescription className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                laudantium sunt
              </CardDescription>
            </Card>

            <Card className="shadow-lg rounded-md border-none p-4 py-12 flex flex-col items-center justify-center gap-4">
              <FileHeart className="w-8 h-8 text-hero" />
              <CardTitle className="text-neutral-600">Best Quality</CardTitle>
              <CardDescription className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                laudantium sunt
              </CardDescription>
            </Card>

            <Card className="shadow-lg rounded-md border-none p-4 py-12 flex flex-col items-center justify-center gap-4">
              <Truck className="w-8 h-8 text-hero" />
              <CardTitle className="text-neutral-600">Fast Delivery</CardTitle>
              <CardDescription className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                laudantium sunt
              </CardDescription>
            </Card>
          </div>
        </section>

        <section className=" my-4 py-12 flex flex-col items-center justify-center">
          <h2 className="text-5xl md:text-5xl font-bold tracking-wider uppercase text-neutral-700 my-4">
            Our Special Chefs
          </h2>
          <p className="w-full text-center md:w-[560px] text-base text-neutral-500 my-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic,
            commodi repellendus quod tempore reiciendis mollitia perferendis{" "}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full my-6 mt-20">
            <Card className="shadow-lg relative rounded-md border-none  flex flex-col items-center justify-end h-96 md:h-[520px] bg-hero/30">
              <Image
                src="/img/chef1.png"
                alt="Chef One"
                className="w-full h-full object-contain"
                fill
              />
            </Card>

            <Card className="shadow-lg relative rounded-md border-none  flex flex-col items-center justify-end h-96 md:h-[520px] mt-20 bg-hero/30">
              <Image
                src="/img/chef3.png"
                alt="Chef One"
                className="w-full h-full object-contain"
                fill
              />
            </Card>

            <Card className="shadow-lg relative rounded-md border-none  flex flex-col items-center justify-end h-96 md:h-[520px] bg-hero/30">
              <Image
                src="/img/chef2.png"
                alt="Chef One"
                className="w-full h-full object-contain"
                fill
              />
            </Card>
          </div>
        </section>
      </Container>

      <footer className="bg-white ">
        <Container>
          <div className="w-full  bg-hero/30 grid grid-cols-2 md:grid-cols-4 px-4 md:px-12 py-8">
            <div className="flex flex-col items-start justify-start gap-3">
              <h2 className="text-3xl font-semibold">Menu</h2>
              <p className="text-neutral-500 text-sm">Home</p>
              <p className="text-neutral-500 text-sm">Why Choose</p>
              <p className="text-neutral-500 text-sm">Special Menu</p>
              <p className="text-neutral-500 text-sm">Regular Food</p>
              <p className="text-neutral-500 text-sm">Special Chefs</p>
            </div>

            <div className="flex flex-col items-start justify-start gap-3">
              <h2 className="text-3xl font-semibold">Help</h2>
              <p className="text-neutral-500 text-sm">Privacy</p>
              <p className="text-neutral-500 text-sm">Terms & Condition</p>
              <p className="text-neutral-500 text-sm">Policy</p>
            </div>

            <div className="flex flex-col items-start justify-start gap-3">
              <h2 className="text-3xl font-semibold">Contact</h2>
              <p className="text-neutral-500 text-sm">+000 0000 0000</p>
              <p className="text-neutral-500 text-sm">info@foodied.com</p>
              <p className="text-neutral-500 text-sm">1234 New Street, India</p>
            </div>

            <div className="flex flex-col items-start justify-start gap-3">
              <h2 className="text-3xl font-semibold">
                Subscribe Our Newsletter
              </h2>
              <div className="w-full rounded-md border-2 border-emerald-500 flex items-center justify-center">
                <input
                  type="text"
                  placeholder="Enter your Email"
                  className="h-full bg-transparent pl-4 text-sm text-neutral-500 w-full outline-none border-none"
                />
                <Button className="bg-emerald-500 rounded-tr-none rounded-br-none hover:bg-emerald-600">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          <div className="mx-auto py-8 ">
            <p className="text-center text-xs text-black">
              &copy; 2023 Foodied, Inc. All rights reserved
            </p>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default HomePage;
