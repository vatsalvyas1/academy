'use client'
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebinars() {

    const featuredWebinars = [
        {
          title: 'Introduction to JavaScript',
          description:
            'Dive deep into the fundamentals of JavaScript and enhance your coding skills.',
          slug: 'introduction-to-javascript',
          isFeatured: true,
        },
        {
          title: 'Building Responsive Websites',
          description:
            'Learn the art of creating responsive websites from experienced web developers.',
          slug: 'building-responsive-websites',
          isFeatured: true,
        },
        {
          title: 'Advanced React Techniques',
          description:
            'Master advanced techniques to take your React development skills to the next level.',
          slug: 'advanced-react-techniques',
          isFeatured: true,
        },
        {
          title: 'Node.js for Beginners',
          description:
            'Get started with Node.js development with this comprehensive overview.',
          slug: 'nodejs-for-beginners',
          isFeatured: true,
        },
        {
          title: 'Effective Debugging Strategies',
          description:
            'Enhance your debugging skills with expert tips and strategies.',
          slug: 'effective-debugging-strategies',
          isFeatured: true,
        },
        {
          title: 'Digital Marketing for Developers',
          description:
            'Learn how to promote your projects effectively in the digital age.',
          slug: 'digital-marketing-for-developers',
          isFeatured: true,
        },
      ];
      

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-lime-300 font-semibold tracking-wide uppercase">
            FEATURED WEBINARS
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Enhance Your Coding Journey
          </p>
        </div>
        <div className="mt-10">
        <HoverEffect items={featuredWebinars.map(webinar => (
            {
                title: webinar.title,
                description: webinar.description,
                link: '/'
            }
        ))} />
        </div>
        <div className="mt-10 text-center">
        <Link
          href={"/"}
          className="px-6 py-4 rounded-2xl border hover:bg-black hover:text-white border-cyan-600 text-cyan-200 bg-gray-800 transition duration-200"
        >
          View all webinars
        </Link>
      </div>
      </div>
    </div>
  );
}

export default UpcomingWebinars;
