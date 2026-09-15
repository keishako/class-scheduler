"use client";

import {createContext, useContext, useState, type ReactNode} from "react";

interface SchedValue {
    addSectionID: string[];
    toggleSection: (sectionID: string) => void;
    clearAll: () => void;
}

export const ScheduleContext = createContext<SchedValue | null>(null);

export function SharedContext({children}: {children: ReactNode}) {
    const [addSectionID, setAddSectionID] = useState<string[]>([]);

    function toggleSection(sectionID: string) {
        setAddSectionID((prev) => prev.includes(sectionID) ? prev.filter((id) => id !== sectionID) : [...prev, sectionID]);
    }

    function clearAll() {
        setAddSectionID([]);
    }

    return(
        <ScheduleContext.Provider value ={{addSectionID, toggleSection, clearAll}}>
            {children}
        </ScheduleContext.Provider>
    );
}

export function useSchedule() {
    const context = useContext(ScheduleContext);
    if(!context)
        throw new Error("ERROR");
    return context;
}
