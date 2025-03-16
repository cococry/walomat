"use client";
import Header from "@/components/Header";
import { questions } from "@/components/questions";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const answers = [
  1,  // Kultur: Brauchen kulturelle Veranstaltungen eine Unterstützung vom Staat?
  1,  // Marktwirtschaft (Steuern): Soll es Steuern oder Standgebühren geben?
  0,  // Marktwirtschaft (gleiche Steuern): Sollen alle Unternehmen die gleichen Steuern zahlen?
  1,  // Marktwirtschaft (Gewinnumwandlung): Soll ein Teil des Gewinns der Unternehmen wieder in Euro umgetauscht werden?
  1,  // Marktwirtschaft (Arbeitspflicht): Soll die Arbeitspflicht kontrolliert werden?
  1,  // Marktwirtschaft (unmotivierte Schüler): Sollten unmotivierte Schüler vom Staat zu gemeinnützigen Tätigkeiten gezwungen werden?
  0,  // Nachhaltigkeit (Unternehmen): Sollten Unternehmen verpflichtet werden, nachhaltig zu produzieren?
  -1, // Nachhaltigkeit (höchstes Ziel): Sollte Nachhaltigkeit unser höchstes Ziel sein?
  0,  // Sicherheit (gesicherte Grenzen): Brauchen wir gesicherte Grenzen?
  1,  // Sicherheit (starke Polizei): Brauchen wir eine starke Polizei?
  -1, // Sicherheit (Anwesenheitskontrollen): Brauchen wir Anwesenheitskontrollen an unseren Grenzen?
];
const answersStr  =  [
  "Unsere Staatsbürger müssen bei Laune bleiben und deshalb ist Unterstützung wichtig.",
  "Unsere Staatsbürger müssen bei Laune bleiben und deshalb ist Unterstützung wichtig. ",
  "Es sollte Steuern geben, aber nicht überall, hauptsächlich bei Firmen. Keine Einkommensteuer.",
  "Bürger/innen sollen für ihre gute Arbeit belohnt werden.",
  "Auf jeden Fall. Es wäre unfair, wenn nicht ",
  "Sozialstunden sind fair und helfen unbeliebte Arbeitsplätze zu füllen.",
  "Wäre gut wenn ja aber ist schwer zu kontrollieren.",
  "Es sollte jedoch eine ein wichtiges Ziel sein.",
  "Die Grenzen sollen sicher sein, aber die Polizei sollte dadurch nicht überfordert werden.",
  "Wir müssen die Sicherheit der Bürger/innen absichern.",
  "Wir sind nicht mehr in der DDR."
];


const answerLabels = {
  2: "RCP stimmt doppelt zu",
  1: "RCP stimmt zu",
  0: "RCP sagt neutral",
  [-1]: "RCP stimmt nicht zu",
  [-2]: "RCP stimmt doppelt nicht zu",
};

export default function QuestionAccordion() {
  return (
    <div>
      <Header />
      <div className="font-inter min-h-screen flex md:items-center md:justify-center">
        <div className="bg-white p-6 max-w-2xl w-full">
          <h1 className="text-4xl font-semibold font-poppins mb-4 text-center md:text-left">
            Red Corner Partei Antworten 
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
