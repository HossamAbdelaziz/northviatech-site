function IndustriesSection() {
    const industries = [
        { icon: '🏥', name: 'Clinics & Healthcare' },
        { icon: '🚗', name: 'Car Rentals' },
        { icon: '🧠', name: 'Coaches & Trainers' },
        { icon: '🛠️', name: 'Home Services' },
        { icon: '🛍️', name: 'Small Shops' },
        { icon: '🗂️', name: 'Admin / HR Teams' },
    ];

    return (
        <section className="py-20 px-6 bg-[var(--color-primary)] relative z-10">
            <div className="max-w-7xl mx-auto text-center mb-14">
                <h2 className="text-4xl font-bold mb-2">Industries We Help</h2>
                <div className="w-16 h-1 mx-auto bg-[var(--color-accent)] rounded-full mb-4"></div>
                <p className="text-[var(--color-muted)]">
                    Our systems are tailored for real businesses with real workflow needs.
                </p>
            </div>

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                {industries.map((item, index) => (
                    <div
                        key={index}
                        className="bg-[#111827] border border-gray-700 rounded-2xl p-6 text-center shadow-md hover:shadow-xl hover:border-[var(--color-accent)] transition-all duration-300 group"
                    >
                        <div className="text-5xl mb-4 group-hover:scale-110 transition">{item.icon}</div>
                        <h3 className="text-lg font-semibold group-hover:text-[var(--color-accent)] transition">
                            {item.name}
                        </h3>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default IndustriesSection;
