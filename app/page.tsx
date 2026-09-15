"use client";

import {useState} from "react";
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import CourseList from '@/components/CourseList';
import Schedule from '@/components/Schedule';
import { useSchedule } from "@/context/ScheduleContext";

export default function Home() {
    const [query, setQuery] = useState("");
    const [selected, setSelected] = useState("all");
    const {addSectionID, toggleSection, clearAll} = useSchedule();

    return (
        <main>
            <Header query={query} onQueryChange={setQuery} />
            <div className="flex">
                <Sidebar selected={selected} 
                         onSelectedChange={setSelected} 
                         onClearSections={clearAll}
                />
                <div className="flex-1 p-6">
                    <CourseList query={query} 
                                selected={selected}
                                addSectionID={addSectionID}
                                onToggleSection={toggleSection}
                    />
                </div>
                <Schedule />
            </div>
        </main>
    );
}