"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes, FaGlobeAmericas } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Courses", href: "/courses" },
    { name: "Books", href: "/books" },
    { name: "Register", href: "/register" },
    { name: "Teachers", href: "/teachers" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-blue-900/90 backdrop-blur-md text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
       
        <Link
          href="/"
          className="flex items-center space-x-2 text-2xl font-extrabold tracking-wide"
        >
          <FaGlobeAmericas size={28} className="text-yellow-400" />
          <span className="hover:text-yellow-400 transition">World English</span>
        </Link>

        
        <div className="hidden md:flex space-x-8 text-lg font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative group"
            >
              <span className="hover:text-yellow-400 transition">{link.name}</span>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      
      <div
        className={`md:hidden bg-blue-800 overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="px-6 space-y-4 text-lg font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block hover:text-yellow-400 transition"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
