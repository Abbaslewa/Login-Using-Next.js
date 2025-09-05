"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes, FaGlobeAmericas } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-900  text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <Link
          href="/"
          className="flex  items-center space-x-2 text-2xl font-extrabold tracking-wide"
        >
          <FaGlobeAmericas size={28} className="text-yellow-400" />
          <span className="">World English</span>
        </Link>

        <div className="hidden md:flex space-x-8 text-lg font-medium">
          <Link href="/" className="hover:text-yellow-400 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-yellow-400 transition">
            About
          </Link>
          <Link href="/courses" className="hover:text-yellow-400 transition">
            Courses
          </Link>
          <Link href="/books" className="hover:text-yellow-400 transition">
            Books
          </Link>
          <Link href="/register" className="hover:text-yellow-400 transition">
            Register
          </Link>
          <Link href="/teachers" className="hover:text-yellow-400 transition">
            Teachers
          </Link>
          <Link href="/contact" className="hover:text-yellow-400 transition">
            Contact
          </Link>

        </div>

        
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      
      {isOpen && (
        <div className="md:hidden bg-blue-800 px-6 py-4 space-y-4 text-lg font-medium">
          <Link
            href="/about"
            className="block hover:text-yellow-400 transition"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/courses"
            className="block hover:text-yellow-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Courses
          </Link>
          <Link
            href="/books"
            className="block hover:text-yellow-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Books
          </Link>
          <Link
            href="/register"
            className="block hover:text-yellow-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Register
          </Link>
          <Link
            href="/teachers"
            className="block hover:text-yellow-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Teachers
          </Link>
          <Link
            href="/contact"
            className="block hover:text-yellow-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
