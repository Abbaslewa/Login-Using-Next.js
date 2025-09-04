"use client";
import Image from "next/image";
import WhatsAppButton from "./components/WhatsAppButton";
import Link from "next/link";
import { FaBookOpen, FaGraduationCap, FaCertificate, FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-col relative">
      {/* Floating Back to Home Button */}
      <Link
        href="/"
        className="fixed bottom-6 right-6 bg-blue-900 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition group"
      >
        <FaHome size={22} />
        <span className="absolute right-16 bottom-6 bg-gray-800 text-white text-sm px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition">
          Back to Home
        </span>
      </Link>

      {/* Hero Section */}
      <section className="relative text-white py-24 px-6 text-center">
        <div className="absolute inset-0">
          <Image
            src="/ui.webp" // put your banner image in public/study.jpg
            alt="World English Banner"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className="relative max-w-4xl mx-auto  p-8 rounded-xl">
          <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg">
            World English Training Center 
          </h1>
          <p className="text-lg text-gray-100 mb-8 font-bold">
            Speak English with confidence. Join our professional programs and
            earn an internationally recognized certificate.
          </p>
          <WhatsAppButton />
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-gray-50 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">About Us</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            At <strong>World English Training Center</strong>, we believe English
            opens doors to global opportunities. Our programs are designed for
            beginners, professionals, and anyone looking to improve their
            communication, confidence, and fluency in English.
          </p>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-12">
            Our Courses
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* 3-Month Course */}
            <div className="p-6 border rounded-2xl shadow hover:shadow-lg transition">
              <FaBookOpen className="text-blue-700 mx-auto mb-4" size={40} />
              <h3 className="text-2xl font-semibold text-blue-800 mb-3">
                3-Month Speaking Course
              </h3>
              <p className="text-gray-600 mb-4">
                Build your grammar, vocabulary, and speaking skills with daily
                practice and group sessions.
              </p>
              <Link
                href="/courses"
                className="text-blue-600 font-medium hover:underline"
              >
                Learn More →
              </Link>
            </div>

            {/* 6-Month Course */}
            <div className="p-6 border rounded-2xl shadow hover:shadow-lg transition">
              <FaGraduationCap className="text-green-700 mx-auto mb-4" size={40} />
              <h3 className="text-2xl font-semibold text-blue-800 mb-3">
                6-Month Advanced Program
              </h3>
              <p className="text-gray-600 mb-4">
                Gain advanced communication, public speaking, and business
                English skills for international success.
              </p>
              <Link
                href="/courses"
                className="text-blue-600 font-medium hover:underline"
              >
                Learn More →
              </Link>
            </div>

            {/* Certificate Only */}
            <div className="p-6 border rounded-2xl shadow hover:shadow-lg transition">
              <FaCertificate className="text-yellow-600 mx-auto mb-4" size={40} />
              <h3 className="text-2xl font-semibold text-blue-800 mb-3">
                Certificate Only
              </h3>
              <p className="text-gray-600 mb-4">
                Already fluent? Pass our test and receive your official
                certificate within 3 or 6 months.
              </p>
              <Link
                href="/courses"
                className="text-blue-600 font-medium hover:underline"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Start Your English Journey?
        </h2>
        <p className="mb-8 text-lg text-gray-200">
          Register today and take the first step toward global opportunities.
        </p>
        <WhatsAppButton />
      </section>
    </div>
  );
}
