import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import animationData from '../assets/automationhero.json';
import useWindowSize from '../utils/useWindowSize';
import logo from '/logo.png';

function HeroSection() {
    const { isMobile } = useWindowSize();

    return (
        <section className="min-h-screen bg-[var(--color-primary)] text-[var(--color-text)] px-6 flex items-center justify-center">
            <div className="max-w-7xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-10 py-10 md:py-20">
                {/* Left: Text Content */}
                <div className="text-center md:text-left md:max-w-xl z-10">
                    <motion.img
                        src={logo}
                        alt="NorthViaTech Logo"
                        className="mx-auto md:mx-0 w-24 mb-6"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    />

                    <motion.h1
                        className="text-4xl sm:text-5xl font-bold leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        Automate your business. <br className="hidden md:block" /> Focus on growth.
                    </motion.h1>

                    <motion.p
                        className="mt-4 text-lg text-[var(--color-accent)]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        We build smart systems that save you time, reduce errors, and boost your workflow.
                    </motion.p>

                    <motion.div
                        className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                    >
                        <button className="px-6 py-3 bg-[var(--color-accent)] text-white font-semibold rounded-md hover:opacity-90">
                            Get a Free Quote
                        </button>
                        <button className="px-6 py-3 border border-[var(--color-accent)] text-[var(--color-accent)] font-semibold rounded-md hover:bg-[var(--color-accent)] hover:text-white transition">
                            See Live Demos
                        </button>
                    </motion.div>
                </div>

                {/* Right: Lottie Animation */}
                <motion.div
                    className="w-full md:w-1/2 max-w-md"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, duration: 1 }}
                >
                    <Lottie animationData={animationData} loop={true} />
                </motion.div>
            </div>
        </section>
    );
}

export default HeroSection;
