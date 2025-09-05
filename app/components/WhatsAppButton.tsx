"use client";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <Link
      href="https://chat.whatsapp.com/KPVY3wV2iosA6nrYlolDaH" // change to your WhatsApp number
      target="_blank"
      className="
        fixed bottom-4 left-1/2 -translate-x-1/2
        sm:static sm:translate-x-0
        flex items-center justify-center gap-2
        w-auto min-w-[160px]
        bg-green-600 
        text-white 
        px-5 py-3
        rounded-xl shadow-lg
        text-sm sm:text-base md:text-lg
        font-semibold
        hover:bg-green-500 hover:scale-105 
        active:scale-95
        transition-all duration-300
        z-50
      "
    >
      <FaWhatsapp size={20} />
      <span>Register</span>
    </Link>
  );
}
