"use client";

import { Box } from "@/components/shared/box";
import { cn } from "@/lib/utils";
import {  Kitchen } from "@/types-db";
import { Check } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";

interface KitchenFilterProps {
  kitchens: Kitchen[];
}

export const KitchenFilter = ({ kitchens }: KitchenFilterProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleClick = (kitchen: string) => {
    const currentParams = Object.fromEntries(searchParams.entries());
    if (currentParams.kitchen === kitchen) {
      delete currentParams.kitchen;
    } else {
      currentParams.kitchen = kitchen;
    }

    const href = qs.stringifyUrl({
      url: "/menu",
      query: currentParams,
    });

    router.push(href);
  };

  return (
    <Box className="flex-col gap-2 border-b pb-4 cursor-pointer">
      <h2 className="text-xl font-semibold text-neutral-700">Kitchens</h2>
      <Box className="flex-col gap-2 mt-2">
        {kitchens.map((kitchen) => (
          <div
            onClick={() => handleClick(kitchen.name)}
            className={cn(
              "text-sm font-semibold text-neutral-500 flex items-center gap-2",
              kitchen.name === searchParams.get("kitchen") && "text-hero"
            )}
            key={kitchen.id}
          >
            <p>{kitchen.name}</p>
            {kitchen.name === searchParams.get("kitchen") && (
              <Check className="w-4 h-4 text-hero" />
            )}
          </div>
        ))}
      </Box>
    </Box>
  );
};
