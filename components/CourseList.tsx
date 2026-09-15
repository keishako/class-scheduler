import CourseCard from "@/components/CourseCard";
import {courses} from "@/data/courses";

interface Filters {
    query: string;
    selected: string;
    addSectionID: string[];
    onToggleSection: (sectionID: string) => void;
}

export default function CourseList({query, selected, addSectionID, onToggleSection}: Filters) {
    const filtered = courses.filter((course) => {
        const term = query.toLowerCase();
        const matchSearch = course.code.toLowerCase().includes(term) || course.title.toLowerCase().includes(term);
        const matchSubject = selected === "all" || course.subject.toLowerCase() === selected;

        return matchSearch && matchSubject;
    });

    return (
        <div className="flex flex-col gap-4">
            {filtered.length === 0 ? (
                <p className="text-base text-gray-500 text-center py-15">No courses match your search.</p>
                ) : (
                filtered.map((course) => (
                    <CourseCard key={course.id} 
                                course={course} 
                                addSectionID={addSectionID}
                                onToggleSection={onToggleSection}
                    />
                ))
            )}
        </div>
    );
}