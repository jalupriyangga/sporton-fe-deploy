import Image from "next/image";
import ProductActions from "../../components/product-detail/product-actions";

const ProductDetail = () => {
    return (
        <main className="container mx-auto py-40 flex gap-12">
            <div className="bg-primary-light aspect-square min-w-140 flex justify-center items-center">
                <Image src="/images/products/product-4.png" alt="product" width={550} height={550} className="object-contain aspect-square w-full" />
            </div>
            <div className="w-full py-7">
                <h1 className="font-bold text-5xl mb-6">
                    SportOn HyperSoccer v2
                </h1>
                <div className="bg-primary-light rounded-full w-fit py-2 px-6 mb-5">
                    Football
                </div>
                <p className="leading-loose text-justify mb-8">
                    The SportsOn HyperSoccer v2 is engineered for the player who demands precision, power, and unrivaled speed on the pitch. Featuring a striking, two-toned black and white design with deep crimson accents, these cleats don't just perform—they make a statement. Experience the future of football footwear with v2's enhanced fit and cutting-edge traction.
                </p>
                <div className="text-primary text-3xl font-semibold mb-12">
                    {Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                        maximumSignificantDigits: 3,
                    }).format(458000)}
                </div>
                <ProductActions />
            </div>

        </main>
    )
}

export default ProductDetail;