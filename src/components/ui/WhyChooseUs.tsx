"use client";
import React from "react";
import { StickyScroll } from "./sticky-scroll-reveal";
import Image from "next/image";

const content = [
    {
      title: "Collaborative Learning",
      description:
        "Join our coding institute where students, instructors, and mentors work together in real time. Collaborate on projects, share ideas, and make decisions quickly. With our platform, streamline your learning process and boost productivity.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Collaborative Learning
        </div>
      ),
    },
    {
      title: "Real-time Coding Sessions",
      description:
        "Experience the thrill of real-time coding sessions. Watch as changes happen live, and learn from every modification. Our platform eliminates the confusion of version control, letting you focus on learning and improving your coding skills.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <Image
            src="/courses/coding-session.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="real-time coding session"
          />
        </div>
      ),
    },
    {
      title: "Version Control Mastery",
      description:
        "Master version control with our hands-on projects. Our platform ensures you're always working on the latest version, removing the need for manual updates. Stay informed, keep your learning on track, and maintain project continuity effortlessly.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          Version Control Mastery
        </div>
      ),
    },
    {
      title: "Extensive Content Library",
      description:
        "Access an extensive library of coding resources and tutorials. Our platform provides you with up-to-date materials, helping you stay ahead in your learning journey. Never run out of content to study and practice.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Extensive Content Library
        </div>
      ),
    },
  ];
  

function WhyChooseUs() {
  return (
    <div>
      <StickyScroll content={content} />
    </div>
  )
}

export default WhyChooseUs
