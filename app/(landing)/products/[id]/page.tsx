import Image from "next/image";
import ProductActions from "../../components/product-detail/product-actions";
import { getProductById } from "../../../services/product.service";
import { getImageUrl } from "../../../lib/api";

export type TPageProps = {
    params: Promise<{id: string}>;
};

const ProductDetail = async ({params}: TPageProps) => {
    const {id} = await params;
    const product = await getProductById(id);
    return (
        <main className="container mx-auto py-40 flex gap-12">
            <div className="bg-primary-light aspect-square min-w-140 flex justify-center items-center">
                <Image src={getImageUrl(product.imageUrl)} alt={product.name} width={550} height={550} className="object-contain aspect-square w-full" />
            </div>
            <div className="w-full py-7">
                <h1 className="font-bold text-5xl mb-6">
                    {product.name}
                </h1>
                <div className="bg-primary-light rounded-full w-fit py-2 px-6 mb-5">
                    {product.category.name}
                </div>
                <p className="leading-loose text-justify mb-8">
                    {product.description}
                </p>
                <div className="text-primary text-3xl font-semibold mb-12">
                    {Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                        maximumSignificantDigits: 3,
                    }).format(product.price)}
                </div>
                <ProductActions product={product} stock={product.stock} />
            </div>

        </main>
    )
}

export default ProductDetail;