// ✅ Footer.jsx — Modern 3-column responsive layout

import { FaInstagram, FaLinkedin, FaFacebookF, FaDribbble, FaXTwitter } from 'react-icons/fa6';

function Footer() {
    return (
        <footer className="bg-[#0B1D2C] text-white px-6 py-12 mt-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

                {/* Brand Column */}
                <div>
                    <h2 className="text-xl font-bold tracking-wide text-white">NorthViaTech</h2>
                    <p className="text-sm text-gray-400 mt-2">
                        Smart systems to save you time and automate your business.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li><a href="#services" className="hover:text-[var(--color-accent)]">Services</a></li>
                        <li><a href="/projects" className="hover:text-[var(--color-accent)]">Projects</a></li>
                        <li><a href="#whyus" className="hover:text-[var(--color-accent)]">Why Choose Us</a></li>
                        <li><a href="#contact" className="hover:text-[var(--color-accent)]">Contact</a></li>
                    </ul>
                </div>

                {/* Contact Info + Social */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Contact</h3>
                    <p className="text-sm text-gray-300 mb-1">📞 (647) 675-3343</p>
                    <p className="text-sm text-gray-300 mb-4">✉️ info@northviatech.com</p>

                    <div className="flex gap-4 text-[var(--color-accent)] text-lg">
                        <a href="https://www.facebook.com/people/Northviatech/61576781919009/" target="_blank" rel="noopener noreferrer" className="p-2 w-10 h-10 flex items-center justify-center">
                            <FaFacebookF />
                        </a>
                        <a href="https://www.instagram.com/northviatech/" target="_blank" rel="noopener noreferrer" className="p-2 w-10 h-10 flex items-center justify-center">
                            <FaInstagram />
                        </a>
                        <a href="https://www.linkedin.com/company/north-via-tech/" target="_blank" rel="noopener noreferrer" className="p-2 w-10 h-10 flex items-center justify-center">
                            <FaLinkedin />
                        </a>
                        <a href="https://dribbble.com/NorthViaTech" target="_blank" rel="noopener noreferrer" className="p-2 w-10 h-10 flex items-center justify-center">
                            <FaDribbble />
                        </a>
                        <a href="https://x.com/NorthViatech" target="_blank" rel="noopener noreferrer" className="p-2 w-10 h-10 flex items-center justify-center">
                            <FaXTwitter />
                        </a>
                    </div>

                </div>
            </div>

            <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-6">
                © 2025 NorthViaTech. All rights reserved.
            </div>
            <p className="text-xs text-gray-500 mt-4">
                This site is protected by reCAPTCHA and the Google{' '}
                <a href="https://policies.google.com/privacy" className="underline" target="_blank">Privacy Policy</a> and{' '}
                <a href="https://policies.google.com/terms" className="underline" target="_blank">Terms of Service</a> apply.
            </p>

        </footer>
    );
}

export default Footer;
