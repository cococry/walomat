"use client";
import Header from "@/components/Header";
import { questions } from "@/components/questions";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const answers =  [
  0,  // Kultur: Brauchen kulturelle Veranstaltungen eine Unterstützung vom Staat?
  1,  // Marktwirtschaft (Steuern): Soll es Steuern oder Standgebühren geben?
  -1,  // Marktwirtschaft (gleiche Steuern): Sollen alle Unternehmen die gleichen Steuern zahlen?
  1,  // Marktwirtschaft (Gewinnumwandlung): Soll ein Teil des Gewinns der Unternehmen wieder in Euro umgetauscht werden?
  0,  // Marktwirtschaft (Arbeitspflicht): Soll die Arbeitspflicht kontrolliert werden?
  2,  // Marktwirtschaft (unmotivierte Schüler): Sollten unmotivierte Schüler vom Staat zu gemeinnützigen Tätigkeiten gezwungen werden?
  -1,  // Nachhaltigkeit (Unternehmen): Sollten Unternehmen verpflichtet werden, nachhaltig zu produzieren?
  -1,  // Nachhaltigkeit (höchstes Ziel): Sollte Nachhaltigkeit unser höchstes Ziel sein?
  1,  // Sicherheit (gesicherte Grenzen): Brauchen wir gesicherte Grenzen?
  1,  // Sicherheit (starke Polizei): Brauchen wir eine starke Polizei?
  1,  // Sicherheit (Anwesenheitskontrollen): Brauchen wir Anwesenheitskontrollen an unseren Grenzen?

];


const answerLabels = {
  2: "LPD stimmt doppelt zu",
  1: "LPD stimmt zu",
  0: "LPD sagt neutral",
  [-1]: "LPD stimmt nicht zu",
  [-2]: "LPD stimmt doppelt nicht zu",
};

export default function QuestionAccordion() {
  return (
    <div>
      <Header />
      <div className="font-inter min-h-screen flex md:items-center md:justify-center">
        <div className="bg-white p-6 max-w-2xl w-full">
          <h1 className="text-4xl font-semibold font-poppins mb-4 text-center md:text-left">
            LPDs Antworten 
          </h1>
          <Accordion type="single" collapsible>
            {questions.map((q, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{q.question}</AccordionTrigger>
                <AccordionContent>
                  <p className="text-lg font-inter mt-4">
                    {answerLabels[answers[index] as keyof typeof answerLabels]}
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
