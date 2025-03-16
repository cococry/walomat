"use client";
import Header from "@/components/Header";
import { questions } from "@/components/questions";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const answers =  [
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
];
const answersStr  =  [
  "Kulturelle Veranstaltungen, fördern den gesellschaftlichen Zusammenhalt und geben allen Bürgern die Möglichkeit am öffentlichen Leben teil zu haben.",
  "Ja, den progressive Steuern gewährleisten soziale Gerechtigkeit und schützen vor Oligarch Rischen Strukturen, die unsere Demokratie auch in der realen Gesellschaft akut gefährden.",
  "Nein, progressive Steuern sind in einer sozialen Marktwirtschaft essenziell. Damit verhindern wir eine Anhäufung von Macht und Einfluss, die das Wohl weniger auf der Arbeit vieler aufbaut. Ebenso wollen wir es ermöglichen unsere Gesellschaft möglichst nachhaltig zu gestalten, weshalb wir es denen leicht machen die besonders auf Nachhaltigkeit achten und eine Müllsteuer für Unternehmen mit viel Abfall einzuführen.",
  "Ja, damit wird die Motivation zum Arbeiten gesteigert und die Konkurrenz der Unternehmen sorgt für eine stabile und dynamische Wirtschaft.",
  "Nein, wir kontrollieren die Arbeitspflicht nicht aber das Geld wird nach der Schule als Staat Woche wieder teilweise umgetauscht, weshalb Anreize und Motivation zum Arbeiten geschaffen werden.",
  "Positive Anreize anstatt Strafen.",
  "Ja, die DVD bevorzugt nachhaltige Produktion. Bei schweren Missachtung der Umwelt können wir jedoch nicht von Verpflichtungen absehen.",
  "Ja, ohne eine intakte Umwelt hat unsere Generation keine Zukunft und die soziale Ungerechtigkeit würde verstärkt werden. Damit die nachhaltige Produktion nicht zur Last wird machen wir es denen leicht die nachhaltig produzieren. Damit haben alle die selbe Chance.",
  "Nein, Fascho Scheiße, keiner wird ausgegrenzt. Alle sind gleich.",
  "Wir sind gegen eine stark ausgeprägte Polizei und Machtmissbrauch zu verhindern.",
  "Nein, wir sind ja nicht Droste gegen den Rest der Welt."
];




const answerLabels = {
  2: "DVD stimmt doppelt zu",
  1: "DVD stimmt zu",
  0: "DVD sagt neutral",
  [-1]: "DVD stimmt nicht zu",
  [-2]: "DVD stimmt doppelt nicht zu",
};


export default function QuestionAccordion() {
  return (
    <div>
      <Header />
      <div className="font-inter min-h-screen flex md:items-center md:justify-center">
        <div className="bg-white p-6 max-w-2xl w-full">
          <h1 className="text-4xl font-semibold font-poppins mb-4 text-center md:text-left">
            DVDs Antworten 
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
