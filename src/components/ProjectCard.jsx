// src/components/ProjectCard.jsx
import React from 'react';

const ProjectCard = ({ project, onClick }) => {
    const { title, image, shortDescription, status, platforms } = project;

    return (
        <div
            onClick={() => onClick(project)}
            className="cursor-pointer bg-[#111827] border border-gray-700 rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-lg transition group"
        >
            <img
                src={image}
                alt={title}
                className="w-full h-40 object-cover rounded-lg mb-4"
            />

            <h3 className="text-xl font-semibold mb-2 group-hover:text-[var(--color-accent)] transition">
                {title}
            </h3>

            <p className="text-sm text-[var(--color-muted)] mb-4">{shortDescription}</p>

            <div className="flex flex-wrap justify-center gap-2 text-xs">
                {platforms?.map((tag, i) => (
                    <span key={i} className="bg-blue-900 text-blue-300 px-2 py-1 rounded-full">
                        {tag}
                    </span>
                ))}
                <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded-full">{status}</span>
            </div>
        </div>
    );
};

export default ProjectCard;
