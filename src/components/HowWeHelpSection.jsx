function HowWeHelpSection() {
    const benefits = [
        {
            title: 'Automate Repetitive Tasks',
            description:
                'We design automation systems that handle repetitive admin work like email responses, booking confirmations, payment tracking, and more — saving you hours every week.',
        },
        {
            title: 'Smart Client Onboarding',
            description:
                'Automatically collect and manage client data with intake forms, CRM tools, and custom onboarding flows — no more manual data entry or follow-ups.',
        },
        {
            title: 'Integrated Payment Solutions',
            description:
                'Accept payments securely with custom Stripe, PayPal, or subscription setups built into your system. Get paid faster and more reliably.',
        },
        {
            title: 'Booking & Scheduling Systems',
            description:
                'Let your clients book sessions, appointments, or services with ease. Real-time availability, rescheduling, and calendar sync all included.',
        },
        {
            title: 'Real-Time Dashboards & Reports',
            description:
                'Track user actions, view booking stats, and monitor key metrics with custom admin dashboards tailored to your workflow.',
        },
        {
            title: 'Client Portals & CRM Tools',
            description:
                'Create secure portals where clients can view their history, upcoming sessions, invoices, and more — boosting engagement and transparency.',
        },
        {
            title: 'Mobile-Optimized Systems',
            description:
                'Everything we build works perfectly on both web and mobile. Your clients can book, pay, and interact from any device.',
        },
        {
            title: 'Multi-Language Support',
            description:
                'Reach a global audience with built-in multilingual support. Translate your system into Arabic, English, or any language you need.',
        },
        {
            title: 'Connect All Your Tools',
            description:
                'We integrate with Stripe, Google Calendar, Zoom, WhatsApp, Brevo, Make.com, and more — building one connected ecosystem for your business.',
        },
    ];

    return (
        <section className="py-20 px-6 bg-[var(--color-primary)] text-[var(--color-text)]">
            <div className="max-w-7xl mx-auto text-center mb-16">
                <h2 className="text-4xl font-bold mb-2">How We Help Your Business</h2>
                <p className="text-[var(--color-muted)] max-w-3xl mx-auto">
                    From automation to dashboards, our systems are designed to streamline operations, reduce
                    errors, and give you back your time.
                </p>
            </div>

            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                {benefits.map((item, index) => (
                    <div
                        key={index}
                        className="bg-[#111827] border border-gray-700 rounded-xl p-6 text-left hover:shadow-lg transition-all"
                    >
                        <h3 className="text-xl font-semibold mb-2 text-[var(--color-accent)]">
                            {item.title}
                        </h3>
                        <p className="text-sm text-[var(--color-text)]">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default HowWeHelpSection;
