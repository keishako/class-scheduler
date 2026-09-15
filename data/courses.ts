import { Course } from "@/types/course";

export const courses: Course[] = [
  {
    id: "CCPROG3",
    code: "CCPROG3",
    title: "Object-Oriented Programming",
    subject: "CC",
    units: 3,
    sections: [
      {
        id: "CCPROG3-S20A",
        section: "S20A",
        instructor: "John Doe",
        room: "G306A",
        schedule: [
          { day: "Monday", startTime: "12:45", endTime: "14:15" },
          { day: "Thursday", startTime: "12:45", endTime: "14:15" },
        ],
        enrolled: 16,
        enrollCap: 20,
      },
      {
        id: "CCPROG3-S20B",
        section: "S20B",
        instructor: "Micky Mouse",
        room: "G306A",
        schedule: [
          { day: "Monday", startTime: "09:15", endTime: "10:45" },
          { day: "Thursday", startTime: "09:15", endTime: "10:45" },
        ],
        enrolled: 4,
        enrollCap: 20,
      },
    ],
  },
  {
    id: "STSWENG",
    code: "STSWENG",
    title: "Advanced Software Engineering",
    subject: "ST",
    units: 3,
    sections: [
      {
        id: "STSWENG-S02",
        section: "S02",
        instructor: "Grunkle Stan",
        room: "G203",
        schedule: [
          { day: "Tuesday", startTime: "11:00", endTime: "12:30" },
          { day: "Friday", startTime: "11:00", endTime: "12:30" },
        ],
        enrolled: 36,
        enrollCap: 45,
      },
    ],
  },
  {
    id: "GERIZAL",
    code: "GERIZAL",
    title: "Ang Buhay at mga Akda ni Rizal",
    subject: "GE",
    units: 3,
    sections: [
      {
        id: "GERIZAL-Y10",
        section: "Y10",
        instructor: "Gumball Watterson",
        room: "L207",
        schedule: [
          { day: "Tuesday", startTime: "12:45", endTime: "14:15" },
          { day: "Friday", startTime: "12:45", endTime: "14:15" },
        ],
        enrolled: 35,
        enrollCap: 45,
      },
      {
        id: "GERIZAL-Y11",
        section: "Y11",
        instructor: "Princess Bubblegum",
        room: "L208",
        schedule: [
          { day: "Monday", startTime: "14:30", endTime: "16:00" },
          { day: "Thursday", startTime: "14:30", endTime: "16:00" },
        ],
        enrolled: 33,
        enrollCap: 45,
      },
    ],
  },
  {
    id: "ITCMSY2",
    code: "ITCMSY2",
    title: "Visualization and Cloud Computing",
    subject: "IT",
    units: 3,
    sections: [
      {
        id: "ITCMSY2-S02",
        section: "S02",
        instructor: "Daisy Duck",
        room: "G304B",
        schedule: [
          { day: "Wednesday", startTime: "11:00", endTime: "12:30" },
          { day: "Saturday", startTime: "11:00", endTime: "12:30" },
        ],
        enrolled: 40,
        enrollCap: 45,
      },
    ],
  },
  {
    id: "CCINFOM",
    code: "CCINFOM",
    title: "Information Management",
    subject: "CC",
    units: 3,
    sections: [
      {
        id: "CCINFOM-S40C",
        section: "S40C",
        instructor: "Jimmy Neutron",
        room: "G304B",
        schedule: [
          { day: "Tuesday", startTime: "07:30", endTime: "09:00" },
          { day: "Friday", startTime: "07:30", endTime: "09:00" },
        ],
        enrolled: 7,
        enrollCap: 40,
      },
    ],
  },
  {
    id: "CSINTSY",
    code: "CSINTSY",
    title: "Introduction to Intelligent Systems",
    subject: "CS",
    units: 3,
    sections: [
      {
        id: "CSINTSY-S01",
        section: "S01",
        instructor: "Peppa Pig",
        room: "G203",
        schedule: [
          { day: "Monday", startTime: "16:15", endTime: "17:45" },
          { day: "Thursday", startTime: "16:15", endTime: "17:45" },
        ],
        enrolled: 23,
        enrollCap: 45,
      },
    ],
  },
  {
    id: "LCASEAN",
    code: "LCASEAN",
    title: "The Filipino and ASEAN",
    subject: "GE",
    units: 3,
    sections: [
      {
        id: "LCASEAN-Z21",
        section: "Z21",
        instructor: "Toph Beifong",
        room: "V501",
        schedule: [
          { day: "Monday", startTime: "11:00", endTime: "12:30" },
          { day: "Thursday", startTime: "11:00", endTime: "12:30" },
        ],
        enrolled: 24,
        enrollCap: 45,
      },
      {
        id: "LCASEAN-Z22",
        section: "Z22",
        instructor: "Tinker Bell",
        room: "J113",
        schedule: [
          { day: "Tuesday", startTime: "16:15", endTime: "17:45" },
          { day: "Friday", startTime: "16:15", endTime: "17:45" },
        ],
        enrolled: 5,
        enrollCap: 45,
      },
    ],
  },
];