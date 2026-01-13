import { fetchAPI } from "../lib/api";
import { Catergory } from "../types";

export const getAllCategories = async (): Promise<Catergory[]> => {
    const response = await fetchAPI<Catergory[]>('/categories');
    console.log("Categories response", response);
    return response;
}