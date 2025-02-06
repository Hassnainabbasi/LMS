import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function StartQuiz() {
  return (
    <div className="bg-white rounded-lg  w-full max-w-4xl mx-auto overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-20">
        {/* Left Section (Text Content) */}
        <motion.div
          className="text-center md:text-left md:w-1/2"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Welcome to Quiz
          </h1>
          <p className="text-gray-600 mb-6">
            Quiz is a powerful quizzing platform developed by MultiCode group.
          </p>
          <Link to={'/admin/quiz'}>
            <motion.button
              className="bg-white text-gray-800 font-semibold py-2 px-4 border border-gray-300 rounded shadow hover:bg-gray-100"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </Link>
        </motion.div>

        {/* Right Section (Image) */}
        <motion.div
          className="md:w-1/2 mt-8 md:mt-0"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            alt="Illustration of a person working on a computer with quiz elements on the screen"
            className="w-full rounded-lg shadow-xl"
            height={300}
            src="https://storage.googleapis.com/a1aa/image/8LeyozdAh73488HF4bwEsBgBWCs6KdZiape-f04fP1g.jpg"
            width={400}
          />
        </motion.div>
      </div>
    </div>
  );
}
