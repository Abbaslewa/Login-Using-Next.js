"use client";
import Image from "next/image";
import WhatsAppButton from "./components/WhatsAppButton";
import Link from "next/link";
import { FaBookOpen, FaGraduationCap, FaCertificate, FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-col relative">

      <Link
        href="/"
        className="fixed bottom-6 right-6 bg-blue-900 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition group z-50"
      >
        <FaHome size={22} />
        <span className="absolute right-16 bottom-6 bg-gray-800 text-white text-sm px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition">
          Back to Home
        </span>
      </Link>

      <section className="relative text-white py-24 px-6 text-center">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/ui.webp"
            alt="World English Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 " /> 
        </div>
        <div className="relative max-w-4xl mx-auto p-6 sm:p-10">
          <h1 className="text-3xl sm:text-3xl md:text-5xl font-bold mb-6 drop-shadow-lg">
            World English Training Center
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-8 font-medium leading-relaxed">
            Speak English with confidence. Join our professional programs and
            earn an internationally recognized certificate.
          </p>
          <WhatsAppButton />
        </div>
      </section>
<section className="py-16 sm:py-20 px-6 ">
  <div className="max-w-6xl mx-auto bg-blue-900/10 rounded-2xl  backdrop-blur-md p-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
  
    <div>
      <h2 className="text-2xl text-center sm:text-3xl  font-bold text-blue-900 mb-4">
        About Us
      </h2>
      <p className="text-gray-900 font-bold text-base sm:text-lg leading-relaxed">
        At <strong className="text-blue-800">World English Training Center</strong>, we believe English
        opens doors to global opportunities. Our programs are designed for
        beginners, professionals, and anyone looking to improve their
        communication, confidence, and fluency in English.
      </p>
    </div>

    <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
      <video
        src="/vi.mp4" 
        controls
        className="w-full h-full object-cover rounded-xl"
      />
    </div>

  </div>
</section>

      
      <section className="py-16 sm:py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-12">
            Our Courses
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            
            <div className="p-6 border rounded-2xl shadow hover:shadow-lg transition bg-gray-50">
              <FaBookOpen className="text-blue-700 mx-auto mb-4" size={40} />
              <h3 className="text-xl sm:text-2xl font-semibold text-blue-800 mb-3">
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

            
            <div className="p-6 border rounded-2xl shadow hover:shadow-lg transition bg-gray-50">
              <FaGraduationCap className="text-green-700 mx-auto mb-4" size={40} />
              <h3 className="text-xl sm:text-2xl font-semibold text-blue-800 mb-3">
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

            
            <div className="p-6 border rounded-2xl shadow hover:shadow-lg transition bg-gray-50">
              <FaCertificate className="text-yellow-600 mx-auto mb-4" size={40} />
              <h3 className="text-xl sm:text-2xl font-semibold text-blue-800 mb-3">
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

      
      <section className="relative py-20 bg-blue-400/20 rounded-2xl  text-center overflow-hidden">

  <div className="absolute inset-0">
    <div className="absolute top-0 left-0 w-40 h-40 bg-blue-600/30 rounded-full blur-3xl" />
    <div className="absolute bottom-0 right-0 w-60 h-60  blur-2xl" />
  </div>

  <div className="relative max-w-3xl mx-auto px-6">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg">
       Ready to Start Your English Journey?
    </h2>
    <p className="mb-10 text-base sm:text-lg md:text-xl  leading-relaxed">
      Register today and take the first step toward <span className="font-semibold text-blue-900">global opportunities</span>.
    </p>

    <a
      href="https://chat.whatsapp.com/KPVY3wV2iosA6nrYlolDaH" 
      target="_blank"
      className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 active:scale-95 transition duration-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12.04 2.003c-5.524 0-10.002 4.478-10.002 10.002a9.93 9.93 0 001.367 5.034L2 22l5.114-1.346a9.94 9.94 0 004.926 1.295h.004c5.523 0 10.001-4.478 10.001-10.002 0-2.673-1.041-5.186-2.93-7.074A9.94 9.94 0 0012.04 2.003zm5.846 14.544c-.248.695-1.229 1.26-1.694 1.34-.447.08-1.012.115-1.637-.101-.379-.131-.869-.283-1.498-.554-2.64-1.145-4.353-3.942-4.487-4.126-.131-.184-1.07-1.425-1.07-2.72s.678-1.922.918-2.19c.24-.269.524-.336.698-.336.174 0 .349.002.502.009.162.007.379-.059.594.454.216.512.732 1.768.797 1.895.065.127.109.276.02.444-.087.168-.131.276-.26.424-.131.148-.276.33-.394.444-.131.127-.268.266-.115.521.152.255.674 1.111 1.448 1.8 1.002.892 1.845 1.165 2.1 1.297.261.132.412.112.567-.067.152-.179.652-.758.826-1.018.174-.26.348-.218.593-.131.245.087 1.548.73 1.815.863.267.131.445.197.51.309.065.112.065.647-.183 1.342z" />
      </svg>
      Register Now
    </a>
  </div>
</section>

    </div>
  );
}
