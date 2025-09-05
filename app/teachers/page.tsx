import { FaEnvelope, FaPhone, FaUserCircle } from "react-icons/fa";

export default function Teachers() {
  const teachers = [
    {
      name: "Ahmed Hassan",
      title: "Senior English Instructor",
      bio: "Over 10 years of experience in teaching English communication and grammar to international students.",
      email: "ahmedhassansumu@gmail.com",
      phone: "+250 734332198",
    },
    {
  name: "Tayseer Adam",
  title: "Speaking & Pronunciation Coach",
  bio: "If you already speak English, you can contact this teacher to pass the exam and you will receive your certificate.",
  email: "tayseerAdam25@gmail.com",
  phone: "+250 727 567 338",
},

    {
      name: "Deng Luxury",
      title: "Business English Trainer",
      bio: "Expert in professional English for business, interviews, and workplace communication.",
      email: "dluxueymou@gmail.com",
      phone: "+1 555 345 6789",
    },
  ];

  return (
    <div className="flex flex-col">
      
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-extrabold mb-4">Meet Our Teachers</h1>
        <p className="text-lg max-w-2xl mx-auto text-gray-200">
          Our professional English instructors are dedicated to helping you
          achieve fluency, confidence, and success in your learning journey.
        </p>
      </section>

      {/* Teachers List */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {teachers.map((teacher, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition p-6 text-center"
            >
              {/* Avatar instead of image */}
              <FaUserCircle className="w-32 h-32 mx-auto text-blue-600 mb-4" />

              <h3 className="text-xl font-bold text-blue-900">{teacher.name}</h3>
              <p className="text-sm text-gray-500">{teacher.title}</p>
              <p className="text-gray-700 mt-3">{teacher.bio}</p>

              {/* Contact */}
              <div className="mt-4 space-y-2 text-sm">
                <p className="flex items-center justify-center space-x-2 text-gray-600">
                  <FaEnvelope className="text-blue-700" />
                  <a
                    href={`mailto:${teacher.email}`}
                    className="hover:text-blue-600"
                  >
                    {teacher.email}
                  </a>
                </p>
                <p className="flex items-center justify-center space-x-2 text-gray-600">
                  <FaPhone className="text-green-600" />
                  <a
                    href={`tel:${teacher.phone}`}
                    className="hover:text-blue-600"
                  >
                    {teacher.phone}
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
