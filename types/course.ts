export type Course = {
  id: string;
  code: string;
  title: string;
  subject: string;
  units: number;
  sections: Section[];
};

export type Section = {
  id: string;
  section: string;
  instructor: string;
  room: string;
  schedule: Schedule[];
  enrolled: number;
  enrollCap: number;
};

export type Schedule = {
  day: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday";
  startTime: string;
  endTime: string;
};