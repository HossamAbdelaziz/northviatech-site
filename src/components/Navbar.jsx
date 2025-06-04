// ✅ Step 1: Navbar.jsx with scroll-based visibility (desktop + mobile)

import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu } from 'lucide-react';
import MobileDrawer from './MobileDrawer';

function Navbar() {
    const [showNavbar, setShowNavbar] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        const handleScroll = () => {
            if (window.scrollY > 50) setShowNavbar(true);
            else setShowNavbar(false);
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);
        handleResize();
        handleScroll();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const alwaysVisible = location.pathname !== '/';
    const shouldShow = alwaysVisible || showNavbar;

    return (
        <>
            <AnimatePresence>
                {shouldShow && (
                    <motion.nav
                        className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[var(--color-dark-blue)]/80 border-b border-white/10"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                    >
                        <div className="max-w-[1200px] mx-auto flex items-center justify-between px-4 py-3">
                            <div className="text-xl font-bold text-white tracking-wide">
                                {/* Logo hidden intentionally */}
                            </div>
                            {!isMobile ? (
                                <ul className="flex gap-8 text-white font-medium">
                                    <li><a href="#services" className="hover:text-gray-300">Services</a></li>
                                    <li><a href="#industries" className="hover:text-gray-300">Industries</a></li>
                                    <li><a href="#whyus" className="hover:text-gray-300">Why Us</a></li>
                                    <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
                                </ul>
                            ) : (
                                <button onClick={() => setDrawerOpen(true)} className="text-white">
                                    <Menu size={28} />
                                </button>
                            )}
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
            <MobileDrawer open={drawerOpen} setOpen={setDrawerOpen} />
        </>
    );
}

export default Navbar;
