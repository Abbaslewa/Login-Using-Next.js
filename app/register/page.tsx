"use client";
import { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", country: "" });


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("✅ Registration submitted! We will contact you soon.");
    setForm({ name: "", email: "", country: "" });
  };

  return (
    <div className="flex flex-col">
      
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12 sm:py-16 px-4 sm:px-6 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-4">
          Register for World English Training Center
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto text-gray-200">
          Join our{" "}
          <span className="font-semibold text-yellow-300">
            3 or 6-month English training programs
          </span>{" "}
          and receive a recognized certificate upon completion. 
        </p>
      </section>

      
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-lg sm:max-w-2xl lg:max-w-3xl mx-auto bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900 mb-6 text-center">
            Registration Form
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div>
              <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm sm:text-base"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm sm:text-base"
              />
            </div>

            
            <div>
              <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                Country
              </label>
              <input
                type="text"
                name="country"
                value={form.country}
                onChange={handleChange}
                required
                placeholder="Enter your country"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm sm:text-base"
              />
            </div>

            
            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg shadow-md hover:bg-blue-700 hover:shadow-lg transform hover:scale-105 active:scale-95 transition duration-300"
            >
              Submit Registration
            </button>
          </form>
        </div>
      </section>

  
      <section className="relative py-16 sm:py-20 bg-blue-400/20 rounded-2xl  text-center overflow-hidden">
        
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-24 sm:w-40 h-24 sm:h-40 bg-blue-600/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-40 sm:w-60 h-40 sm:h-60 bg-blue-400/20 rounded-full blur-2xl" />
        </div>

        <div className="relative max-w-2xl sm:max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-6 drop-shadow-lg">
             Ready to Start Your English Journey
          </h2>
          <p className="mb-8 text-sm sm:text-base md:text-lg lg:text-xl  leading-relaxed">
            Register today and take the first step toward{" "}
            <span className="font-semibold text-blue-900">
              global opportunities
            </span>
            .
          </p>
          <a
            href="https://chat.whatsapp.com/KPVY3wV2iosA6nrYlolDaH" 
            target="_blank"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-base sm:text-lg font-bold shadow-lg hover:shadow-2xl transform hover:scale-105 active:scale-95 transition duration-300"
          >
           Register Now
          </a>
        </div>
      </section>
    </div>
  );

}
