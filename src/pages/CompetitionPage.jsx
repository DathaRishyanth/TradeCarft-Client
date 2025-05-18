import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import StrategyFormModal from "../components/StrategyFormModal";
import Navbar2 from "@/components/Navbar2";

const CompetitionPage = () => {
  const { id } = useParams();
  const [competition, setCompetition] = useState(null);
  const [entries, setEntries] = useState([]);
  const [error, setError] = useState(null);
  const [loadingEntries, setLoadingEntries] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [showStrategyForm, setShowStrategyForm] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
  const [entryId, setEntryId] = useState(null);

  const handleSubmitSuccess = () => {
    setRefreshKey(prev => prev + 1); // Trigger entries refresh
  };

  const fetchEntries = async () => {
    try {
      setLoadingEntries(true);
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/competition/${id}/entries`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      setEntries(response.data);
  
      const userId = parseInt(localStorage.getItem("userId"), 10);
      const userEntry = response.data.find(entry => entry.userId === userId);
      
      if (userEntry) {
        setIsRegistered(true);
        setEntryId(userEntry.id);
      }
    } catch (err) {
      handleError(err, "fetching entries");
    } finally {
      setLoadingEntries(false);
    }
  };

  useEffect(() => {
    const fetchCompetition = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/v1/competition/get/${id}`,
          {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
          }
        );
        setCompetition(response.data);
      } catch (err) {
        handleError(err, "fetching competition details");
      }
    };

    fetchEntries();

    const handleError = (err, context) => {
      if (err.response) {
        if (err.response.status === 404) {
          setError("Competition not found");
        } else {
          setError(`Error ${context}`);
        }
      } else {
        setError("Network error");
      }
    };

    fetchCompetition();
    fetchEntries();
  }, [id, refreshKey]);

  const handleRegister = async () => {
    try {
      // First check if we already have an entry
      if (entryId) {
        setShowStrategyForm(true);
        return;
      }

      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/competition/register`,
        {
          competitionId: parseInt(id, 10),
          userId: parseInt(localStorage.getItem("userId"), 10),
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );

      setEntryId(response.data.id);
      setIsRegistered(true);
      setShowStrategyForm(true); // Auto-open strategy form after registration
    } catch (err) {
      console.error("Registration error", err);
    }
  };

  if (error) {
    return <div className="min-h-screen flex items-center justify-center bg-gray-900 text-red-400">{error}</div>;
  }

  if (!competition) {
    return <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">Loading competition details...</div>;
  }

  return (
    <>
    <Navbar2/>
    <div className="min-h-screen p-6 text-white">
      {showStrategyForm && (
      <StrategyFormModal
        competitionId={parseInt(id, 10)}
        entryId={entryId}
        onClose={() => setShowStrategyForm(false)}
        onSuccess={handleSubmitSuccess}
      />
    )}
      <div className="max-w-4xl mx-auto mb-8">
        <h1 className="text-4xl font-bold mb-2 text-blue-400">{competition.name}</h1>
        <p className="text-gray-300 mb-4">{competition.description}</p>
        <div className="flex gap-4 text-sm text-gray-400">
          <span>Total Entries: {competition.totalEntries}</span>
          <span>Created: {new Date(competition.createdAt).toLocaleDateString()}</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mb-8 flex justify-end">
        {isRegistered ? (
          <Button
            onClick={() => {
              if (!entryId) {
                // If entryId is missing but user is registered, refetch entries
                fetchEntries().then(() => setShowStrategyForm(true));
              } else {
                setShowStrategyForm(true);
              }
            }}
            className="bg-blue-500 hover:bg-blue-600"
          >
            Submit strategy
          </Button>
        ) : (
          <Button onClick={handleRegister} className="bg-blue-500 hover:bg-blue-600">
            Register
          </Button>
        )}
      </div>

      <Card className="max-w-4xl mx-auto bg-gray-800 border border-gray-700">
        <CardHeader>
          <CardTitle className="text-xl text-blue-300">Leaderboard</CardTitle>
          <CardDescription className="text-sm text-gray-400">View the top participants and their performance.</CardDescription>
        </CardHeader>
        <CardContent>
          {loadingEntries ? (
            <div className="p-4">Loading entries...</div>
          ) : entries.length === 0 ? (
            <div className="p-4 text-gray-300">No entries yet</div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-700 text-gray-400">
                  <TableHead>Rank</TableHead>
                  <TableHead>User</TableHead>
                  <TableHead>Returns</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {entries.map(entry => (
                  <TableRow
                    key={entry.id}
                    className={`border-t border-gray-700 hover:bg-gray-700/50 text-white`}
                  >
                    <TableCell>#{entry.rank}</TableCell>
                    <TableCell>{entry.user.email}</TableCell>
                    <TableCell className="font-mono text-green-400">{(entry.returns).toFixed(2)}%</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
    </>
  );
};

export default CompetitionPage;
