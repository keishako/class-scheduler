"use client";

import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";
import {courses} from "@/data/courses";
import {useSchedule} from "@/context/ScheduleContext";

const days = ["M", "T", "W", "H", "F", "S"];
const timeSlots = [
    {label:"7:30-9:00", start:"07:30", end:"09:00"},
    {label:"9:15-10:45", start:"09:15", end:"10:45"},
    {label:"11:00-12:30", start:"11:00", end:"12:30"},
    {label:"12:45-2:15", start:"12:45", end:"14:15"},
    {label:"2:30-4:00", start:"14:30", end:"16:00"},
    {label:"4:15-5:45", start:"16:15", end:"17:45"},
];

const schedColors: Record<string, string> = {
    CC: "bg-blue-50 border-blue-500 text-blue-900",
    CS: "bg-green-50 border-green-500 text-green-900",
    ST: "bg-yellow-50 border-yellow-500 text-yellow-900",
    CE: "bg-red-50 border-red-500 text-red-900",
    IT: "bg-purple-50 border-purple-500 text-purple-900",
    GE: "bg-pink-50 border-pink-500 text-pink-900",
}

export default function SchedulePage() {
    const {addSectionID} = useSchedule();
    const addSections = courses.flatMap((course) => course.sections
        .filter((section) => addSectionID.includes(section.id))
        .map((section) => ({course, section}))
    );

    return (
        <main>
        <header className = "w-full bg-[#151c2e]">
            <div className="max-w-6xl mx-auto flex items-center justify-between px-8 py-4">
                <div className="flex items-center gap-4">
                    <Link href="/" className="flex items-center gap-1 text-sm font-medium text-gray-300 hover:text-white">
                        <IoMdArrowRoundBack /> Back to Catalog
                    </Link>
                    <span className="text-white/20">|</span>
                    <span className="text-lg font-bold text-white">SchedHQ</span>
                </div>
            </div>
        </header>

        <div className="max-w-7xl mx-auto p-8">
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full min-w-200 border-collapse table-fixed">
                        <colgroup>
                            <col className="w-20"/>
                                {days.map((day) => (<col key={day} />))}
                            </colgroup>
                            <thead>
                                <tr>
                                    <th className="w-20 border-b border-gray-200"></th>
                                    {days.map((day) => (
                                        <th key={day} className="text-black text-sm font-medium py-3">{day}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {timeSlots.map((timeslot) => (
                                    <tr key={timeslot.label}>
                                        <td className="text-xs text-gray-400 text-right pr-3 pt-3 align-top whitespace-nowrap">{timeslot.label}</td>
                                        {days.map((day) => {
                                            const classSlot = addSections.flatMap(({course, section}) => section.schedule
                                                .filter((slot) => {
                                                const dayKey = slot.day === "Thursday" ? "H" : slot.day.slice(0, 1);
                                                return dayKey === day && slot.startTime === timeslot.start;
                                            })
                                                .map((slot) => ({course, section, slot}))
                                            );

                                            return (
                                                <td key={day} className="border-t border-gray-100 align-top p-1 h-24">
                                                    {classSlot.map(({course, section, slot}) => (
                                                        <div key={section.id + slot.day}
                                                            className={`rounded-md border-l-4 p-2 mb-1 ${schedColors[course.subject] ?? "bg-gray-50 border-gray-400 text-gray-900"}`}
                                                        >
                                                            <p className="text-sm font-semibold">{course.code} | {section.section}</p>
                                                            <p className="text-xs opacity-80">{course.title}</p>
                                                            <p className="text-xs opacity-70 mt-1">{section.instructor} | {section.room}</p>
                                                        </div>
                                                    ))}
                                                </td>
                                            );                                    
                                        })}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    );
}
