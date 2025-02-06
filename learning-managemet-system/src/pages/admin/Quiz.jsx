// export default function Quiz(){
//     return(
//         <div className="text-center text-white">
//         <div className="text-lg font-semibold">SCORE: 100</div>
//         <div className="relative inline-block my-6">
//           <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold">
//             15
//           </div>
//           <div className="circle w-20 h-20 rounded-full" />
//         </div>
//         <div className="text-2xl font-semibold mb-6">
//           How many spikes does a porcupine have?
//         </div>
//         <div className="grid grid-cols-2 gap-4 mb-6">
//           <button className="bg-red-500 py-2 px-4 rounded-full">
//             A. 1000 spikes
//           </button>
//           <button className="bg-red-500 py-2 px-4 rounded-full">
//             B. 2000 spikes
//           </button>
//           <button className="bg-red-500 py-2 px-4 rounded-full">
//             C. 3000 spikes
//           </button>
//           <button className="bg-red-500 py-2 px-4 rounded-full border-4 border-white">
//             D. 4000 spikes
//           </button>
//         </div>
//         <div className="text-lg">QUESTION 1</div>
//       </div>
//     )
// }
import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import { motion } from 'framer-motion';

const Quiz = () => {
  const [score, setScore] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [timer, setTimer] = useState(60); // 1-minute timer
  const [intervalId, setIntervalId] = useState(null);
  const [quizOver, setQuizOver] = useState(false); // State to check if quiz is over

  const questions = [
    {
      question: 'How many spikes does a porcupine have?',
      answers: ['1000 spikes', '2000 spikes', '3000 spikes', '4000 spikes'],
      correctAnswer: 3, // D. 4000 spikes
    },
    {
      question: 'What is the capital of France?',
      answers: ['Berlin', 'Madrid', 'Paris', 'Rome'],
      correctAnswer: 2, // C. Paris
    },
    {
      question: 'What is 5 + 3?',
      answers: ['6', '7', '8', '9'],
      correctAnswer: 2, // C. 8
    },
    // Add more questions as needed
  ];

  useEffect(() => {
    // Start timer when the question changes and quiz is not over
    if (quizOver || questionIndex >= questions.length) return;

    if (intervalId) {
      clearInterval(intervalId);
    }
    const newIntervalId = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(newIntervalId);
          handleNextQuestion();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    setIntervalId(newIntervalId);

    return () => clearInterval(newIntervalId);
  }, [questionIndex, quizOver]);

  const handleAnswer = (index) => {
    if (answered || quizOver) return; // Prevent multiple selections and after quiz ends
    setSelectedAnswer(index);
    if (index === questions[questionIndex].correctAnswer) {
      setScore(score + 10);
    } else {
      // Change the background color to black for incorrect answers
      setTimeout(() => {
        setAnswered(true);
      }, 300); // Delay to show the incorrect answer effect
    }
    setAnswered(true);

    // Move to the next question after a short delay
    setTimeout(() => {
      handleNextQuestion();
    }, 1000);
  };

  const handleSkip = () => {
    clearInterval(intervalId);
    handleNextQuestion();
  };

  const handleNextQuestion = () => {
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
      setSelectedAnswer(null);
      setAnswered(false);
      setTimer(60); // Reset timer for the next question
    } else {
      setQuizOver(true); // End the quiz
    }
  };

  const handleRestart = () => {
    setQuizOver(false);
    setScore(0);
    setQuestionIndex(0);
    setSelectedAnswer(null);
    setAnswered(false);
    setTimer(60);
  };

  return (
    <div className="w-full h-screen bg-gray-900 flex flex-col items-center justify-center text-white p-6">
      {!quizOver ? (
        <>
          {/* Score Display */}
          <div className="text-lg font-semibold mb-4">SCORE: {score}</div>

          {/* 3D Canvas */}
          <Canvas className="w-full h-[300px] sm:h-[500px]">
            <ambientLight />
            <spotLight position={[10, 10, 10]} />
            <OrbitControls />
            <motion.mesh
              animate={{
                rotateY: selectedAnswer !== null ? Math.PI : 0, // Rotate on answer
              }}
              transition={{ duration: 1 }}
              position={[-2, 1, 0]}
            >
              <Sphere args={[1, 32, 32]}>
                <shaderMaterial
                  args={[{
                    vertexShader: `
                      void main() {
                        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                      }
                    `,
                    fragmentShader: `
                      void main() {
                        gl_FragColor = vec4(0.5, 0.5, 1.0, 1.0); // Blue shader
                      }
                    `,
                  }]}
                />
              </Sphere>
            </motion.mesh>
          </Canvas>

          {/* Countdown Timer */}
          <div className="text-3xl font-semibold mb-4">
            Time Left: {timer}s
          </div>

          {/* Question Section */}
          <div className="text-2xl font-semibold mb-6 mt-6 text-center">
            {questions[questionIndex].question}
          </div>

          {/* Answer Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 w-full">
            {questions[questionIndex].answers.map((answer, index) => (
              <motion.button
                key={index}
                onClick={() => handleAnswer(index)}
                className={`py-3 px-6 rounded-full text-xl font-medium hover:bg-red-600 ${
                  selectedAnswer === index
                    ? 'bg-green-500' // Correct answer style
                    : 'bg-red-500 '
                } ${answered && selectedAnswer === index && index !== questions[questionIndex].correctAnswer ? 'bg-black' : ''}`}
                // whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {String.fromCharCode(65 + index)}. {answer}
              </motion.button>
            ))}
          </div>

          {/* Skip Button */}
          <div className="mt-4">
            <button
              onClick={handleSkip}
              className="py-3 px-6 rounded-full bg-yellow-500 hover:bg-yellow-600 text-xl font-medium transition-all duration-300"
            >
              Skip
            </button>
          </div>

          <div className="text-lg mt-4">QUESTION {questionIndex + 1}</div>
        </>
      ) : (
        <div className="flex flex-col items-center">
          <div className="text-4xl font-bold mb-6">Quiz Over!</div>
          <div className="text-2xl font-semibold mb-6">Your Score: {score}</div>
          <button
            onClick={handleRestart}
            className="py-3 px-6 rounded-full bg-green-500 hover:bg-green-600 text-xl font-medium transition-all duration-300"
          >
            Try Again
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
