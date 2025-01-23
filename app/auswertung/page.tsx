"use client"
import { FC, useEffect, useState } from "react";
import useStoredNumbers from "../../hooks/useStoredNumber";
import Header from "@/components/Header";
import { motion } from "framer-motion";
import CountUp from 'react-countup';

const parties = [
  {
    name: "Freiheitspartei",
    description: "Setzt sich für individuelle Freiheit und starke nationale Sicherheit ein.",
    answers: [2, 1, 1, 2, 1], 
  },
  {
    name: "Soziale Gerechtigkeit",
    description: "Fokussiert sich auf Gleichberechtigung und den Schutz von Schwachen in der Gesellschaft.",
    answers: [-2, -1, 1, -2, 0],
  },
  {
    name: "Öko-Reformer",
    description: "Strebt nach einer nachhaltigen Zukunft mit Fokus auf Umweltschutz und Bildung.",
    answers: [0, 1, 0, 1, -1],
  },
  {
    name: "Wirtschaftsoptimierer",
    description: "Glaubt an einen freien Markt und die Förderung von wirtschaftlichem Wachstum durch unternehmerische Freiheit.",
    answers: [1, 2, -1, 0, 2],
  },
];

const calculateMatch = (userAnswers: number[], partyAnswers: number[]): number => {
  const totalQuestions = userAnswers.length;
  let matchScore = 0;

  for (let i = 0; i < totalQuestions; i++) {
    if (userAnswers[i] === partyAnswers[i]) {
      matchScore += 1;
    } else if (userAnswers[i] === 0 || partyAnswers[i] === 0) {
      matchScore += 0.5; 
    }
  }

  return (matchScore / totalQuestions) * 100;
};

interface PartyResult {
  name: string;
  desc: string;
  matchPercentage: number;
}
const ResultsPage: FC = () => {
  const [userAnswers] = useStoredNumbers([]);
  const [results, setResults] = useState<PartyResult[]>([]);
  const [counting, setCounting] = useState(false);

  useEffect(() => {
    const partyResults = parties.map((party) => {
      const matchPercentage = calculateMatch(userAnswers, party.answers);
      return {
        name: party.name,
        desc: party.description,
        matchPercentage,
      };
    });

    partyResults.sort((a, b) => b.matchPercentage - a.matchPercentage);
    setResults(partyResults);
    setCounting(true); // Start counting animation when the page loads
  }, [userAnswers]);

  return (
    <div>
      <Header />
      <div className="min-h-screen flex md:items-center md:justify-center">
        <motion.div
          className="bg-white p-6 max-w-lg w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-semibold font-poppins mb-4 text-center md:text-left">Deine Ergebnisse</h1>
          {results.length > 0 && (
            <div>
              <h2 className="text-xl font-medium font-inter text-center md:text-left mb-5">Beste Übereinstimmung:</h2>
              <div className="mt-2 bg-gray-200 p-4 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold font-inter text-xl">{results[0].name}</h3>
                <span className="font-inter">{results[0].desc}</span>
                <motion.p
                  className="font-inter mt-5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  Übereinstimmung:{" "}
                  <motion.span
                    className="font-bold text-2xl"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                    }}
                    transition={{ delay: 0.6, duration: 1 }}
                    key={results[0].matchPercentage}
                  >
                    {counting ? (
                      <CountUp
                        start={0}
                        end={results[0].matchPercentage}
                        duration={2}
                        separator="."
                        decimals={2}
                      />
                    ) : (
                      `${results[0].matchPercentage.toFixed(2)}`
                    )}
                      %
                  </motion.span>
                </motion.p>
              </div>

              <div className="mt-6 font-inter">
                <h2 className="text-xl font-bold mt-10">Alle Parteien:</h2>
                <ul className="space-y-4 mt-4">
                  {results.map((result, index) => (
                    <motion.li
                      key={index}
                      className="flex justify-between items-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                    >
                      <span>{result.name}</span>
                      <span>{result.matchPercentage.toFixed(2)}%</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ResultsPage;

