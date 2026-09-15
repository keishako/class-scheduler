"use client";

import {useState} from "react";
import type {Course} from "@/types/course";
import { RiArrowDropDownLine , RiArrowDropUpLine } from "react-icons/ri";

const courseColors: Record<string, string> = {
    CC: "bg-blue-500",
    CS: "bg-green-500",
    ST: "bg-yellow-500",
    CE: "bg-red-500",
    IT: "bg-purple-500",
    GE: "bg-pink-500",
};

const dayLetters: Record<string, string> = {
    Monday: "M",
    Tuesday: "T",
    Wednesday: "W",
    Thursday: "H",
    Friday: "F",
    Saturday: "S",
};

function formatTime(time: string) {
    const [hour1, min] = time.split(":");
    const hour = parseInt(hour1, 10);
    const period = hour >= 12 ? "PM" : "AM";
    const hour2 = hour % 12 == 0 ? 12 : hour % 12;
    return `${hour2}:${min} ${period}`;
}

interface Toggle {
    course: Course;
    addSectionID: string[];
    onToggleSection: (sectionID: string) => void;
}

export default function CourseCard({course, addSectionID, onToggleSection}: Toggle) {
    const[expanded, setExpanded] = useState(false);
    const colors = courseColors[course.subject] ?? "bg-gray-400";

    const changeAdd = (sectionID: string) => {
        const switchAdd = course.sections.find((section) => section.id !== sectionID && addSectionID.includes(section.id));

        if(switchAdd) 
            onToggleSection(switchAdd.id);
        onToggleSection(sectionID);
    }

    return (
        <div className="relative bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className={`absolute left-0 top-0 bottom-0 w-2 ${colors}`} />
            <button onClick={() => setExpanded(!expanded)}
                    className="w-full flex items-start justify-between px-5 py-4 text-left">
                <div>
                    <div className="flex items-center gap-3 mb-1">
                        <span className="text-xs font-semibold font-mono text-gray-400">{course.code}</span>
                        <span className="font-semibold text-gray-900">{course.title}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                        <span className="text-xs text-gray-500">{course.subject}</span>
                        <span className="text-xs text-gray-500">{course.units} units</span>
                        <span className="text-xs text-gray-500">{course.sections.length} sections</span>
                    </div>
                </div>

                <span className="text-gray-800 text-3xl">{expanded ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}</span>
            </button>

            {expanded && (
                <div className="border-t border-gray-100">
                    <div className="grid grid-cols-[60px_1fr_1fr_1fr_auto] gap-4 px-5 py-2 text-xs font-medium text-gray-500">
                        <span />
                        <span>INSTRUCTOR</span>
                        <span>SCHEDULE</span>
                        <span>CAPACITY</span>
                    </div>

                {course.sections.map((section) => (
                    <div key={section.id} 
                        className="grid grid-cols-[60px_1fr_1fr_1fr_auto] gap-4 items-center px-5 py-3 border-t border-gray-100">
                        <span className="text-xs text-gray-500">{section.section}</span>
                        <div>
                            <p className="text-sm font-medium text-gray-900">{section.instructor}</p>
                            <p className="text-xs text-gray-500">{section.room}</p>
                        </div>

                        <span className="text-sm text-gray-700">
                            {section.schedule.map((slot) => dayLetters[slot.day]).join("")}{" "}
                            {formatTime(section.schedule[0]?.startTime ?? "")} - {formatTime(section.schedule[0]?.endTime ?? "")}
                        </span>
                        <span className="text-xs text-gray-400 px-16">{section.enrolled}/{section.enrollCap}</span>
                       
                        {addSectionID.includes(section.id) ? (
                            <button onClick={() => onToggleSection(section.id)}
                                    className="w-20 text-sm font-medium bg-red-100 text-red-600 px-3.5 py-2 rounded-xl hover:bg-red-50 transition">
                                Remove
                            </button>
                        ) : (
                            <button onClick={() => changeAdd(section.id)}
                                    className="w-20 text-sm font-medium bg-blue-950 text-white px-4 py-1.5 rounded-xl hover:bg-blue-900 transition">
                                Add
                            </button>
                        )} 
                    </div>
                ))}
                </div>
            )}
        </div>
    );
}