## SchedHQ - Class Scheduling System

**Live demo:** [https://sched-hq.vercel.app/](https://sched-hq.vercel.app/)

## Getting Started

### Prerequisites
Make sure you have Node.js and npm installed.

### Installation

```bash
git clone https://github.com/keishako/class-scheduler
cd class-scheduler
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Technical Rationale

I chose React and Next.js because they allow me to build the scheduling system using reusable components and manage interactive features such as selecting sections, filtering courses, and updating the schedule. I used TypeScript to define the structure of the courses, sections, and schedules which makes the data more organized and consistent. For styling, I used Tailwind CSS to create a clean/organized layout and responsive interface. I used local mock data for the courses, sections, and other information based on the sample data provided. I also separated the interface into reusable components such as the header, sidebar, course cards, and schedule to keep the code organized and easier to maintain. React state is also used to manage interactive parts of the application such as expanding course information and keeping track of the selected sections.
