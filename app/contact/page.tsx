"use client";
import { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("✅ Thank you for contacting us! We will reply soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="flex flex-col">
      
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 drop-shadow">
          Contact Us
        </h1>
        <p className="text-lg font-bold sm:text-xl max-w-2xl mx-auto text-gray-200 leading-relaxed">
          Have questions about our programs or certificates? Get in touch with
          us today and be happy to help
        </p>
      </section>

      
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">
            Send Us a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-sm"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-sm"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-sm"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-900 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold shadow-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <section className="py-16 px-6 text-center bg-white">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-6">
          Make sure to send your details correctly to this email
        </h2>
        <p className="flex items-center justify-center gap-2 text-gray-700 mb-3 text-lg">
          <FaEnvelope className="text-blue-600" />
          <a
            href="mailto:abbasomerhassn@gmail.com"
            className="text-blue-600 hover:underline font-medium"
          >
            abbasomerhassn@gmail.com
          </a>
        </p>
        <p className="flex items-center justify-center gap-2 text-gray-700 text-lg">
          <FaMapMarkerAlt className="text-red-600" />
          Online & Worldwide
        </p>
      </section>
    </div>
  );
}
