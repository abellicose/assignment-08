import Image from "next/image";
import { use } from "react";
import products from "@/data/products.json";

export function generateStaticParams() {
    return products.map(prod => ({
        id: String(prod.id)
    }));
}

export default function Product({ params }) {
    const { id } = use(params);
    const product = products.find(prod => prod.id == id);
    if (product == null) return <p>No product found</p>;
    return (
        <main className="bg-bg">
            <section className="max-w-[1110px] mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="rounded-2xl overflow-hidden bg-orange-50 flex items-center justify-center p-8">
                    <Image src={product.image} width={500} height={500} alt={product.description} className="object-cover rounded-xl" />
                </div>
                <div>
                    <h2 className="text-3xl font-black text-dark mb-3">{product.name}</h2>
                    <div className="flex gap-2 mb-4">
                        <span className="bg-orange-100 text-primary text-xs font-semibold px-3 py-1 rounded-full">{product.brand}</span>
                        <span className="bg-orange-100 text-primary text-xs font-semibold px-3 py-1 rounded-full">{product.category}</span>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6">{product.description}</p>
                    <div className="flex gap-6 mb-6">
                        <span className="text-sm font-medium text-gray-600">⭐ {product.rating}</span>
                        <span className="text-sm font-medium text-gray-600">🗃️ {product.stock} in stock</span>
                    </div>
                    <data value={product.price} className="block text-4xl font-black text-primary mb-6">${product.price}</data>
                    <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition cursor-pointer">Add to Cart</button>
                </div>
            </section>
        </main>
    );
}
