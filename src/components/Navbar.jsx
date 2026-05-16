import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    let loggedIn = false;
    let avatarUrl = "/next.svg";

    return (
        <header className="bg-white border-b border-orange-100 px-6 md:px-12 py-4">
            <div className="max-w-[1110px] mx-auto flex justify-between items-center">
                <Link href="/"><h2 className="text-xl font-bold text-dark"><span className="text-primary">Sun</span>Cart</h2></Link>
                <nav>
                    <ul className="flex items-center gap-2 list-none p-0 m-0">
                        <li><Link href="/" className="px-4 py-2 text-sm text-gray-600 hover:text-primary transition-colors">Home</Link></li>
                        <li><Link href="/products" className="px-4 py-2 text-sm text-gray-600 hover:text-primary transition-colors">Products</Link></li>
                        {loggedIn ? (
                            <li className="flex items-center gap-3">
                                <Image src={avatarUrl} width={36} height={36} alt="User avatar" className="rounded-full object-cover" />
                                <button className="px-4 py-2 text-sm bg-primary text-white rounded-lg hover:bg-orange-600 transition-colors cursor-pointer">Logout</button>
                            </li>
                        ) : (
                            <>
                                <li><Link href="/login" className="px-4 py-2 text-sm text-gray-600 hover:text-primary transition-colors">Login</Link></li>
                                <li><Link href="/register" className="px-4 py-2 text-sm bg-primary text-white rounded-lg hover:bg-orange-600 transition-colors">Register</Link></li>
                            </>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
