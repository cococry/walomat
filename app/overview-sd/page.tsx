"use client";
import Header from "@/components/Header";
import { questions } from "@/components/questions";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const answers =  [
  1,  // Kultur: Brauchen kulturelle Veranstaltungen eine Unterstützung vom Staat?
  -1, // Marktwirtschaft (Steuern): Soll es Steuern oder Standgebühren geben?
  0,  // Marktwirtschaft (gleiche Steuern): Sollen alle Unternehmen die gleichen Steuern zahlen?
  1,  // Marktwirtschaft (Gewinnumwandlung): Soll ein Teil des Gewinns der Unternehmen wieder in Euro umgetauscht werden?
  -2,  // Marktwirtschaft (Arbeitspflicht): Soll die Arbeitspflicht kontrolliert werden?
  -1, // Marktwirtschaft (unmotivierte Schüler): Sollten unmotivierte Schüler vom Staat zu gemeinnützigen Tätigkeiten gezwungen werden?
  -1,  // Nachhaltigkeit (Unternehmen): Sollten Unternehmen verpflichtet werden, nachhaltig zu produzieren?
  -2, // Nachhaltigkeit (höchstes Ziel): Sollte Nachhaltigkeit unser höchstes Ziel sein?
  1,  // Sicherheit (gesicherte Grenzen): Brauchen wir gesicherte Grenzen?
  0,  // Sicherheit (starke Polizei): Brauchen wir eine starke Polizei?
  -1,  // Sicherheit (Anwesenheitskontrollen): Brauchen wir Anwesenheitskontrollen an unseren Grenzen?


];

const answersStr  =  [
  "Die freie Entfaltung des Menschen in der Kunst sollte gefördert werden.",
  "Nein, freies Wirtschaften.",
  "Keine Erläuterung.",
  "Keine Erläuterung.",
  "Nein, sie soll abgeschafft werden",
  "Nein, das ist ein Eingriff in die Zukunft.",
  "Nur wenn sie der Allgemeinheit schaden (z.B Verschmutzung des Schulhauses)",
  "Freiheit ist unser hoechstes Ziel.",
  "Ja, zum Schutz unser Buerger.",
  "Keine Erlaeuterung.",
  "Nein, wir wollen weg von einem Kontrollstaat."
];

const answerLabels = {
  2: "SD stimmt doppelt zu",
  1: "SD stimmt zu",
  0: "SD sagt neutral",
  [-1]: "SD stimmt nicht zu",
  [-2]: "SD stimmt doppelt nicht zu",
};

export default function QuestionAccordion() {
  return (
    <div>
      <Header />
      <div className="font-inter min-h-screen flex md:items-center md:justify-center">
        <div className="bg-white p-6 max-w-2xl w-full">
          <h1 className="text-4xl font-semibold font-poppins mb-4 text-center md:text-left">
            SDs Antworten 
          </h1>
          <Accordion type="single" collapsible>
            {questions.map((q, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{q.question}</AccordionTrigger>
                <AccordionContent>
                  <h5 className="font-bold text-lg font-inter mt-4">
                    {answerLabels[answers[index] as keyof typeof answerLabels]}
                  </h5>
                  <p>
                  {answersStr[index]}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
