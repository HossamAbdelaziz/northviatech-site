import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import customSystems from '../assets/services/custom-systems.json';
import webAppDev from '../assets/services/web-app-dev.json';
import automation from '../assets/services/automation.json';
import payments from '../assets/services/payments.json';
import aiTools from '../assets/services/ai-tools.json';
import maintenance from '../assets/services/maintenance.json';
import Lottie from 'lottie-react';

const services = {
    'custom-systems': {
        title: 'Custom Systems',
        description: 'We build smart systems around your workflow — CRMs, admin panels, intake forms, and more.',
        animation: customSystems,
    },
    'web-app-dev': {
        title: 'Web & App Development',
        description: 'Professional websites and apps that are clean, fast, and mobile-ready.',
        details: `We use React, TailwindCSS, and Vite to build scalable frontends. Hosting with Vercel, backend with Firebase or Express — our stack is modern and reliable.`,
        animation: webAppDev,
    },
    'automation': {
        title: 'Automation',
        description: 'Automate your business tasks and reduce manual effort.',
        details: `From sending automated emails with Make or Brevo, to moving data between forms, sheets, and CRMs — we help you save time.`,
        animation: automation,
    },
    'payments': {
        title: 'Payments & Subscriptions',
        description: 'Stripe-powered systems to manage one-time or recurring payments.',
        details: `We build custom checkout flows, invoice systems, and subscription management tied directly to your services. Great for coaching programs, rentals, and services.`,
        animation: payments,
    },
    'ai-tools': {
        title: 'AI Tools',
        description: 'Build smart assistants and reminders that work for your users.',
        details: `Whether it's generating reminders, analyzing user data, or triggering smart actions, we help you integrate lightweight AI tools using OpenAI, Firestore logic, and conditional automation.`,
        animation: aiTools,
    },
    'maintenance': {
        title: 'Maintenance & Support',
        description: 'We keep your systems running smoothly.',
        details: `You get ongoing updates, bug fixes, performance improvements, and backend support — all with a focus on reliability and growth.`,
        animation: maintenance,
    },
};

const ServiceDetail = () => {
    const { slug } = useParams();
    const service = services[slug];

    useEffect(() => {
        window.scrollTo(0, 0); // scroll to top on page load
    }, []);

    if (!service) {
        return (
            <div className="text-center py-20 text-white">
                <h1 className="text-3xl font-bold">Service Not Found</h1>
                <p className="text-gray-400 mt-4">Please check the URL or go back to services.</p>
            </div>
        );
    }

    // ✅ Full rich section for "custom-systems"
    if (slug === 'custom-systems') {
        return (
            <div className="min-h-screen bg-[var(--color-primary)] text-white pt-24 px-4 pb-20">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-10">
                        <h1 className="text-4xl font-bold mb-2">Custom Systems That Work the Way You Do</h1>
                        <p className="text-[var(--color-muted)]">
                            We don’t just build tools — we design fully tailored systems that help your business run smoother, faster, and smarter.
                        </p>
                    </div>

                    <div className="flex flex-col items-center mb-12 md:mb-16">
                        <div className="w-full max-w-[400px] md:max-w-[480px] lg:max-w-[540px] xl:max-w-[600px]">
                            <Lottie animationData={service.animation} loop={true} />
                        </div>
                    </div>


                    <div className="text-lg leading-8 text-[var(--color-muted)] space-y-8">
                        <p>
                            Most businesses waste hours each week using spreadsheets, juggling emails, or jumping between disconnected apps.
                            We fix that. At <strong className="text-white">NorthViaTech</strong>, we build custom internal systems that match the way your business actually works — not the other way around.
                        </p>

                        <p>
                            Whether you're handling client intake, sending quotes, tracking jobs, managing rentals, or following up with leads — we design a solution that does the work for you.
                            No templates. No bloated software. Just <strong className="text-white">a clean, efficient system built for your workflow.</strong>
                        </p>

                        <p>
                            These systems are designed to:
                            <ul className="list-disc ml-6 mt-2 space-y-1">
                                <li>Collect and organize your data automatically</li>
                                <li>Send reminders, invoices, or emails without manual work</li>
                                <li>Help your team stay on the same page</li>
                                <li>Prevent missed follow-ups, late replies, or admin errors</li>
                            </ul>
                        </p>

                        <p>
                            <strong className="text-white">The result?</strong><br />
                            You save hours every week, reduce stress, and deliver a smoother experience to your clients — all while focusing on the work that actually grows your business.
                        </p>

                        <p>
                            We use powerful tools like <strong>Firebase, Google Sheets, Airtable, Stripe, Make.com, EmailJS</strong> and more — all connected through a sleek dashboard you control.
                        </p>

                        <div className="mt-10 text-center text-xl text-white font-semibold">
                            Let's build a system that saves you time, cuts the busywork, and scales with your business.
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    if (slug === 'web-app-dev') {
        return (
            <div className="min-h-screen bg-[var(--color-primary)] text-white pt-24 px-4 pb-20">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-10">
                        <h1 className="text-4xl font-bold mb-2">Website & App Development</h1>
                        <p className="text-[var(--color-muted)]">
                            Build your online presence with a professional website and mobile app that speaks for your brand — and works for your clients.
                        </p>
                    </div>

                    <div className="flex flex-col items-center mb-12 md:mb-16">
                        <div className="w-full max-w-[400px] md:max-w-[480px] lg:max-w-[530px] xl:max-w-[600px]">
                            <Lottie animationData={service.animation} loop={true} />
                        </div>
                    </div>


                    <div className="text-lg leading-8 text-[var(--color-muted)] space-y-8">
                        <p>
                            First impressions matter — and today, your website and mobile app are the first places your clients go to learn about your business.
                        </p>

                        <p>
                            At <strong className="text-white">NorthViaTech</strong>, we design clean, fast, and professional websites that look great on every device — and turn visitors into customers.
                        </p>

                        <p>
                            Need to take it further? We also turn your platform into a full mobile app — available on both <strong>Android and iOS</strong> — so your users can connect with your brand anytime, anywhere.
                        </p>

                        <ul className="list-disc ml-6 mt-2 space-y-1">
                            <li>Launch a branded mobile app without a massive development budget</li>
                            <li>Improve customer loyalty with better user experience</li>
                            <li>Make booking, chatting, or accessing services easier for your users</li>
                            <li>Increase your visibility on the App Store and Google Play</li>
                        </ul>

                        <p>
                            All of our work is built around your goals — whether that’s showcasing your services, selling online, collecting leads, or managing clients.
                        </p>

                        <p>
                            <strong className="text-white">Your business deserves more than a template site.</strong><br />
                            We help you launch a digital experience that feels premium, works perfectly, and supports your growth.
                        </p>

                        <div className="mt-10 text-center text-xl text-white font-semibold">
                            Let’s bring your brand online — and into your clients’ hands.
                        </div>
                    </div>
                </div>
            </div>
        );
    }



    if (slug === 'automation') {
        return (
            <div className="min-h-screen bg-[var(--color-primary)] text-white pt-24 px-4 pb-20">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-10">
                        <h1 className="text-4xl font-bold mb-2">Business Automation That Actually Works</h1>
                        <p className="text-[var(--color-muted)]">
                            Free your team from repetitive tasks. We automate your workflows so you can focus on growth.
                        </p>
                    </div>

                    <div className="flex flex-col items-center mb-12 md:mb-16">
                        <div className="w-full max-w-[400px] md:max-w-[480px] lg:max-w-[540px] xl:max-w-[600px]">
                            <Lottie animationData={service.animation} loop={true} />
                        </div>
                    </div>


                    <div className="text-lg leading-8 text-[var(--color-muted)] space-y-8">
                        <p>
                            If your team is still copy-pasting emails, moving form responses manually, or updating spreadsheets by hand — you’re wasting time and losing opportunities.
                        </p>

                        <p>
                            At <strong className="text-white">NorthViaTech</strong>, we create smart, low-maintenance automations that save hours of manual work every week.
                        </p>

                        <p>
                            We connect the tools you're already using — like <strong>Google Sheets, Typeform, Notion, Email, WhatsApp, Firebase, Airtable</strong> — and build automations that run 24/7 in the background.
                        </p>

                        <ul className="list-disc ml-6 mt-2 space-y-1">
                            <li>Form submissions → automatic CRM entry</li>
                            <li>New client added → email or WhatsApp welcome message</li>
                            <li>Booking made → auto calendar sync + email confirmation</li>
                            <li>Follow-up reminders based on time or activity</li>
                            <li>Client no-show? Send an automatic check-in message</li>
                        </ul>

                        <p>
                            We use tools like <strong>Make.com, Brevo, and Firebase Functions</strong> to build scalable automations without needing to hire a developer every time you want to change something.
                        </p>

                        <p>
                            <strong className="text-white">The result?</strong> You save time, reduce errors, and create a smoother experience for your clients and your team.
                        </p>

                        <div className="mt-10 text-center text-xl text-white font-semibold">
                            Start automating the boring stuff — and focus on what actually moves your business forward.
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (slug === 'payments') {
        return (
            <div className="min-h-screen bg-[var(--color-primary)] text-white pt-24 px-4 pb-20">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-10">
                        <h1 className="text-4xl font-bold mb-2">Online Payments & Subscription Systems</h1>
                        <p className="text-[var(--color-muted)]">
                            Get paid on time, every time — with smart, secure payment systems tailored to your business.
                        </p>
                    </div>

                    <div className="flex flex-col items-center mb-12 md:mb-16">
                        <div className="w-full max-w-[400px] md:max-w-[480px] lg:max-w-[540px] xl:max-w-[600px]">
                            <Lottie animationData={service.animation} loop={true} />
                        </div>
                    </div>


                    <div className="text-lg leading-8 text-[var(--color-muted)] space-y-8">
                        <p>
                            Stop chasing payments. We build custom payment systems that make it easy for your clients to pay — and easy for you to stay organized.
                        </p>

                        <p>
                            Whether you sell one-time services or run monthly programs, we create secure checkout experiences and subscription flows that look professional and work seamlessly.
                        </p>

                        <ul className="list-disc ml-6 mt-2 space-y-1">
                            <li>One-time payments for services, packages, or digital products</li>
                            <li>Monthly or weekly subscriptions with automated billing</li>
                            <li>Instant confirmation emails and invoices</li>
                            <li>Automatic reminders for unpaid or expiring plans</li>
                            <li>Optional discounts, coupon codes, or free trials</li>
                        </ul>

                        <p>
                            We use trusted tools like <strong className="text-white">Stripe</strong> to make sure your clients can pay securely — with credit card, Apple Pay, or Google Pay.
                        </p>

                        <p>
                            No more manual invoices, missed payments, or follow-up chaos. Everything is tracked and logged — and you can access your dashboard at any time to see who paid, when, and for what.
                        </p>

                        <p>
                            <strong className="text-white">The result?</strong><br />
                            You get paid faster, look more professional, and spend less time dealing with money — and more time delivering value.
                        </p>

                        <div className="mt-10 text-center text-xl text-white font-semibold">
                            Let your payment system do the work — while you focus on growing your business.
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (slug === 'ai-tools') {
        return (
            <div className="min-h-screen bg-[var(--color-primary)] text-white pt-24 px-4 pb-20">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-10">
                        <h1 className="text-4xl font-bold mb-2">AI Tools & Smart Automations</h1>
                        <p className="text-[var(--color-muted)]">
                            Build smarter systems that save time, reduce manual work, and help your business respond faster.
                        </p>
                    </div>

                    <div className="flex flex-col items-center mb-12 md:mb-16">
                        <div className="w-full max-w-[400px] md:max-w-[480px] lg:max-w-[540px] xl:max-w-[600px]">
                            <Lottie animationData={service.animation} loop={true} />
                        </div>
                    </div>


                    <div className="text-lg leading-8 text-[var(--color-muted)] space-y-8">
                        <p>
                            You don’t need a massive AI platform to get real results. With the right setup, even small businesses can use lightweight AI tools to improve communication, trigger smart reminders, and make decisions automatically.
                        </p>

                        <p>
                            At <strong className="text-white">NorthViaTech</strong>, we help you integrate intelligent tools into your existing system — with simple automations that feel like magic to your clients.
                        </p>

                        <ul className="list-disc ml-6 mt-2 space-y-1">
                            <li>Smart reminders based on user behavior or time</li>
                            <li>Personalized follow-ups when no action is taken</li>
                            <li>Auto-generated responses to FAQs or booking requests</li>
                            <li>Detect when a client needs attention and notify your team</li>
                            <li>Use ChatGPT and OpenAI to summarize notes, draft replies, or guide user steps</li>
                        </ul>

                        <p>
                            We don’t build robots — we build clean, smart systems that help you stay one step ahead without needing extra staff or time.
                        </p>

                        <p>
                            Whether it’s a simple client nudge or a weekly behavior-based email, our tools help you automate the things that matter — while keeping your brand human.
                        </p>

                        <p>
                            <strong className="text-white">The result?</strong><br />
                            Happier clients, faster responses, fewer mistakes — and more time back in your day.
                        </p>

                        <div className="mt-10 text-center text-xl text-white font-semibold">
                            Add a little intelligence to your workflow — and let your system work smarter, not harder.
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (slug === 'maintenance') {
        return (
            <div className="min-h-screen bg-[var(--color-primary)] text-white pt-24 px-4 pb-20">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-10">
                        <h1 className="text-4xl font-bold mb-2">Ongoing Maintenance & Support</h1>
                        <p className="text-[var(--color-muted)]">
                            Stay secure, up-to-date, and worry-free — with long-term support built into every system we deliver.
                        </p>
                    </div>

                    <div className="flex flex-col items-center mb-12 md:mb-16">
                        <div className="w-full max-w-[400px] md:max-w-[480px] lg:max-w-[540px] xl:max-w-[600px]">
                            <Lottie animationData={service.animation} loop={true} />
                        </div>
                    </div>


                    <div className="text-lg leading-8 text-[var(--color-muted)] space-y-8">
                        <p>
                            Great systems don’t just launch and forget. They evolve — and so do the needs of your business.
                            That’s why at <strong className="text-white">NorthViaTech</strong>, we offer professional ongoing support to make sure your platform always runs smoothly.
                        </p>

                        <p>
                            From security updates and feature improvements to emergency fixes and content changes — we handle the technical side so you can focus on your business.
                        </p>

                        <ul className="list-disc ml-6 mt-2 space-y-1">
                            <li>Regular maintenance and security updates</li>
                            <li>Performance checks and speed optimization</li>
                            <li>Bug fixes and feature improvements</li>
                            <li>Content or product updates on request</li>
                            <li>Ongoing support and advice when you need it</li>
                        </ul>

                        <p>
                            You won’t be left guessing. You’ll have a direct line to our team — with a plan that fits your goals and budget.
                            Whether it’s a quick text, an email request, or a scheduled review — we’re here to help your system grow with you.
                        </p>

                        <p>
                            <strong className="text-white">The result?</strong><br />
                            Your platform stays fast, clean, secure, and effective — no matter how your business grows or shifts.
                        </p>

                        <div className="mt-10 text-center text-xl text-white font-semibold">
                            Peace of mind, long-term support, and a system you can trust — that’s what we deliver.
                        </div>
                    </div>
                </div>
            </div>
        );
    }


    // 🔁 Default layout for other services
    return (
        <div className="min-h-screen bg-[var(--color-primary)] text-white pt-24 px-4">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold mb-2">{service.title}</h1>
                    <p className="text-[var(--color-muted)]">{service.description}</p>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-10">
                    <div className="w-full md:w-1/2">
                        <Lottie animationData={service.animation} loop={true} />
                    </div>
                    <div className="w-full md:w-1/2 text-lg leading-7 text-[var(--color-muted)]">
                        {service.details}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;
