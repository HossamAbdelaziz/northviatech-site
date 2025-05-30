import { useState } from 'react';

function CTASection() {
    const [showForm, setShowForm] = useState(false);

    return (
        <section className="py-24 px-6 bg-[var(--color-primary)] text-[var(--color-text)] relative z-10">
            <div className="max-w-3xl mx-auto bg-[#111827] border border-[var(--color-accent)] rounded-2xl shadow-xl p-10 text-center relative">
                <h2 className="text-3xl font-bold mb-4">Ready to Upgrade Your Business Systems?</h2>
                <p className="text-[var(--color-muted)] mb-8">
                    Let’s build smart tools that automate your work and grow your business — 100% custom,
                    100% Canadian.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
                    <button
                        onClick={() => setShowForm(true)}
                        className="bg-[var(--color-accent)] text-white font-semibold px-6 py-3 rounded-md hover:opacity-90 transition"
                    >
                        Get a Free Quote
                    </button>
                    <a
                        href="/projects"
                        className="border border-[var(--color-accent)] text-[var(--color-accent)] px-6 py-3 rounded-md hover:bg-[var(--color-accent)] hover:text-white transition font-semibold"
                    >
                        See Live Demos
                    </a>
                </div>

                <div className="text-sm text-[var(--color-muted)]">
                    📞 (647) 555-1234 &nbsp; • &nbsp; ✉️ hello@northviatech.com
                </div>
            </div>

            {/* Quote Form Modal */}
            {showForm && (
                <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
                    <div className="bg-[#111827] w-full max-w-md rounded-xl p-8 shadow-lg border border-[var(--color-accent)] relative">
                        <h3 className="text-xl font-semibold text-[var(--color-accent)] mb-4">
                            Get a Free Quote
                        </h3>

                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full px-4 py-2 bg-[#1f2937] border border-gray-600 rounded-md text-sm text-white"
                            />
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full px-4 py-2 bg-[#1f2937] border border-gray-600 rounded-md text-sm text-white"
                            />
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className="w-full px-4 py-2 bg-[#1f2937] border border-gray-600 rounded-md text-sm text-white"
                            />
                            <textarea
                                rows="4"
                                placeholder="Tell us more about your business or idea..."
                                className="w-full px-4 py-2 bg-[#1f2937] border border-gray-600 rounded-md text-sm text-white"
                            ></textarea>

                            <button
                                type="submit"
                                className="w-full bg-[var(--color-accent)] text-white font-semibold py-2 rounded-md hover:opacity-90 transition"
                            >
                                Submit Request
                            </button>
                        </form>

                        <button
                            onClick={() => setShowForm(false)}
                            className="absolute top-2 right-3 text-[var(--color-muted)] hover:text-white text-xl"
                        >
                            &times;
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}

export default CTASection;
