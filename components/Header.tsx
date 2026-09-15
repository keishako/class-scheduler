"use client";

import {FaSearch} from 'react-icons/fa';

interface Search {
    query: string;
    onQueryChange: (value: string) => void;
}

export default function Header({query, onQueryChange}: Search) {
    return (
        <header className = "w-full bg-[#151c2e]">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center gap-3 sm:gap-0 sm:px-8 py-4">
                <a className="text-xl font-bold text-white">
                    SchedHQ
                </a>

                <div className="flex-1" />
                <div className="input-wrapper max-w-lg">
                <FaSearch id="search-icon" className="text-gray-500 text-base"/>
                <input
                    placeholder="Search courses..."
                    value={query}
                    onChange={(e) => onQueryChange(e.target.value)}
                />
                </div>
                <div className="flex-1" />
            </div>
        </header>
    )
}