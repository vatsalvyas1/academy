'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials = [
    {
      quote:
        "The instructors here are incredibly knowledgeable and supportive. I've learned more in a few months than I ever thought possible.",
      name: "Alice Johnson",
      title: "Full-Stack Developer",
    },
    {
      quote:
        "This coding institute transformed my career. The real-time coding sessions and collaborative projects helped me gain the skills I needed to land my dream job.",
      name: "Michael Smith",
      title: "Software Engineer",
    },
    {
      quote:
        "The curriculum is up-to-date and comprehensive. I felt prepared for every challenge I faced in the industry thanks to the solid foundation I built here.",
      name: "Emma Brown",
      title: "Frontend Developer",
    },
    {
      quote:
        "Thanks to the extensive content library and hands-on projects, I was able to master version control and improve my coding skills significantly.",
      name: "David Lee",
      title: "DevOps Engineer",
    },
    {
      quote:
        "The collaborative learning environment is fantastic. I met like-minded individuals and mentors who guided me through every step of my learning journey.",
      name: "Sophia Wilson",
      title: "Backend Developer",
    },
  ];
  

function TestimonialCards() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear our Harmony: Voices of Success</h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
        <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="fast"
      />
        </div>
      </div>
    </div>
  )
}

export default TestimonialCards
