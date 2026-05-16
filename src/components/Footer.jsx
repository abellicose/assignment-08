import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-dark text-white px-6 md:px-12 py-16">
            <section className="max-w-[1110px] mx-auto flex flex-col md:flex-row justify-between gap-12">
                <div>
                    <h2 className="text-2xl font-bold mb-4"><span className="text-primary">Sun</span>Cart</h2>
                    <div>
                        <h3 className="text-sm font-semibold text-gray-400 uppercase mb-3">Contact Info</h3>
                        <p className="text-sm text-gray-300">contact@example.com</p>
                        <p className="text-sm text-gray-300">Address here</p>
                    </div>
                </div>
                <div>
                    <h3 className="text-sm font-semibold text-gray-400 uppercase mb-3">Social Links</h3>
                    <ul className="flex gap-4 list-none p-0">
                        <li className="bg-white bg-opacity-10 rounded-full p-2 hover:bg-opacity-20 transition"><Link href="#"><Image src="/icons/facebook.svg" width={20} height={20} alt="Facebook Icon" /></Link></li>
                        <li className="bg-white bg-opacity-10 rounded-full p-2 hover:bg-opacity-20 transition"><Link href="#"><Image src="/icons/insta.svg" width={20} height={20} alt="Instagram Icon" /></Link></li>
                        <li className="bg-white bg-opacity-10 rounded-full p-2 hover:bg-opacity-20 transition"><Link href="#"><Image src="/icons/twitter.svg" width={20} height={20} alt="Twitter Icon" /></Link></li>
                    </ul>
                </div>
            </section>
            <div className="max-w-[1110px] mx-auto mt-12 pt-6 border-t border-white border-opacity-10 flex justify-between text-xs text-gray-500" >
                <p>© 2026 SunCart. All rights reserved.</p>
                <Link href="#" className="hover:text-white">Privacy Policy</Link>
            </div>
        </footer>
    );
}
