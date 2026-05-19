import products from "@/data/products.json";
import Image from "next/image";
import Link from "next/link";

export default function Products() {
    return (
        <main className="bg-bg px-6 md:px-12 py-16">
            <section>
                <h2 className="text-3xl font-black text-dark mb-8 max-w-[1110px] mx-auto">All Products</h2>

                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 list-none p-0 max-w-[1110px] mx-auto">
                    {products.map(prod => (
                        <li key={prod.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
                            <article className="flex flex-col h-full">
                                <Image src={prod.image} width={500} height={500} alt={prod.description} className="w-full object-cover h-48" />
                                <h3 className="font-bold text-dark text-lg mt-4 px-4">{prod.name}</h3>
                                <span className="text-sm text-amber-500 font-medium px-4 mt-1">Rating: ⭐{prod.rating}</span>
                                <data className="text-primary font-black text-xl px-4 mt-1" value={prod.price}>${prod.price}</data>
                                <Link className="mt-auto mx-4 mb-4 block text-center bg-primary text-white py-2 rounded-lg text-sm font-semibold hover:bg-orange-600 transition" href={`/products/${prod.id}`}>View Details</Link>
                            </article>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    );
}
