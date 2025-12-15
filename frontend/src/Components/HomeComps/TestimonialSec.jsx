import { useState, useEffect, useRef } from "react";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechCorp Solutions",
    testimonial: "Working with this team has transformed our digital presence completely. Their innovative approach and attention to detail are unmatched in the industry.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CEO",
    company: "Innovation Labs",
    testimonial: "The level of professionalism and creativity they bring to the table is exceptional. Our projects have seen tremendous success thanks to their expertise.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Product Manager",
    company: "Digital Dynamics",
    testimonial: "Their ability to understand our vision and translate it into reality exceeded our expectations. The results speak for themselves.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    rating: 4
  },
//   {
//     id: 4,
//     name: "David Thompson",
//     role: "Operations Head",
//     company: "Global Systems",
//     testimonial: "Outstanding service and remarkable results. They have helped us achieve our goals while maintaining the highest standards of quality.",
//     avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
//     rating: 5
//   }
];

const TestimonialSec = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const autoplayRef = useRef();

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (isAutoplay) {
      autoplayRef.current = setInterval(nextSlide, 1000);
    }
    return () => clearInterval(autoplayRef.current);
  }, [isAutoplay]);

  const handleMouseEnter = () => setIsAutoplay(false);
  const handleMouseLeave = () => setIsAutoplay(true);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <FaStar
        key={index}
        className={`${index < rating ? "text-yellow-400" : "text-gray-300"} inline-block`}
      />
    ));
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600">Trusted by businesses worldwide</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center justify-center mb-8">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-gray-200"
                  loading="lazy"
                />
              </div>
              <FaQuoteLeft className="text-4xl text-blue-500 mb-6" />
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                {testimonial.testimonial}
              </p>
              <div className="mb-4">{renderStars(testimonial.rating)}</div>
              <h3 className="text-xl font-semibold text-gray-900">
                {testimonial.name}
              </h3>
              <p className="text-gray-600">
                {testimonial.role} at {testimonial.company}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSec;