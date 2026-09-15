"use client";

const courses = [
    {name: "All Courses", value: "all", color: "", selected: "bg-sky-950 text-white" },
    {name: "CC Courses", value: "cc", color: "bg-blue-500", selected: "bg-blue-100 text-black"},
    {name: "CS Courses", value: "cs", color: "bg-green-500", selected: "bg-green-100 text-black"},
    {name: "ST Courses", value: "st", color: "bg-yellow-500", selected: "bg-yellow-100 text-black"},
    {name: "CE Courses", value: "ce", color: "bg-red-500", selected: "bg-red-100 text-black"},
    {name: "IT Courses", value: "it", color: "bg-purple-500", selected: "bg-purple-100 text-black"},
    {name: "GE Courses", value: "ge", color: "bg-pink-500", selected: "bg-pink-100 text-black"},
];

interface Filter {
    selected: string;
    onSelectedChange: (value: string) => void;
    onClearSections: () => void;
}

export default function Sidebar({selected, onSelectedChange, onClearSections}: Filter) {
    return (
        <aside className="w-full lg:w-70 lg:shrink-0 lg:min-h-screen bg-white px-6 py-6 font-mono">
            <div className="flex items-center justify-between mb-6">
                <span className="text-base font-semibold font-mono text-black">FILTERS</span>
                <button onClick={() => {onSelectedChange("all"); onClearSections();}}
                    className="text-sm font-semibold font-sans text-red-500 hover:text-red-600">
                    Clear All
                </button>
            </div>

            <p className="text-base text-black mb-3 opacity-45">COURSE</p>

            <div className="flex flex-col gap-2">
                {courses.map((course) => (
                    <button
                        key={course.value}
                        onClick={() => onSelectedChange(course.value)}
                        className={`flex items-center gap-2 text-left text-xl px-3 py-2 rounded-lg transition
                            ${selected === course.value ? course.selected : "text-black hover:bg-gray-100"}`}
                    >
                        {course.color && (<span className={`w-3 h-3 rounded-full ${course.color}`} />)}
                        {course.name}
                    </button>
                ))}
            </div>
        </aside>

    )

}
