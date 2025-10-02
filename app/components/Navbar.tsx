"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes, FaGlobeAmericas } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Courses", href: "/courses" },
    { name: "Books", href: "/books" },
    { name: "Teachers", href: "/teachers" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-blue-900/70 backdrop-blur-lg border-b border-white/10 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-2 text-2xl font-extrabold tracking-wide"
        >
          <FaGlobeAmericas size={32} className="text-green-400 drop-shadow-md animate-pulse" />
          <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent hover:from-green-300 hover:to-blue-300 transition duration-500">
            World English
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-lg font-medium items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`relative group ${
                pathname === link.href ? "text-green-400" : "text-white"
              }`}
            >
              <span className="transition-colors duration-300 group-hover:text-green-400">
                {link.name}
              </span>
              {/* Underline Animation */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-green-400 transition-all duration-300
                ${pathname === link.href ? "w-full" : "w-0 group-hover:w-full"}`}
              ></span>
            </Link>
          ))}

          {/* CTA Button */}
          <Link
            href="/register"
            className="ml-6 px-5 py-2 rounded-full bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold shadow-lg hover:shadow-green-400/50 hover:scale-105 transition-all duration-300"
          >
            Register Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl focus:outline-none hover:text-green-400 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-blue-800/95 backdrop-blur-md shadow-xl transform transition-all duration-500 origin-top ${
          isOpen ? "max-h-screen opacity-100 scale-y-100 py-6" : "max-h-0 opacity-0 scale-y-0 py-0"
        }`}
      >
        <div className="px-6 space-y-6 text-lg font-medium flex flex-col items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`block transition-all duration-300 ${
                pathname === link.href ? "text-green-400" : "hover:text-green-400"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          {/* CTA Button in Mobile */}
          <Link
            href="/register"
            className="block text-center px-5 py-2 rounded-full bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold shadow-lg hover:shadow-green-400/50 hover:scale-105 transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            Register Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
