import Link from "next/link";
import { FaFacebookF, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-blue-950/90 backdrop-blur-md text-white py-12 px-6 mt-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            World English Training Center
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Learn English with confidence. We provide 3 and 6-month programs
            with international certificates and practice groups for speaking
            fluency.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm sm:text-base">
            {[
              { name: "Home", href: "/" },
              { name: "About", href: "/about" },
              { name: "Courses", href: "/courses" },
              { name: "Register", href: "/register" },
              { name: "Contact", href: "/contact" },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="relative group inline-block"
                >
                  <span className="transition-colors duration-300 group-hover:text-green-400">
                    {link.name}
                  </span>
                  <span className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-green-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
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
              className="p-3 rounded-full bg-blue-800/40 hover:bg-green-400 hover:text-blue-900 transition transform hover:scale-110 shadow-md hover:shadow-green-400/40"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="https://chat.whatsapp.com/KPVY3wV2iosA6nrYlolDaH"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-blue-800/40 hover:bg-green-400 hover:text-blue-900 transition transform hover:scale-110 shadow-md hover:shadow-green-400/40"
            >
              <FaWhatsapp size={18} />
            </a>
            <a
              href="mailto:abbasomerhassn@gmail.com"
              className="p-3 rounded-full bg-blue-800/40 hover:bg-green-400 hover:text-blue-900 transition transform hover:scale-110 shadow-md hover:shadow-green-400/40"
            >
              <FaEnvelope size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="relative mt-12 pt-6 text-center text-gray-400 text-sm">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-40 h-1 bg-gradient-to-r from-green-400 to-blue-400 rounded-full"></div>
        <p>
          © {new Date().getFullYear()} World English Training Center. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
}
