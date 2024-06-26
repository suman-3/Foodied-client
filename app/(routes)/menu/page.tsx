import getCategories from "@/actions/getCategories";
import { Box } from "@/components/shared/box";
import { Container } from "@/components/shared/container";
import { FilterContainer } from "@/components/shared/filter-container";
import React from "react";
import { CategoryFilter } from "./_components/categorty-filter";
import getSizes from "@/actions/getSizes";
import { SizeFilter } from "./_components/size-filter";
import getKitchens from "@/actions/getKitchens";
import { KitchenFilter } from "./_components/kitchen-filter";
import getCuisines from "@/actions/getCuisines";
import { CuisineFilter } from "./_components/cuisines-filter";
import getProducts from "@/actions/getProducts";
import { PageContent } from "./_components/page-content";

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
  const kitchens = await getKitchens();
  const cuisines = await getCuisines();

  const products = await getProducts({
    size: searchParams?.size,
    isFeatured: searchParams?.isFeatured,
    kitchen: searchParams?.kitchen,
    cuisine: searchParams?.cuisine,
    category: searchParams?.category
  })

  return (
    <Container className="px-4 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-12 py-12 gap-2">
        <div className="hidden md:block col-span-2 border-r border-gray-100 top-24">
          <FilterContainer>
            <CategoryFilter categories={categories} />
            <SizeFilter sizes={sizes} />
            <KitchenFilter kitchens={kitchens} />
            <CuisineFilter cuisines={cuisines} />
          </FilterContainer>
        </div>
        <Box className="col-span-12 md:col-span-10 flex-col items-start justify-start w-full">
      <PageContent products={products} />
        </Box>
      </div>
    </Container>
  );
};

export default MenuPage;
