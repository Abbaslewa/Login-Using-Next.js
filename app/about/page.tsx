import WhatsAppButton from "../components/WhatsAppButton";

export default function Courses() {
  return (
    <div className="flex flex-col">
      
      <section className="bg-blue-900 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-extrabold mb-4">Our Courses</h1>
        <p className="text-lg max-w-3xl mx-auto text-gray-200">
          At <strong>World English Training Center</strong>, we offer flexible
          programs designed to help you build confidence, improve fluency, and
          achieve global opportunities with an official certificate.
        </p>
      </section>

      
      <section className="py-16 px-6 font-bold  bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              3-Month Speaking Course
            </h2>
            <p className="text-gray-700 mb-4 ">
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

      
      <section className="relative py-20 bg-blue-400/20 rounded-2xl  text-center overflow-hidden">
  {/* Decorative background */}
  <div className="absolute inset-0">
    <div className="absolute top-0 left-0 w-40 h-40 bg-blue-600/30 rounded-full blur-3xl" />
    <div className="absolute bottom-0 right-0 w-60 h-60 bg-blue-400/20 rounded-full blur-2xl" />
  </div>

  <div className="relative max-w-3xl mx-auto px-6">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg">
       Ready to Start Your English Journey?
    </h2>
    <p className="mb-10 text-base sm:text-lg md:text-xl  leading-relaxed">
      Register today and take the first step toward <span className="font-semibold text-blue-900">global opportunities</span>.
    </p>

    <a
      href="https://chat.whatsapp.com/KPVY3wV2iosA6nrYlolDaH" 
      target="_blank"
      className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 active:scale-95 transition duration-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12.04 2.003c-5.524 0-10.002 4.478-10.002 10.002a9.93 9.93 0 001.367 5.034L2 22l5.114-1.346a9.94 9.94 0 004.926 1.295h.004c5.523 0 10.001-4.478 10.001-10.002 0-2.673-1.041-5.186-2.93-7.074A9.94 9.94 0 0012.04 2.003zm5.846 14.544c-.248.695-1.229 1.26-1.694 1.34-.447.08-1.012.115-1.637-.101-.379-.131-.869-.283-1.498-.554-2.64-1.145-4.353-3.942-4.487-4.126-.131-.184-1.07-1.425-1.07-2.72s.678-1.922.918-2.19c.24-.269.524-.336.698-.336.174 0 .349.002.502.009.162.007.379-.059.594.454.216.512.732 1.768.797 1.895.065.127.109.276.02.444-.087.168-.131.276-.26.424-.131.148-.276.33-.394.444-.131.127-.268.266-.115.521.152.255.674 1.111 1.448 1.8 1.002.892 1.845 1.165 2.1 1.297.261.132.412.112.567-.067.152-.179.652-.758.826-1.018.174-.26.348-.218.593-.131.245.087 1.548.73 1.815.863.267.131.445.197.51.309.065.112.065.647-.183 1.342z" />
      </svg>
      Register Now
    </a>
  </div>
</section>

    </div>
  );
}
