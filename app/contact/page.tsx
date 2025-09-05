"use client";
import { useState } from "react";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting us! We will reply soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="flex flex-col">
      
      <section className="bg-blue-900 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-extrabold mb-4">Contact Us</h1>
        <p className="text-lg max-w-2xl mx-auto text-gray-200">
          Have questions about our programs or certificates? Get in touch with
          us today!
        </p>
      </section>

      
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow">
          <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">
            Send Us a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div>
              <label className="block text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            
            <div>
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              ></textarea>
            </div>

            
            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      
      <section className="py-16 px-6 text-center bg-white">
        <h2 className="text-2xl font-bold text-blue-900 mb-6">
          Other Ways to Reach Us
        </h2>
        <p className="text-gray-700 mb-2">
          📧 Email:{" "}
          <a
            href="abbasomerhassn@gmail.com"
            className="text-blue-600 hover:underline"
          >
            abbasomerhassn@gmail.com
          </a>
        </p>
        <p className="text-gray-700 mb-2">📍 Location: Online & Worldwide</p>
        <div className="mt-6">
          
        </div>
        
          
        
      </section>
    </div>
  );
}
