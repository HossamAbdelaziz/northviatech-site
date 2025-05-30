function SuccessSnapshotsSection() {
    const stories = [
        {
            industry: 'Coaches & Trainers',
            summary:
                'We built a full coaching system with intake forms, progress tracking, booking, and WhatsApp reminders. The coach now manages 40+ clients without manual effort and doubled client retention.',
        },
        {
            industry: 'Vehicle Rentals',
            summary:
                'For a mid-size car rental business, we created a booking platform with digital contracts, payment tracking, and real-time availability. Staff now save 15+ hours/week and handle more reservations with fewer errors.',
        },
        {
            industry: 'Mechanic Shops',
            summary:
                'We developed a smart invoice and inventory tool for a mechanic shop. Now, they scan VIN numbers, track parts usage, and automatically update customer records — no more lost paperwork.',
        },
        {
            industry: 'Clinics',
            summary:
                'For a private wellness clinic, we automated appointment scheduling, reminders, and secure document handling. No-shows dropped by 70% and patients can now manage everything from their phones.',
        },
        {
            industry: 'Beauty & Wellness Studios',
            summary:
                'We created a booking and payment system for a salon. It includes client notes, staff schedules, and automated feedback collection — boosting client satisfaction and recurring bookings.',
        },
        {
            industry: 'Admin & HR Teams',
            summary:
                'An internal HR team now uses our custom dashboards to track new hires, training logs, and contract renewals — with auto-reminders for key deadlines and full Google Workspace integration.',
        },
    ];

    return (
        <section className="py-20 px-6 bg-[var(--color-primary)] text-[var(--color-text)]">
            <div className="max-w-7xl mx-auto text-center mb-16">
                <h2 className="text-4xl font-bold mb-2">Real Results. Real Businesses.</h2>
                <p className="text-[var(--color-muted)] max-w-3xl mx-auto">
                    Our systems are already saving hours and boosting performance across industries.
                </p>
            </div>

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                {stories.map((item, index) => (
                    <div
                        key={index}
                        className="bg-[#111827] border border-gray-700 rounded-xl p-6 text-left hover:shadow-lg transition-all"
                    >
                        <h3 className="text-md font-semibold text-[var(--color-accent)] mb-2">
                            {item.industry}
                        </h3>
                        <p className="text-sm text-[var(--color-text)]">{item.summary}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default SuccessSnapshotsSection;
