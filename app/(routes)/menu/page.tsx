import getCategories from "@/actions/getCategories";
import { Box } from "@/components/shared/box";
import { Container } from "@/components/shared/container";
import { FilterContainer } from "@/components/shared/filter-container";
import React from "react";
import { CategoryFilter } from "./_components/categorty-filter";
import getSizes from "@/actions/getSizes";
import { SizeFilter } from "./_components/size-filter";

export const revalidate = 0;

interface MenuPageProps {
  searchParams: {
    size?: string;
    isFeatured?: boolean;
    cuisine?: string;
    category?: string;
    kitchen?: string;
  };
}

const MenuPage = async ({ searchParams }: MenuPageProps) => {
  const categories = await getCategories();
  const sizes = await getSizes();

  return (
    <Container className="px-4 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-12 py-12 gap-2">
        <div className="hidden md:block col-span-2 border-r border-gray-100 top-24">
          <FilterContainer>
            <CategoryFilter categories={categories} />
            <SizeFilter sizes={sizes} />
          </FilterContainer>
        </div>
        <Box className="col-span-12 md:col-span-10 flex-col items-start justify-start w-full">
          Page Content
        </Box>
      </div>
    </Container>
  );
};

export default MenuPage;
