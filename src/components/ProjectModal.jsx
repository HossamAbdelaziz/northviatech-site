// src/components/ProjectModal.jsx
import React, { useState } from 'react';

const ProjectModal = ({ project, onClose }) => {
    const [showDetails, setShowDetails] = useState(false);
    if (!project) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center px-4 overflow-auto">
            <div className="bg-[#111827] text-white rounded-2xl shadow-lg max-w-3xl w-full p-6 relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white text-xl hover:text-[var(--color-accent)]"
                >
                    ×
                </button>

                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-xl mb-4"
                />

                <h2 className="text-2xl font-bold mb-2">{project.title}</h2>

                <div className="flex flex-wrap gap-2 text-sm mb-3">
                    {project.platforms?.map((tag, i) => (
                        <span
                            key={i}
                            className="bg-blue-800 text-blue-200 px-3 py-1 rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                    <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full">
                        {project.status}
                    </span>
                </div>

                <p className="text-[var(--color-muted)] text-sm mb-4">
                    {project.fullDescription}
                </p>

                {project.link && (
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-2 text-sm text-[var(--color-accent)] hover:underline"
                    >
                        Visit Live Site →
                    </a>
                )}

                {!showDetails ? (
                    <button
                        onClick={() => setShowDetails(true)}
                        className="mt-6 text-sm text-white bg-[var(--color-accent)] px-4 py-2 rounded hover:bg-blue-700 transition"
                    >
                        Read More
                    </button>
                ) : (
                    <div className="mt-6 space-y-6 text-left">
                        <div>
                            <h3 className="text-xl font-semibold mb-2 text-[var(--color-accent)]">User Experience</h3>
                            <ul className="list-disc pl-6 text-sm text-[var(--color-muted)] space-y-1">
                                <li>Signup and profile onboarding flow</li>
                                <li>Book sessions with calendar picker</li>
                                <li>Progress tracker with visual stats</li>
                                <li>Smart reminders and daily tips</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-2 text-[var(--color-accent)]">Coach/Admin Dashboard</h3>
                            <ul className="list-disc pl-6 text-sm text-[var(--color-muted)] space-y-1">
                                <li>View and manage client subscriptions</li>
                                <li>Create and edit custom programs</li>
                                <li>Approve sessions with Zoom link automation</li>
                                <li>Send announcements and reminders</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-2 text-[var(--color-accent)]">Automation Highlights</h3>
                            <ul className="list-disc pl-6 text-sm text-[var(--color-muted)] space-y-1">
                                <li>Auto-reminders for unbooked sessions</li>
                                <li>Program duration tracking</li>
                                <li>Email + WhatsApp integration</li>
                                <li>Scheduled daily announcements</li>
                            </ul>
                        </div>

                        <button
                            onClick={() => setShowDetails(false)}
                            className="text-sm mt-4 text-white underline hover:text-[var(--color-accent)]"
                        >
                            Show Less
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectModal;
