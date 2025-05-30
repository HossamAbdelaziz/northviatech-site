import Lottie from 'lottie-react';
import canadaFlag from '../assets/canada-flag.json';

function WhyChooseUs() {
    const features = [
        {
            title: 'Canadian-Owned & Operated',
            description:
                'NorthViaTech is proudly based in Ontario, Canada. We understand the needs of local businesses and work in your timezone. All development, support, and consulting is done in-house — no outsourcing, ever. Trusted by Canadian professionals looking for real partnerships.',
        },
        {
            title: 'Custom Business Systems',
            description:
                'We design custom software that fits your workflow — not the other way around. From CRMs and booking platforms to internal admin dashboards, every tool we build is crafted for your team’s exact needs.',
        },
        {
            title: 'Automation That Saves Time',
            description:
                'Our systems automate repetitive tasks like scheduling, follow-up emails, payment tracking, reminders, and reports. Clients save 5–20 hours per week on average using our workflow automations.',
        },
        {
            title: 'Mobile-Friendly, Clean Design',
            description:
                'Every tool we build works seamlessly on desktop, tablet, and mobile. Clients can book, pay, or view their data from any device — increasing engagement and reducing friction.',
        },
        {
            title: 'Scalable Tech, Built to Last',
            description:
                'We use technologies like Firebase, React, Stripe, and Make.com — stable, secure, and proven. Whether you grow from 10 to 1,000 users, your system stays fast and reliable.',
        },
        {
            title: 'Support Beyond Launch',
            description:
                'We offer long-term system maintenance, support, updates, and improvements. You’re not just getting a tool — you’re getting a dedicated partner invested in your success.',
        },
    ];

    return (
        <section className="py-20 px-6 bg-[var(--color-primary)] text-[var(--color-text)]">
            <div className="max-w-4xl mx-auto text-center mb-14">
                <h2 className="text-4xl font-bold mb-6">Why Choose NorthViaTech</h2>
                <div className="inline-flex items-center gap-2 bg-[var(--color-accent)] text-white text-sm font-semibold py-2 px-4 rounded-md shadow-md">
                    <Lottie animationData={canadaFlag} className="w-6 h-6" />
                    <span>100% Canadian-Owned • Built in Ontario • Trusted Local Tech Partner</span>
                </div>
            </div>

            <div className="max-w-3xl mx-auto space-y-10">
                {features.map((item, index) => (
                    <div key={index} className="group">
                        <h3 className="text-xl font-semibold text-[var(--color-accent)] mb-1 group-hover:underline transition">
                            {item.title}
                        </h3>
                        <p className="text-sm text-[var(--color-text)] leading-relaxed">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default WhyChooseUs;
