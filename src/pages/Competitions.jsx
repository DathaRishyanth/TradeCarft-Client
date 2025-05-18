import Navbar from "@/components/Navbar";
import Navbar2 from "@/components/Navbar2";
import CompCard from "@/components/CompCard";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const Competitions = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [competitionName, setCompetitionName] = useState("");
  const [competitionDesc, setCompetitionDesc] = useState("");
  const [competitions, setCompetitions] = useState([]);

  useEffect(() => {
    const fetchCompetitions = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/v1/competition/all-competitions`,
          {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
          }
        );
        setCompetitions(response.data.competitions);
      } catch (error) {
        console.error("Error fetching competitions:", error);
      }
    };

    fetchCompetitions();
  }, []);

  const handleSubmit = async () => {
    // Handle competition creation logic here
    try {
      const res = await axios.post(
        `${
          import.meta.env.VITE_BACKEND_URL
        }/api/v1/competition/create-competition`,
        {
          name: competitionName,
          description: competitionDesc,
          authorId: parseInt(localStorage.getItem("userId"), 10),
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      console.log({ competitionName, competitionDesc });
      setIsModalOpen(false);
      setCompetitionName("");
      setCompetitionDesc("");
    } catch (error) {
      console.error("Error creating competition:", error);
    }
  };

  return (
    <>
      <Navbar />
      <Navbar2 />
      <div className="w-full p-8">
        <div className="flex justify-between items-center mb-6">
          <div className="text-2xl text-white font-semibold">
            Featured Competitions
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
            onClick={() => setIsModalOpen(true)}
          >
            Create Competition
          </motion.button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {competitions.map((competition) => (
            <CompCard
              key={competition.id}
              id = {competition.id}
              name={competition.name}
              description={competition.description}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-slate-900 rounded-lg p-6 w-full max-w-md border border-cyan-500 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              Create Competition
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-white mb-2">
                  Competition Name
                </label>
                <input
                  type="text"
                  value={competitionName}
                  onChange={(e) => setCompetitionName(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-slate-800 text-white border border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  placeholder="Enter competition name"
                />
              </div>
              <div>
                <label className="block text-white mb-2">Description</label>
                <textarea
                  value={competitionDesc}
                  onChange={(e) => setCompetitionDesc(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-slate-800 text-white border border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 h-32 resize-none"
                  placeholder="Enter competition description"
                />
              </div>
              <div className="flex justify-end space-x-3 mt-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
                  onClick={handleSubmit}
                >
                  Create
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Competitions;
