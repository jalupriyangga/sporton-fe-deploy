"use client";

import Button from "../ui/button"
import { FiShoppingBag, FiArrowRight, FiChevronUp, FiChevronDown } from "react-icons/fi"
import { useState } from "react"
import { useRouter } from "next/navigation"

const ProductActions = () => {
    const {push} = useRouter();
    const[qty, setQty] = useState(1);
    return (

        <div className="flex gap-5">
            <div className="border border-gray-500 inline-flex w-fit min-w-20.5">
                <div className="aspect-square text-xl font-medium border-r border-gray-500 flex justify-center items-center px-4">
                    <span>{qty}</span>
                </div>
                <div className="flex flex-col w-10">
                    <button className="border-b border-gray-500 cursor-pointer h-1/2 flex items-center justify-center hover:bg-gray-100" onClick={() => setQty(qty + 1)}>
                        <FiChevronUp size={16} />
                    </button>
                    <button className="cursor-pointer h-1/2 flex items-center justify-center hover:bg-gray-100" onClick={() => setQty(qty > 1 ? qty - 1 : qty)}>
                        <FiChevronDown size={16} />
                    </button>
                </div>
            </div>

            <Button>
                <FiShoppingBag size={20} />
                Add to Cart
            </Button>

            <Button variant="dark" onClick={() => push("/checkout")}>
                Checkout Now
                <FiArrowRight size={20} />
            </Button>
        </div>
    )
}

export default ProductActions