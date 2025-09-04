"use client";
import { useState } from "react";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", country: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Registration submitted! We will contact you on email soon.");
    setForm({ name: "", email: "", country: "" });
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-extrabold mb-4">
          Register for World English Training Center
        </h1>
        <p className="text-lg max-w-2xl mx-auto text-gray-200">
          Join our 3 or 6-month English training programs and receive a
          recognized certificate upon completion. 🚀
        </p>
      </section>

      {/* Registration Form */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow">
          <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">
            Registration Form
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
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

            {/* Email */}
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

            {/* Country */}
            <div>
              <label className="block text-gray-700 mb-2">Country</label>
              <input
                type="text"
                name="country"
                value={form.country}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Submit Registration
            </button>
          </form>
        </div>
      </section>

      {/* WhatsApp Option */}
      <section className="py-16 px-6 text-center bg-white">
        <h2 className="text-2xl font-bold text-blue-900 mb-6">
          Prefer WhatsApp Registration?
        </h2>
        <p className="text-gray-700 mb-6">
          Click below to register instantly via WhatsApp and get all details
          directly on your phone 📱
        </p>
        <WhatsAppButton />
      </section>
    </div>
  );
}
