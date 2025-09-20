"use client";
import Image from "next/image";

export default function Books() {
  const books = [
    {
      id: 1,
      title: "English Grammar in Use",
      author: "Raymond Murphy",
      description:
        "The world’s best-selling grammar book for learners of English. Perfect for self-study.",
      image: "/com.jpeg", 
    },
    {
      id: 2,
      title: "Oxford Word Skills",
      author: "Ruth Gairns & Stuart Redman",
      description:
        "Improve your vocabulary step by step with clear examples and practice exercises.",
      image: "/ox.jpeg", 
    },
    {
      id: 3,
      title: "Cambridge English Pronunciation",
      author: "Pauline Cullen",
      description:
        "Master English pronunciation with audio and interactive practice materials.",
      image: "/brige.jpg", 
    },
    
  ];

  const fallbackImage = "/books/placeholder.jpg"; 

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">
          English Learning Books
        </h1>
        <p className="text-lg font-bold text-gray-700">
          Explore our recommended books to boost your English grammar,
          vocabulary, and confidence.
          and 
          
        </p>
      </div>

      
      <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {books.map((book) => (
          <div
            key={book.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-6 text-center"
          >
            
            <div className="w-full h-64 relative mb-4">
              <Image
                src={book.image}
                alt={book.title}
                fill
                onError={(e) => {
                  e.currentTarget.src = fallbackImage; 
                }}
                style={{ objectFit: "contain" }}
                className="rounded-lg"
              />
            </div>

            
            <h3 className="text-xl font-semibold text-blue-800">
              {book.title}
            </h3>
            <p className="text-sm text-gray-500 mb-2">by {book.author}</p>
            <p className="text-gray-600 text-base mb-4">{book.description}</p>

            
            <button className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
