// src/pages/Projects.jsx
import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';

const projectData = [
    {
        id: 'asmaa',
        title: 'Coach Asmaa App',
        platforms: ['Website', 'iOS App', 'Android App'],
        status: 'Live',
        image: '/assets/projects/asmaa-app.jpg',
        shortDescription: 'Bilingual health coaching platform with booking, reminders, and dashboard.',
        fullDescription:
            'This platform allows clients to book weekly coaching sessions, track recovery progress, receive smart reminders, and communicate with the coach. Built with Firebase, Stripe, React, and Capacitor for mobile deployment.',
        link: 'https://coach.asmaagad.com/',
    },
    {
        id: 'hoj',
        title: 'HOJ Rentals',
        platforms: ['Website'],
        status: 'In Progress',
        image: '/assets/projects/hoj-rentals.jpg',
        shortDescription: 'Fleet rental system with smart pricing and reservations.',
        fullDescription:
            'A professional web app for vehicle rentals with dynamic rate calculations, multi-step booking, inventory management, and Stripe integration. Mobile version coming soon.',
        link: '',
    },
    {
        id: 'baller',
        title: 'The Baller Factory',
        platforms: ['Website'],
        status: 'Coming Soon',
        image: '/assets/projects/baller-factory.jpg',
        shortDescription: 'Sports training website with coach profiles and registration system.',
        fullDescription:
            'A clean, modern website built for a sports academy. Includes team section, booking CTA, and expansion plans for a full client portal with scheduling and payments.',
        link: '',
    },
    {
        id: 'jl-crm',
        title: 'JL Upholstery CRM',
        platforms: ['System'],
        status: 'Planning',
        image: '/assets/projects/jl-crm.jpg',
        shortDescription: 'Quote automation system for upholstery services.',
        fullDescription:
            'A CRM planned for field estimations with a Google Sheets backend, customer data sync, quote tracking, and PDF invoice generation.',
        link: '',
    },
    {
        id: 'elite-car',
        title: 'Elite Car Shine',
        platforms: ['Website', 'Automation'],
        status: 'Early Stage',
        image: '/assets/projects/elitecarshine.jpg',
        shortDescription: 'Car detailing automation setup using WordPress + Make.',
        fullDescription:
            'A smart setup to capture booking data, automate confirmation emails, and sync into a Google Sheets database using Make and Google Workspace tools.',
        link: '',
    },
];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section className="bg-[var(--color-primary)] text-[var(--color-text)] py-20 px-6">
            <div className="max-w-7xl mx-auto text-center mb-14">
                <h2 className="text-4xl font-bold mb-4">Our Projects</h2>
                <p className="text-[var(--color-muted)]">
                    Real tools we’ve built for real businesses — from mobile apps to internal systems.
                </p>
            </div>

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                {projectData.map((project, index) => (
                    <ProjectCard
                        key={index}
                        project={project}
                        onClick={setSelectedProject}
                    />
                ))}
            </div>

            <ProjectModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </section>
    );
};

export default Projects;
