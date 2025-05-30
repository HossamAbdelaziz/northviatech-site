import { motion } from 'framer-motion';
import useWindowSize from '../utils/useWindowSize';

function IndustriesBar() {
    const { width } = useWindowSize();

    const duration = width < 768 ? 15 : 25;

    const industries = [
        'Coaches',
        'Clinics',
        'Mechanic Shops',
        'Car Rentals',
        'Beauty Studios',
        'Retail Stores',
        'Marketing Teams',
        'HR & Admin',
        'Medical Labs',
        'Therapists',
        'Tutoring Centers',
        'Home Services',
        'Law Firms',
        'Logistics',
        'Nonprofits',
        'Fitness Studios',
        'Real Estate Agents',
        'Event Planners',
        'Online Stores',
        'Freelancers',
    ];

    const extendedList = [...industries, ...industries];

    return (
        <section className="py-12 px-6 bg-[var(--color-primary)] text-[var(--color-text)] overflow-hidden">
            <div className="max-w-7xl mx-auto text-center mb-6">
                <h2 className="text-3xl font-bold mb-2">Industries We Support</h2>
                <p className="text-[var(--color-muted)] max-w-3xl mx-auto">
                    We build flexible systems that work across all types of businesses and teams.
                </p>
            </div>

            <div className="relative overflow-hidden">
                <motion.div
                    className="flex gap-6 whitespace-nowrap"
                    animate={{ x: ['0%', '-50%'] }}
                    transition={{
                        duration: duration,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                >
                    {extendedList.map((item, index) => (
                        <span
                            key={index}
                            className="px-4 py-2 bg-[#1f2937] border border-gray-700 rounded-full text-sm text-[var(--color-text)] hover:border-[var(--color-accent)] transition"
                        >
                            {item}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default IndustriesBar;
