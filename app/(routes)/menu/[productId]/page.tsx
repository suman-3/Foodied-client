import getProuct from "@/actions/get-product";
import getProducts from "@/actions/getProducts";
import { Box } from "@/components/shared/box";
import { Container } from "@/components/shared/container";
import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";

interface ProductpageProps {
  params: {
    productId: string;
  };
}

const ProductPage = async ({ params }: ProductpageProps) => {
  const product = await getProuct(params.productId);
  const suggestedProduct = await getProducts({ category: product?.category });

  return (
    <div>
      <Container className="bg-white rounded-lg my-4 px-4">
        <Box className="text-neutral-700 text-sm items-center mt-12">
          <Link href={"/"} className="flex items-center gap-2">
            <Home className="w-4 h-4 " />
            Main Page
          </Link>
          <ChevronRight className="w-5 h-5 text-muted-foreground" />
          <Link href={"/menu"} className="flex items-center gap-2">
            Products
          </Link>
        </Box>

        <div className="px-4 py-10 sm:px-6 lg:px-8 space-y-10">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            {/* gallery Section */}
            
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              {/* info section */}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
