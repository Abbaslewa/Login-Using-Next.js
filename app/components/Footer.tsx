import Link from "next/link";
import { FaFacebookF, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12 px-6 mt-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* About */}
        <div>
          <h2 className="text-2xl font-bold mb-4">🌍 World English Training Center</h2>
          <p className="text-gray-300">
            Learn English with confidence. We provide 3 and 6-month programs
            with international certificates and practice groups for speaking
            fluency.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-gray-300">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-300">About</Link>
            </li>
            <li>
              <Link href="/courses" className="hover:text-gray-300">Courses</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-300">Contact</Link>
            </li>
            <li>
              <Link href="/register" className="hover:text-gray-300">Register</Link>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
          <div className="flex space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <FaFacebookF size={22} />
            </a>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <FaWhatsapp size={22} />
            </a>
            <a
              href="mailto:info@worldenglishcenter.com"
              className="hover:text-gray-300"
            >
              <FaEnvelope size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} World English Training Center. All Rights Reserved.
      </div>
    </footer>
  );
}
