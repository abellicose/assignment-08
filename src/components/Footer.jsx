
export default function Footer() {
    return (
        <footer>
            <section> {/* container with max width */}
                <div>
                    <h2><span>Sun</span>Cart</h2>
                    <div>
                        <h3>Contact Info</h3>
                        <p>contact@example.com</p>
                        <p>Address here</p>
                    </div>
                </div>
                <div>
                    <h3>Social Links</h3>
                    <ul>
                        <li><Link href="#"><Image src="/icons/facebook.svg" width={20} height={20} alt="Facebook Icon" /></Link></li>
                        <li><Link href="#"><Image src="/icons/insta.svg" width={20} height={20} alt="Instagram Icon" /></Link></li>
                        <li><Link href="#"><Image src="/icons/twitter.svg" width={20} height={20} alt="Twitter Icon" /></Link></li>
                    </ul>
                </div>
            </section>
        </footer>
    );
}
