export async function fetchAPI<T>(
    endpoint: string,
    options?: RequestInit
): Promise<T> {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + endpoint, { ...options, cache: options?.cache || "no-store" }); // kita set no store karena ingin dapat
    if (!response.ok) {
        let errorMessage = ("Failed to fetch data from endpoint");
        try {
            const errorData = await response.json();
            errorMessage = errorData.message || errorMessage || errorData.error;
        } catch (error) {
            console.error("Failed to parse error response:", error);
        }
        throw new Error(errorMessage);
    }
    return response.json();
}

export function getImageUrl(imagePath: string) {
    if (imagePath.startsWith("http")) return imagePath;
    return `${process.env.NEXT_PUBLIC_API_ROOT}/${imagePath}`;
}

