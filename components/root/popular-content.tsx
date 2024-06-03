"use client";

import { Product } from "@/types-db";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface PopularContentProps {
  data: Product;
}

export const PopularContent = ({ data }: PopularContentProps) => {
  return (
    <Card className="w-full max-h-[340px] rounded-md bg-white shadow-lg border-none flex flex-col items-center justify-center relative py-6 pt-24 md:pt-36">
      <div className="absolute -top-[4%] md:-top-[20%]  overflow-hidden w-24 md:w-40 h-24 md:h-40 rounded-full bg-hero flex items-center justify-center p-1 md:p-2">
        <div className="w-full h-full rounded-full bg-white relative">
          <Image
            src={data.images[0].url}
            className="w-full h-full object-contain "
            fill
            alt={data.name}
          />
        </div>
      </div>

      <Link href={`/menu/${data.id}`} className="w-full px-2 text-center">
        <CardTitle className="text-neutral-700 truncate w-full text-md">
          {data.name}
        </CardTitle>
      </Link>

      <div className="w-full flex items-center justify-center gap-2 flex-wrap mt-4 px-2">
        {data.cuisine && (
          <div className="rounded-md bg-emerald-500/10 px-2 py-[2px] text-[10px] font-semibold capitalize">
            {data.cuisine}
          </div>
        )}

        {data.category && (
          <div className="rounded-md bg-blue-500/10 px-2 py-[2px] text-[10px] font-semibold capitalize">
            {data.category}
          </div>
        )}

        {data.kitchen && (
          <div className="rounded-md bg-red-500/10 px-2 py-[2px] text-[10px] font-semibold capitalize">
            {data.kitchen}
          </div>
        )}

        {data.size && (
          <div className="rounded-md bg-yellow-500/10 px-2 py-[2px] text-[10px] font-semibold capitalize">
            {data.size}
          </div>
        )}
      </div>
    </Card>
  );
};
