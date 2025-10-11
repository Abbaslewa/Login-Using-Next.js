"use client";
import Image from "next/image";
import WhatsAppButton from "./components/WhatsAppButton";
import Link from "next/link";
import { FaBookOpen, FaGraduationCap, FaCertificate, FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-col relative text-gray-900">
      {/* Floating Back to Home */}
      <Link
        href="/"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-gradient-to-r from-blue-600 to-blue-800 text-white p-3 sm:p-4 rounded-full shadow-lg hover:from-blue-500 hover:to-blue-700 transition group z-50"
      >
        <FaHome size={22} />
        <span className="absolute right-14 sm:right-16 bottom-4 sm:bottom-6 bg-blue-800 text-white text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300">
          Back to Home
        </span>
      </Link>

      {/* Hero Section */}
      <section className="relative py-20 sm:py-28 px-4 sm:px-6 text-center">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/ui.webp"
            alt="World English Banner"
            fill
            className="object-cover"
            priority
          />
          {/* subtle overlay for readability, no blur */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
        </div>
        <div className="relative max-w-3xl sm:max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-white drop-shadow-[0_0_15px_rgba(59,130,246,0.8)] animate-pulse">
            World English Training Center
          </h1>
          <p className="text-gray-100 text-sm sm:text-lg md:text-xl mb-8 leading-relaxed">
            Speak English with confidence. Join our{" "}
            <span className="text-blue-300 font-semibold">professional programs</span>{" "}
            and earn an internationally recognized certificate.
          </p>
          <WhatsAppButton />
        </div>
      </section>

      {/* About Us */}
      <section className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-white via-blue-50 to-white border border-blue-400 rounded-3xl p-6 sm:p-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center shadow-lg hover:shadow-blue-400/30 transition-all duration-300">
          <div>
            <h2 className="text-2xl sm:text-4xl font-bold mb-6 text-blue-700">
              About Us
            </h2>
            <p className="text-gray-700 text-sm sm:text-lg leading-relaxed mb-6">
              At{" "}
              <span className="text-blue-600 font-semibold">World English Training Center</span>, 
              we believe English opens doors to global opportunities. Our programs 
              are designed for{" "}
              <span className="text-blue-600 font-medium">beginners, professionals</span>, 
              and anyone looking to improve communication and fluency.
            </p>
            <p className="text-gray-600 mb-4">
              Please send your registration details:{" "}
              <span className="text-blue-700 font-semibold">Full name, Email, and Country</span>
            </p>
            <a
              href="mailto:abbasomerhassn@gmail.com"
              className="inline-block text-blue-700 font-semibold hover:text-blue-900 underline transition-colors"
            >
              abbasomerhassn@gmail.com
            </a>
          </div>

          <div className="relative w-full aspect-video rounded-xl overflow-hidden border-2 border-blue-500 shadow-lg hover:shadow-blue-400/70 transform hover:scale-[1.02] transition duration-300">
            <h1 className="absolute top-2 left-2 bg-blue-900/40 px-3 py-1 text-white text-sm font-bold rounded-md">
              Play this video
            </h1>
            <video
              src="/video.mp4"
              controls
              className="w-full h-full object-cover rounded-xl"
              poster="/ui.webp"
            />
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-blue-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-4xl font-bold text-blue-700 mb-12">
            Our Courses
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                icon: <FaBookOpen className="text-blue-600 mx-auto mb-4" size={40} />,
                title: "3-Month Speaking Course",
                desc: "Build your grammar, vocabulary, and speaking skills with daily practice and group sessions.",
              },
              {
                icon: <FaGraduationCap className="text-blue-600 mx-auto mb-4" size={40} />,
                title: "6-Month Advanced Program",
                desc: "Gain advanced communication, public speaking, and business English skills for international success.",
              },
              {
                icon: <FaCertificate className="text-blue-600 mx-auto mb-4" size={40} />,
                title: "Certificate Only",
                desc: "Already fluent? Pass our test and receive your official certificate.",
              },
            ].map((course, i) => (
              <div
                key={i}
                className="p-6 border border-blue-400 rounded-3xl shadow-lg bg-white 
                hover:shadow-blue-500/50 hover:-translate-y-2 transform transition-all duration-300"
              >
                <div className="text-blue-600 mx-auto mb-4 text-4xl sm:text-5xl">{course.icon}</div>
                <h3 className="text-xl font-semibold text-blue-700 mb-3">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.desc}</p>
                <Link href="/courses" className="text-blue-600 hover:underline font-medium">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 text-center text-white rounded-t-3xl animate-gradient-x bg-[length:200%_200%]">
        <div className="relative max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-extrabold mb-6 drop-shadow-lg animate-pulse">
            Ready to Start Your English Journey?
          </h2>
          <p className="mb-8 text-base sm:text-lg text-blue-100">
            Register today and take the first step toward{" "}
            <span className="font-bold text-white">global opportunities</span>.
          </p>
          <a
            href="https://chat.whatsapp.com/KPVY3wV2iosA6nrYlolDaH"
            target="_blank"
            className="inline-flex items-center gap-3 bg-white hover:bg-gray-100 text-blue-700 px-8 py-4 rounded-xl text-lg font-bold shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <FaGraduationCap size={22} className="text-blue-600" />
            Register 

          </a>
        </div>
      </section>
    </div>
  );
}
