// MobileDrawer.jsx

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '#services' },
    { label: 'Industries', href: '#industries' },
    { label: 'Why Us', href: '#whyus' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '#contact' },
];

function MobileDrawer({ open, setOpen }) {
    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '100%' }}
                    transition={{ duration: 0.3 }}
                    className="fixed top-0 right-0 h-full w-full z-50 md:hidden"
                >
                    {/* Backdrop layer */}
                    <div className="absolute inset-0 bg-black bg-opacity-80 backdrop-blur-sm z-[-1]" />

                    {/* Menu container */}
                    <div className="w-3/4 h-full bg-[var(--color-bg)] p-6 space-y-6">
                        <button
                            onClick={() => setOpen(false)}
                            className="absolute top-4 right-4 text-[var(--color-muted)] hover:text-white"
                        >
                            <X size={28} />
                        </button>

                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="block text-lg font-medium hover:text-[var(--color-accent)] transition-colors py-2"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </motion.div>

            )}
        </AnimatePresence>
    );
}

export default MobileDrawer;
