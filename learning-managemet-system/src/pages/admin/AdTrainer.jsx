import React, { useState } from "react";

const AddTrainer = () => {
  const [trainerName, setTrainerName] = useState("");
  const [trainerEmail, setTrainerEmail] = useState("");
  const [trainerPhone, setTrainerPhone] = useState("");
  const [trainerBio, setTrainerBio] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newTrainer = {
      trainerName,
      trainerEmail,
      trainerPhone,
      trainerBio,
    };

    try {
      const response = await fetch("http://localhost:3000/auth/trainer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTrainer),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Trainer added successfully");
        setTrainerName("");
        setTrainerEmail("");
        setTrainerBio("");
        setTrainerPhone("");
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error("Error adding trainer:", error);
      alert("Error adding trainer.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-lg w-full bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-center text-indigo-500 mb-6">Trainer</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="trainerName" className="block text-gray-700 font-semibold">
              Trainer Name
            </label>
            <input
              type="text"
              id="trainerName"
              value={trainerName}
              onChange={(e) => setTrainerName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label htmlFor="trainerEmail" className="block text-gray-700 font-semibold">
              Trainer Email
            </label>
            <input
              type="email"
              id="trainerEmail"
              value={trainerEmail}
              onChange={(e) => setTrainerEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label htmlFor="trainerPhone" className="block text-gray-700 font-semibold">
              Trainer Phone (optional)
            </label>
            <input
              type="text"
              id="trainerPhone"
              value={trainerPhone}
              onChange={(e) => setTrainerPhone(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="trainerBio" className="block text-gray-700 font-semibold">
              Trainer Bio
            </label>
            <textarea
              id="trainerBio"
              value={trainerBio}
              onChange={(e) => setTrainerBio(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Add Trainer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTrainer;