import { fetchAPI } from "../lib/api";
import { Products } from "../types";

export const getAllProducts = async (): Promise<Products[]> => {
    const response = await fetchAPI<Products[]>('/products');
    console.log("Products response:", response);
    return response;
}

export const getProductById = async (id: string): Promise<Products> => {
    const response = await fetchAPI<Products>(`/products/${id}`);
    console.log("Product response:", response);
    return response;
}