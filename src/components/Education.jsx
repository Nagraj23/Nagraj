import React from "react";
import { Timeline } from "./Timeline";

export function Education() {
  const data = [
    {
      title: "B.Tech Computer Science",
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Brahmdevdada Mane Institute of Technology",
      year: "2022 - 2026",
      description:
        "🎓 Learned core CSE subjects and built Programming , communication and management skills through arranging events as member committe",
      achievements: [
        "Core CSE Subjects ",
        " Programming Skills",
        "council Committe member",
      ],
    },
    {
      title: "H.S.C in Science Stream ",
      degree: "Science Stream (PCM + Electronics)",
      institution: "Walchand college of Arts and Science",
      year: "2020 - 2022",
      description:
        "🏫 Learned Fundamentals of science nd Mathamatics",
      achievements: ["92% Overall", "Coding Competitions", "Robotics Enthusiast"],
    },
    
  ];

  return (
    <div className="relative w-full overflow-clip">
      
      <Timeline data={data} />
    </div>
  );
}

export default Education;
