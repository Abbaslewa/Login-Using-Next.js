import WhatsAppButton from "../components/WhatsAppButton";

export default function Courses() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-extrabold mb-4">Our Courses</h1>
        <p className="text-lg max-w-3xl mx-auto text-gray-200">
          At <strong>World English Training Center</strong>, we provide
          high-quality English programs for learners of all levels. Whether
          you’re just beginning, preparing for professional use, or simply
          need an official certificate, we have the right course for you.
        </p>
      </section>

      {/* 3-Month Speaking Course */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            3-Month Speaking Course
          </h2>
          <p className="text-gray-700 mb-6">
            A fast-track program designed to improve your English speaking
            skills quickly. Ideal for learners who want confidence in daily
            conversations and real-life situations.
          </p>

          <h3 className="text-xl font-semibold text-blue-800 mb-4">
            What You Will Learn
          </h3>
          <ul className="list-disc ml-6 space-y-2 text-gray-700 mb-6">
            <li>Everyday English conversation practice</li>
            <li>Grammar basics and correct sentence building</li>
            <li>Vocabulary expansion with daily activities</li>
            <li>Listening comprehension exercises</li>
            <li>Group discussions and role-plays</li>
          </ul>

          <p className="text-gray-700 mb-6">
            📜 <strong>Certificate:</strong> Certificate of English
            Communication (3-Month)
          </p>
          <WhatsAppButton />
        </div>
      </section>

      {/* 6-Month Advanced Program */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            6-Month Advanced English Program
          </h2>
          <p className="text-gray-700 mb-6">
            A comprehensive program for learners who want to master English
            for professional, academic, and international use. By the end of
            this program, you will be able to confidently use English in
            workplaces, schools, and global environments.
          </p>

          <h3 className="text-xl font-semibold text-blue-800 mb-4">
            What You Will Learn
          </h3>
          <ul className="list-disc ml-6 space-y-2 text-gray-700 mb-6">
            <li>Advanced grammar & complex sentence structures</li>
            <li>Business English (meetings, negotiations, emails)</li>
            <li>Public speaking & professional presentations</li>
            <li>Debates and advanced group discussions</li>
            <li>Formal writing: essays, reports, and applications</li>
          </ul>

          <p className="text-gray-700 mb-6">
            📜 <strong>Certificate:</strong> Advanced English Fluency
            Certificate (6-Month)
          </p>
          <WhatsAppButton />
        </div>
      </section>

      {/* Certificate Only */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Certificate Only (Placement Test)
          </h2>
          <p className="text-gray-700 mb-6">
            Already confident in your English skills? You can skip the full
            course and earn an official certificate by completing our
            placement test. This is perfect for students and professionals
            who are already fluent.
          </p>

          <h3 className="text-xl font-semibold text-blue-800 mb-4">
            Test Includes
          </h3>
          <ul className="list-disc ml-6 space-y-2 text-gray-700 mb-6">
            <li>Speaking test with a live instructor</li>
            <li>Listening comprehension exercises</li>
            <li>Short writing assessment</li>
            <li>Personalized feedback report</li>
          </ul>

          <p className="text-gray-700 mb-6">
            📜 <strong>Certificate:</strong> Official World English Training
            Center Certificate (3-Month or 6-Month based on your choice)
          </p>
          <WhatsAppButton />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">
          Start Your English Journey Today
        </h2>
        <p className="mb-8 text-lg text-gray-200">
          Join one of our programs and take the first step towards global
          opportunities with English.
        </p>
        <WhatsAppButton />
      </section>
    </div>
  );
}
