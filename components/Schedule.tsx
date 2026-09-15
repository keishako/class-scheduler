"use client";

import Link from "next/link";
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

export default function Schedule() {
    const {addSectionID} = useSchedule();
    const addSections = courses.flatMap((course) => course.sections
        .filter((section) => addSectionID.includes(section.id))
        .map((section) => ({course, section}))
    );

    const totalUnits = addSections.reduce((sum, {course}) => sum + course.units, 0);

    return (
        <aside className="w-120 shrink-0 bg-[#151c2e] text-white p-4">
            <div className="flex items-center justify-between mb-10">
                <span className="font-semibold text-xl">My Schedule</span>
                <span className="text-xs text-black bg-white px-3 py-1 rounded-full">{totalUnits} units</span>
            </div>

            <div className="bg-white rounded-xl overflow-hidden">
                <table className="w-full border-collapse table-fixed">
                    <colgroup>
                        <col className="w-12"/>
                        {days.map((day) => (<col key={day} />))}
                    </colgroup>
                    <thead>
                        <tr className="bg-white">
                            <th className="w-12"></th>
                            {days.map((day) => (
                                <th key={day} className="text-black text-xs font-medium py-2">{day}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {timeSlots.map((timeslot) => (
                            <tr key={timeslot.label}>
                                <td className="text-[10px] text-gray-400 text-right pr-1 pt-2 align-top whitespace-nowrap">{timeslot.label}</td>
                                {days.map((day) => {
                                    const classSlot = addSections.flatMap(({course, section}) => section.schedule
                                        .filter((slot) => {
                                        const dayKey = slot.day === "Thursday" ? "H" : slot.day.slice(0, 1);
                                        return dayKey === day && slot.startTime === timeslot.start;
                                    })
                                        .map((slot) => ({course, section, slot}))
                                    );

                                    return(
                                        <td key={day} className="border-t border-gray-100 align-top p-1 h-12">
                                            {classSlot.map(({course, section, slot}) => (
                                                <div key={section.id + slot.day}
                                                     className={`rounded-mp border-l-4 p-1 mb-0.5 ${schedColors[course.subject] ?? "bg-gray-50 border-gray-400 text-gray-900"}`}
                                                >
                                                    <p className="text-[9px] font-semibold truncate">{course.code}</p>
                                                    <p className="text-[8px] opacity-80">{section.section}</p>
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

            <Link href="/schedule" className="mt-4 block text-center bg-white/10 hover:bg-white/20 transition text-sm font-medium py-2 rounded-md">
                View Full Schedule
            </Link>
        </aside>
    );
}