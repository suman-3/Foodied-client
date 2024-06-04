import { Product } from "@/types-db";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getCategories = async (id: string): Promise<Product[]> => {
  const res = await fetch(`${URL}/${id}`);

  return res.json();
};

export default getCategories;
