import WhatsAppButton from "../components/WhatsAppButton";

export default function Courses() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-extrabold mb-4">Our Courses</h1>
        <p className="text-lg max-w-3xl mx-auto text-gray-200">
          At <strong>World English Training Center</strong>, we offer flexible
          programs designed to help you build confidence, improve fluency, and
          achieve global opportunities with an official certificate.
        </p>
      </section>

      {/* Courses */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {/* 3-Month Speaking Course */}
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              3-Month Speaking Course
            </h2>
            <p className="text-gray-700 mb-4">
              A focused program designed for learners who want to strengthen
              their foundation in English and start speaking with confidence.
              This course covers:
            </p>
            <ul className="list-disc text-gray-600 ml-5 mb-4">
              <li>Grammar and sentence structure essentials</li>
              <li>Daily vocabulary building</li>
              <li>Listening & comprehension practice</li>
              <li>Group discussions and role plays</li>
            </ul>
            <p className="text-gray-700 mb-4">
              📜 <strong>Certificate:</strong> Awarded upon completion.
            </p>
            <WhatsAppButton />
          </div>

          {/* 6-Month Advanced Program */}
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              6-Month Advanced Program
            </h2>
            <p className="text-gray-700 mb-4">
              An advanced course for learners who want to achieve professional
              fluency and use English for work, study, or international
              communication. This course covers:
            </p>
            <ul className="list-disc text-gray-600 ml-5 mb-4">
              <li>Public speaking and presentation skills</li>
              <li>Business English for professional settings</li>
              <li>Debates and advanced group discussions</li>
              <li>Formal writing (emails, reports, applications)</li>
            </ul>
            <p className="text-gray-700 mb-4">
              📜 <strong>Certificate:</strong> Advanced English Certificate.
            </p>
            <WhatsAppButton />
          </div>

          {/* Certificate Only */}
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Certificate Only (Placement Test)
            </h2>
            <p className="text-gray-700 mb-4">
              Already confident in your English skills? You can skip the course
              and earn an official certificate by passing our assessment test.
              Options available:
            </p>
            <ul className="list-disc text-gray-600 ml-5 mb-4">
              <li>3-Month Certificate</li>
              <li>6-Month Certificate</li>
            </ul>
            <p className="text-gray-700 mb-4">
              After a short online speaking and writing test, successful
              candidates will receive a PDF certificate directly.
            </p>
            <p className="text-gray-700 mb-4">
              📜 <strong>Certificate:</strong> Official World English Training
              Center Certificate.
            </p>
            <WhatsAppButton />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">
          Take the Next Step in Your English Journey
        </h2>
        <p className="mb-8 text-lg text-gray-200">
          Whether you’re starting fresh, aiming for professional English, or
          just need your certificate, we have a program for you.
        </p>
        <WhatsAppButton />
      </section>
    </div>
  );
}
