import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


// Lottie animations
import customSystems from '../assets/services/custom-systems.json';
import webAppDev from '../assets/services/web-app-dev.json';
import automation from '../assets/services/automation.json';
import payments from '../assets/services/payments.json';
import aiTools from '../assets/services/ai-tools.json';
import maintenance from '../assets/services/maintenance.json';

const services = [
    {
        title: 'Custom Systems',
        description: 'Smart solutions built around your workflow, not the other way around.',
        animation: customSystems,
        route: '/services/custom-systems',
    },
    {
        title: 'Web & App Dev',
        description: 'Modern websites and mobile apps designed for performance and usability.',
        animation: webAppDev,
        route: '/services/web-app-dev',
    },
    {
        title: 'Automation',
        description: 'Automate emails, forms, and admin tasks to save time and avoid errors.',
        animation: automation,
        route: '/services/automation',
    },
    {
        title: 'Payments',
        description: 'Integrated Stripe and subscription systems to get paid on time, every time.',
        animation: payments,
        route: '/services/payments',
    },
    {
        title: 'AI Tools',
        description: 'Smart assistants, reminders, and automation powered by AI.',
        animation: aiTools,
        route: '/services/ai-tools',
    },
    {
        title: 'Maintenance & Support',
        description: 'Ongoing updates, security, and performance improvements for your systems.',
        animation: maintenance,
        route: '/services/maintenance',
    },
];

function ServicesOverview() {
    return (
        <section className="bg-[var(--color-primary)] text-[var(--color-text)] py-20 px-6">
            <div className="max-w-7xl mx-auto text-center mb-14">
                <h2 className="text-4xl font-bold mb-4">What We Offer</h2>
                <p className="text-[var(--color-muted)]">
                    From design to automation — we create systems that do the work for you.
                </p>
            </div>

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-[#111827] border border-gray-700 rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-lg transition group"
                    >
                        <div className="w-40 h-40 mb-4">
                            <Lottie animationData={service.animation} loop={true} />
                        </div>

                        <h3 className="text-xl font-semibold mb-2 group-hover:text-[var(--color-accent)] transition">
                            {service.title}
                        </h3>

                        <p className="text-sm text-[var(--color-muted)] mb-4">{service.description}</p>

                        <Link
                            to={service.route}
                            className="text-sm text-[var(--color-accent)] hover:underline font-medium"
                        >
                            Learn more →
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ServicesOverview;
