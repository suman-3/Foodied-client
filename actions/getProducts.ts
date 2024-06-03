import { Product } from "@/types-db";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
  size?: string;
  isFeatured?: boolean;
  cuisine?: string;
  category?: string;
  kitchen?: string;
}

const getProducts = async (query: Query): Promise<Product[]> => {
  const queryString = qs.stringify({
    size: query.size,
    isFeatured: query.isFeatured,
    cuisine: query.cuisine,
    category: query.category,
    kitchen: query.kitchen,
  });

  const url = `${URL}?${queryString}`;
  
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }

  const data: Product[] = await res.json();

  return data;
};

export default getProducts;
