import Link from "next/link";
import { FaFacebookF, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-10 sm:py-12 px-4 sm:px-6 mt-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
            🌍 World English Training Center
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Learn English with confidence. We provide 3 and 6-month programs
            with international certificates and practice groups for speaking
            fluency.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm sm:text-base">
            <li>
              <Link href="/" className="hover:text-yellow-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-yellow-400 transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/courses" className="hover:text-yellow-400 transition">
                Courses
              </Link>
            </li>
            <li>
              <Link href="/register" className="hover:text-yellow-400 transition">
                Register
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-yellow-400 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
            Connect With Us
          </h3>
          <div className="flex space-x-5 sm:space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://chat.whatsapp.com/KPVY3wV2iosA6nrYlolDaH"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition"
            >
              <FaWhatsapp size={20} />
            </a>
            <a
              href="mailto:abbasomerhassn@gmail.com"
              className="hover:text-yellow-400 transition"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-8 sm:mt-10 pt-4 sm:pt-6 text-center text-gray-400 text-xs sm:text-sm">
        © {new Date().getFullYear()} World English Training Center. All Rights Reserved.
      </div>
    </footer>
  );
}
