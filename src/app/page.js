import Image from "next/image";
import Link from "next/link";
import products from "@/data/products.json";

export default function Home() {
    const prods = products.slice(0, 3);
    return (
        <main className="bg-bg">
            <section className="bg-gradient-to-br from-orange-50 to-amber-50 px-6 md:px-12 py-16">
                <div className="max-w-[1110px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <span className="animate__animated animate__fadeInDown inline-block bg-accent text-dark text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">Hot Deals 🔥</span>
                        <h1 className="animate__animated animate__fadeInUp text-4xl md:text-6xl font-black text-dark mb-4 leading-tight">Summer Sale 50% off</h1>
                        <p className="animate__animated animate__fadeInUp text-gray-500 mb-8">Subtitle text here</p>
                        <div className="animate__animated animate__fadeInUp flex gap-4">
                            <button className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition cursor-pointer">Shop Now</button>
                            <button className="border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition cursor-pointer">View Products</button>
                        </div>
                    </div>                    <div className="flex justify-center">
                        <Image src="/hero.jpg" width={500} height={600} alt="Summer sale hero" className="rounded-2xl object-cover" />
                    </div>
                </div>
                <ul className="max-w-[1110px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 list-none p-0">
                    <li className="bg-white rounded-xl p-4 text-center text-sm font-medium text-gray-700 shadow-sm">🚚 Free Shipping</li>
                    <li className="bg-white rounded-xl p-4 text-center text-sm font-medium text-gray-700 shadow-sm">🔒 Secure Payment</li>
                    <li className="bg-white rounded-xl p-4 text-center text-sm font-medium text-gray-700 shadow-sm">↩️ Easy Returns</li>
                </ul>
            </section>

            <section className="px-6 md:px-12 py-16 max-w-[1110px] mx-auto">
                <h2 className="text-3xl font-black text-dark mb-8">Popular Products</h2>
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 list-none p-0">
                    {prods.map(prod => (
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

            <section className="px-6 md:px-12 py-16 bg-orange-50">
                <div className="max-w-[1110px] mx-auto">
                    <h2 className="text-3xl font-black text-dark mb-8 text-center">Summer Care Tips</h2>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 list-none p-0">
                        <li className="bg-white rounded-2xl p-6 text-center shadow-sm">
                            <span className="text-4xl mb-4 block">☀️</span>
                            <h3 className="font-bold text-dark mb-2">Apply Sunscreen Daily</h3>
                            <p className="text-sm text-gray-500">Use SPF 50+ every morning even on cloudy days.</p>
                        </li>
                        <li className="bg-white rounded-2xl p-6 text-center shadow-sm">
                            <span className="text-4xl mb-4 block">💧</span>
                            <h3 className="font-bold text-dark mb-2">Stay Hydrated</h3>
                            <p className="text-sm text-gray-500">Drink at least 8 glasses of water daily in summer heat.</p>
                        </li>
                        <li className="bg-white rounded-2xl p-6 text-center shadow-sm">
                            <span className="text-4xl mb-4 block">👒</span>
                            <h3 className="font-bold text-dark mb-2">Cover Up</h3>
                            <p className="text-sm text-gray-500">Wear hats and light clothing to protect from UV rays.</p>
                        </li>
                        <li className="bg-white rounded-2xl p-6 text-center shadow-sm">
                            <span className="text-4xl mb-4 block">🥤</span>
                            <h3 className="font-bold text-dark mb-2">Eat Light</h3>
                            <p className="text-sm text-gray-500">Stick to fruits, salads and light meals to stay energized.</p>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="px-6 md:px-12 py-16">
                <div className="max-w-[1110px] mx-auto">
                    <h2 className="text-3xl font-black text-dark mb-8 text-center">Top Brands</h2>
                    <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 list-none p-0">
                        <li className="bg-white border border-orange-100 rounded-2xl p-4 md:p-8 text-center font-black text-lg md:text-xl text-dark hover:border-primary hover:shadow-md transition cursor-pointer">
                            <span className="text-primary">Sun</span>Shade
                        </li>
                        <li className="bg-white border border-orange-100 rounded-2xl p-4 md:p-8 text-center font-black text-lg md:text-xl text-dark hover:border-primary hover:shadow-md transition cursor-pointer">
                            <span className="text-primary">Coastal</span>Wear
                        </li>
                        <li className="bg-white border border-orange-100 rounded-2xl p-4 md:p-8 text-center font-black text-lg md:text-xl text-dark hover:border-primary hover:shadow-md transition cursor-pointer">
                            <span className="text-primary">Skin</span>Guard
                        </li>
                        <li className="bg-white border border-orange-100 rounded-2xl p-4 md:p-8 text-center font-black text-lg md:text-xl text-dark hover:border-primary hover:shadow-md transition cursor-pointer">
                            <span className="text-primary">Wave</span>Rider
                        </li>
                    </ul>                
                </div>
            </section>
        </main>
    );
}
