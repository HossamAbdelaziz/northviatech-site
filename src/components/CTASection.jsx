import { useState, useEffect } from 'react';

function CTASection() {
    const [showForm, setShowForm] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [bestTime, setBestTime] = useState('');
    const [customTime, setCustomTime] = useState('');
    const [status, setStatus] = useState('');
    const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
    const RECAPTCHA_KEY = process.env.REACT_APP_RECAPTCHA_SITE_KEY;


    const sendEmail = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        let token = '';
        try {
            await new Promise((resolve, reject) => {
                if (!window.grecaptcha) {
                    reject('reCAPTCHA not loaded');
                }

                window.grecaptcha.ready(() => {
                    window.grecaptcha
                        .execute(RECAPTCHA_KEY, { action: 'submit' })

                        .then((t) => {
                            if (!t) {
                                reject('No token returned');
                            } else {
                                token = t;
                                resolve();
                            }
                        }).catch(reject);
                });
            });
        } catch (err) {
            console.error('❌ reCAPTCHA Error:', err);
            setStatus('⚠️ reCAPTCHA verification failed.');
            return;
        }

        const payload = {
            from_name: name,
            from_email: email,
            phone_number: phone,
            message,
            best_time: bestTime === 'Other' ? customTime : bestTime,
            token,
        };

        try {
            const response = await fetch(`${BACKEND_URL}/send-email`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            const result = await response.json();

            if (result.success) {
                setStatus('✅ Message sent successfully!');
                setName('');
                setEmail('');
                setPhone('');
                setMessage('');
                setBestTime('');
                setCustomTime('');
            } else {
                setStatus('❌ Failed to send. Please try again.');
            }
        } catch (error) {
            console.error('❌ Server Error:', error);
            setStatus('❌ Server error. Please try again later.');
        }
    };

    useEffect(() => {
        if (!window.grecaptcha) {
            const script = document.createElement('script');
            script.src = 'https://www.google.com/recaptcha/api.js?render=6LebClIrAAAAAFf6l9PiOH0LbCnWZ4sWcciIUSBJ';
            script.async = true;
            script.defer = true;
            document.body.appendChild(script);
        }
    }, []);

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
                    📞 (647) 675-3343 &nbsp; • &nbsp; ✉️ info@northviatech.com
                </div>
            </div>

            {/* Quote Form Modal */}
            {showForm && (
                <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
                    <div className="bg-[#111827] w-full max-w-md rounded-xl p-8 shadow-lg border border-[var(--color-accent)] relative">
                        <h3 className="text-xl font-semibold text-[var(--color-accent)] mb-4">
                            Get a Free Quote
                        </h3>

                        <form onSubmit={sendEmail} className="space-y-4">

                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Your Name"
                                className="w-full px-4 py-2 bg-[#1f2937] border border-gray-600 rounded-md text-sm text-white"
                                required
                            />

                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email Address"
                                className="w-full px-4 py-2 bg-[#1f2937] border border-gray-600 rounded-md text-sm text-white"
                                required
                            />

                            <input
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="Phone Number"
                                className="w-full px-4 py-2 bg-[#1f2937] border border-gray-600 rounded-md text-sm text-white"
                            />

                            <textarea
                                rows="4"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Tell us more about your business or idea..."
                                className="w-full px-4 py-2 bg-[#1f2937] border border-gray-600 rounded-md text-sm text-white"
                            ></textarea>

                            <select
                                value={bestTime}
                                onChange={(e) => setBestTime(e.target.value)}
                                className="w-full px-4 py-2 bg-[#1f2937] border border-gray-600 rounded-md text-sm text-white"
                            >
                                <option value="">Best time to reach you?</option>
                                <option value="Morning (9am–12pm)">Morning (9am–12pm)</option>
                                <option value="Afternoon (12pm–4pm)">Afternoon (12pm–4pm)</option>
                                <option value="Evening (4pm–8pm)">Evening (4pm–8pm)</option>
                                <option value="Weekend">Weekend</option>
                                <option value="Anytime">Anytime</option>
                                <option value="Other">Other</option>
                            </select>

                            {bestTime === 'Other' && (
                                <input
                                    type="text"
                                    placeholder="Enter preferred time"
                                    value={customTime}
                                    onChange={(e) => setCustomTime(e.target.value)}
                                    className="w-full px-4 py-2 bg-[#1f2937] border border-gray-600 rounded-md text-sm text-white"
                                />
                            )}

                            <button
                                type="submit"
                                className="w-full bg-[var(--color-accent)] text-white font-semibold py-2 rounded-md hover:opacity-90 transition"
                            >
                                Submit Request
                            </button>
                            {status && (
                                <p className="text-sm text-white/80 mt-2">{status}</p>
                            )}
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
