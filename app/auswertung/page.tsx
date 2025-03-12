"use client"
import { FC, useEffect, useState } from "react";
import useStoredNumbers from "../../hooks/useStoredNumber";
import Header from "@/components/Header";
import { motion } from "framer-motion";
import CountUp from 'react-countup';

const parties = [
  {
    name: "Red Corner Partei (RCP)",
    overview: "/overview-rcp",
    description: "Quadratisch, praktisch, gut!",
    answers: [
      1, // Kultur: Brauchen kulturelle Veranstaltungen eine Unterstützung vom Staat?
      1, // Marktwirtschaft (Steuern): Soll es Steuern oder Standgebühren geben?
      0, // Marktwirtschaft (gleiche Steuern): Sollen alle Unternehmen die gleichen Steuern zahlen?
      1,  // Marktwirtschaft (Gewinnumwandlung): Soll ein Teil des Gewinns der Unternehmen wieder in Euro umgetauscht werden?
      1, // Marktwirtschaft (Arbeitspflicht): Soll die Arbeitspflicht kontrolliert werden?
      1, // Marktwirtschaft (unmotivierte Schüler): Sollten unmotivierte Schüler vom Staat zu gemeinnützigen Tätigkeiten gezwungen werden?
      0,  // Nachhaltigkeit (Unternehmen): Sollten Unternehmen verpflichtet werden, nachhaltig zu produzieren?
      -1, // Nachhaltigkeit (höchstes Ziel): Sollte Nachhaltigkeit unser höchstes Ziel sein?
      0,  // Sicherheit (gesicherte Grenzen): Brauchen wir gesicherte Grenzen?
      1,  // Sicherheit (starke Polizei): Brauchen wir eine starke Polizei?
    -1,  // Sicherheit (Anwesenheitskontrollen): Brauchen wir Anwesenheitskontrollen an unseren Grenzen?
    ]
  },
  {
    name: "Liberale Partei Drostaniens (LPD)",
    overview: "/overview-lpd",
    description: "Für ein starkes Drostanien: LPD!",
    answers: [
      0,  // Kultur: Brauchen kulturelle Veranstaltungen eine Unterstützung vom Staat?
      1,  // Marktwirtschaft (Steuern): Soll es Steuern oder Standgebühren geben?
      -1,  // Marktwirtschaft (gleiche Steuern): Sollen alle Unternehmen die gleichen Steuern zahlen?
      1,  // Marktwirtschaft (Gewinnumwandlung): Soll ein Teil des Gewinns der Unternehmen wieder in Euro umgetauscht werden?
      0,  // Marktwirtschaft (Arbeitspflicht): Soll die Arbeitspflicht kontrolliert werden?
      1,  // Marktwirtschaft (unmotivierte Schüler): Sollten unmotivierte Schüler vom Staat zu gemeinnützigen Tätigkeiten gezwungen werden?
      -1,  // Nachhaltigkeit (Unternehmen): Sollten Unternehmen verpflichtet werden, nachhaltig zu produzieren?
      -1,  // Nachhaltigkeit (höchstes Ziel): Sollte Nachhaltigkeit unser höchstes Ziel sein?
      1,  // Sicherheit (gesicherte Grenzen): Brauchen wir gesicherte Grenzen?
      1,  // Sicherheit (starke Polizei): Brauchen wir eine starke Polizei?
      1,  // Sicherheit (Anwesenheitskontrollen): Brauchen wir Anwesenheitskontrollen an unseren Grenzen?
    ]
  },
  {
    name: "Demokratische Volkspartei Drostaniens (DVD)",
    description: "Deine linke Stimme im Parlament",
    overview: "/overview-dvd",
    answers: [
      1,  // Kultur: Brauchen kulturelle Veranstaltungen eine Unterstützung vom Staat?
      1,  // Marktwirtschaft (Steuern): Soll es Steuern oder Standgebühren geben?
      -1,  // Marktwirtschaft (gleiche Steuern): Sollen alle Unternehmen die gleichen Steuern zahlen?
      1,  // Marktwirtschaft (Gewinnumwandlung): Soll ein Teil des Gewinns der Unternehmen wieder in Euro umgetauscht werden?
      -1,  // Marktwirtschaft (Arbeitspflicht): Soll die Arbeitspflicht kontrolliert werden?
      1,  // Marktwirtschaft (unmotivierte Schüler): Sollten unmotivierte Schüler vom Staat zu gemeinnützigen Tätigkeiten gezwungen werden?
      1,  // Nachhaltigkeit (Unternehmen): Sollten Unternehmen verpflichtet werden, nachhaltig zu produzieren?
      1,  // Nachhaltigkeit (höchstes Ziel): Sollte Nachhaltigkeit unser höchstes Ziel sein?
      -1,  // Sicherheit (gesicherte Grenzen): Brauchen wir gesicherte Grenzen?
      -1,  // Sicherheit (starke Polizei): Brauchen wir eine starke Polizei?
      -1,  // Sicherheit (Anwesenheitskontrollen): Brauchen wir Anwesenheitskontrollen an unseren Grenzen?
    ]
  },
  {
    name: "Sozial empanzipiertes Droste (SD)",
    description: "Frei kämpfen, frei sein!",
    overview: "/overview-sd",
    answers: [
      1,  // Kultur: Brauchen kulturelle Veranstaltungen eine Unterstützung vom Staat?
      -1, // Marktwirtschaft (Steuern): Soll es Steuern oder Standgebühren geben?
      0,  // Marktwirtschaft (gleiche Steuern): Sollen alle Unternehmen die gleichen Steuern zahlen?
      1,  // Marktwirtschaft (Gewinnumwandlung): Soll ein Teil des Gewinns der Unternehmen wieder in Euro umgetauscht werden?
      -1,  // Marktwirtschaft (Arbeitspflicht): Soll die Arbeitspflicht kontrolliert werden?
      -1, // Marktwirtschaft (unmotivierte Schüler): Sollten unmotivierte Schüler vom Staat zu gemeinnützigen Tätigkeiten gezwungen werden?
      -1,  // Nachhaltigkeit (Unternehmen): Sollten Unternehmen verpflichtet werden, nachhaltig zu produzieren?
      -1, // Nachhaltigkeit (höchstes Ziel): Sollte Nachhaltigkeit unser höchstes Ziel sein?
      1,  // Sicherheit (gesicherte Grenzen): Brauchen wir gesicherte Grenzen?
      0,  // Sicherheit (starke Polizei): Brauchen wir eine starke Polizei?
      -1,  // Sicherheit (Anwesenheitskontrollen): Brauchen wir Anwesenheitskontrollen an unseren Grenzen?
    ]
  },
  {
    name: "Kulturelle Wirtschafts Partei (KWP)",
    description: "Wachstum und Zuversicht",
    overview: "/overview-kwp",
    answers: [
      1,  // Kultur: Brauchen kulturelle Veranstaltungen eine Unterstützung vom Staat?
      -1, // Marktwirtschaft (Steuern): Soll es Steuern oder Standgebühren geben?
      -1,  // Marktwirtschaft (gleiche Steuern): Sollen alle Unternehmen die gleichen Steuern zahlen?
      1,  // Marktwirtschaft (Gewinnumwandlung): Soll ein Teil des Gewinns der Unternehmen wieder in Euro umgetauscht werden?
      1,  // Marktwirtschaft (Arbeitspflicht): Soll die Arbeitspflicht kontrolliert werden?
      1, // Marktwirtschaft (unmotivierte Schüler): Sollten unmotivierte Schüler vom Staat zu gemeinnützigen Tätigkeiten gezwungen werden?
      -1,  // Nachhaltigkeit (Unternehmen): Sollten Unternehmen verpflichtet werden, nachhaltig zu produzieren?
      -1, // Nachhaltigkeit (höchstes Ziel): Sollte Nachhaltigkeit unser höchstes Ziel sein?
      0,  // Sicherheit (gesicherte Grenzen): Brauchen wir gesicherte Grenzen?
      1,  // Sicherheit (starke Polizei): Brauchen wir eine starke Polizei?
      1,  // Sicherheit (Anwesenheitskontrollen): Brauchen wir Anwesenheitskontrollen an unseren Grenzen?
    ]
  },
  {
    name: "Traditionelle wirtschafts Reform(TWR)",
    description: "Ohne Fleiß kein Preis",

    overview: "/overview-twr",
    answers: [
      1,  // Kultur: Brauchen kulturelle Veranstaltungen eine Unterstützung vom Staat?
      -1, // Marktwirtschaft (Steuern): Soll es Steuern oder Standgebühren geben?
      1,  // Marktwirtschaft (gleiche Steuern): Sollen alle Unternehmen die gleichen Steuern zahlen?
      1,  // Marktwirtschaft (Gewinnumwandlung): Soll ein Teil des Gewinns der Unternehmen wieder in Euro umgetauscht werden?
      1,  // Marktwirtschaft (Arbeitspflicht): Soll die Arbeitspflicht kontrolliert werden?
      -1, // Marktwirtschaft (unmotivierte Schüler): Sollten unmotivierte Schüler vom Staat zu gemeinnützigen Tätigkeiten gezwungen werden?
      -1,  // Nachhaltigkeit (Unternehmen): Sollten Unternehmen verpflichtet werden, nachhaltig zu produzieren?
      -1, // Nachhaltigkeit (höchstes Ziel): Sollte Nachhaltigkeit unser höchstes Ziel sein?
      1,  // Sicherheit (gesicherte Grenzen): Brauchen wir gesicherte Grenzen?
      1,  // Sicherheit (starke Polizei): Brauchen wir eine starke Polizei?
      1,  // Sicherheit (Anwesenheitskontrollen): Brauchen wir Anwesenheitskontrollen an unseren Grenzen?
    ]
  }
];

const calculateMatch = (userAnswers: number[], partyAnswers: number[]): number => {
  const totalQuestions = userAnswers.length;
  let matchScore = 0;
  let maxScore = 0;

  for (let i = 0; i < totalQuestions; i++) {
    let userResponse = userAnswers[i];
    let partyResponse = partyAnswers[i];

    const userWeight = Math.abs(userResponse) === 2 ? 2 : 1;
    const partyWeight = Math.abs(partyResponse) === 2 ? 2 : 1;
    if(userResponse == -2) {
      userResponse = -1;
    } else if(userResponse == 2) {
      userResponse = 1;
    }
    if(partyResponse == -2) {
      partyResponse = -1;
    } else if(partyResponse == 2) {
      partyResponse = 1;
    }

    maxScore += partyWeight;

    if (userResponse === partyResponse) {
      matchScore += userWeight; 
    } else if (userResponse === 0 || partyResponse === 0) {
      matchScore += 0.5; 
      console.log("triggered.\n");
    }
  }
  return (matchScore / maxScore) * 100;
};

interface PartyResult {
  name: string;
  desc: string;
  matchPercentage: number;
  overview: string;
}
const ResultsPage: FC = () => {
  const [userAnswers] = useStoredNumbers([]);
  const [results, setResults] = useState<PartyResult[]>([]);
  const [counting, setCounting] = useState(false);

  console.log(userAnswers);
  useEffect(() => {
    const partyResults = parties.map((party) => {
      const matchPercentage = calculateMatch(userAnswers, party.answers);
      return {
        overview: party.overview,
        name: party.name,
        desc: party.description,
        matchPercentage,
      };
    });

    partyResults.sort((a, b) => b.matchPercentage - a.matchPercentage);
    setResults(partyResults);
    setCounting(true); 
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
                      className=""
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                    >
                    <div className="flex justify-between items-center">
                      <span>{result.name}</span>
                      <span>{result.matchPercentage.toFixed(2)}%</span>
                      </div>
                      <a href={result.overview}>
                      <button className="border-[1px] text-black border-neutral-600 font-bold p-3 rounded-full mt-5">
                      Antworten der Partei 
                      </button>
                      </a>
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

