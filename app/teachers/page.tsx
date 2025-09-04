import { FaEnvelope, FaPhone } from "react-icons/fa";

export default function Teachers() {
  const teachers = [
    {
      name: "Sarah Johnson",
      title: "Senior English Instructor",
      bio: "Over 10 years of experience in teaching English communication and grammar to international students.",
      img: "/teacher1.jpg",
      email: "sarah.johnson@worldenglish.com",
      phone: "+1 555 123 4567",
    },
    {
      name: "David Smith",
      title: "Speaking & Pronunciation Coach",
      bio: "Specialist in helping students achieve fluency and natural pronunciation in daily conversations.",
      img: "/teacher2.jpg",
      email: "david.smith@worldenglish.com",
      phone: "+1 555 234 5678",
    },
    {
      name: "Emily Brown",
      title: "Business English Trainer",
      bio: "Expert in professional English for business, interviews, and workplace communication.",
      img: "/teacher3.jpg",
      email: "emily.brown@worldenglish.com",
      phone: "+1 555 345 6789",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-extrabold mb-4">Meet Our Teachers</h1>
        <p className="text-lg max-w-2xl mx-auto text-gray-200">
          Our professional English instructors are dedicated to helping you
          achieve fluency, confidence, and success in your learning journey.
        </p>
      </section>

      {/* Teachers Grid */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {teachers.map((teacher, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition p-6 text-center"
            >
              <img
                src={teacher.img}
                alt={teacher.name}
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-blue-600"
              />
              <h3 className="text-xl font-bold text-blue-900">{teacher.name}</h3>
              <p className="text-sm text-gray-500">{teacher.title}</p>
              <p className="text-gray-700 mt-3">{teacher.bio}</p>

              {/* Contact Info */}
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
