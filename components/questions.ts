
interface QuizQuestionProps {
  topic: string;
  question: string;
  idx: number;
  imgUrl: string; 
}

export const questions: QuizQuestionProps[] = [
  { 
    topic: "Kultur", 
    question: "Brauchen kulturelle Veranstaltungen eine Unterstützung vom Staat?." , 
    idx: 1,
    imgUrl: "/images/img1.webp"
  },
  { 
    topic: "Marktwirtschaft", 
    question: "Soll es Steuern oder Standgebüren geben?" , 
    idx: 2,
    imgUrl: "/images/img2.webp"
  },
  { 
    topic: "Marktwirtschaft", 
    question: "Sollen alle Unternehmen die gleichen Steuern zahlen?" , 
    idx: 3,
    imgUrl: "/images/img2.webp"
  },
  { 
    topic: "Marktwirtschaft", 
    question: "Soll ein Teil des Gewinns der Unternehmen wieder in Euro umgetauscht werden?", 
    idx: 4,
    imgUrl: "/images/img5.webp"
  },
  { 
    topic: "Marktwirtschaft", 
    question: "Soll die Arbeitspflicht kontrolliert werden?", 
    idx: 5,
    imgUrl: "/images/img5.webp"
  },
  { 
    topic: "Marktwirtschaft", 
    question: "Sollten unmotiverte Schüler vom Staat zu gemeinnützigen Tätigkeiten (Putzen, Fegen usw.) gezwungen werden?", 
    idx: 6,
    imgUrl: "/images/img5.webp"
  },
  { 
    topic: "Nachhaltigkeit", 
    question: "Sollten Unternehmen verpflichtet werden, nachhaltig zu produzieren?",
    idx: 7,
    imgUrl: "/images/img4.webp"
  },
  { 
    topic: "Nachhaltigkeit", 
    question: "Sollte Nachhaltigkeit unser höchstes Ziel sein?",
    idx: 8,
    imgUrl: "/images/img4.webp"
  },
  { 
    topic: "Sicherheit", 
    question: "Brauchen wir gesicherte Grenzen?",
    idx: 9,
    imgUrl: "/images/img1.webp"
  },
  { 
    topic: "Sicherheit", 
    question: "Brauchen wir eine starke Polizei?",
    idx: 10,
    imgUrl: "/images/img1.webp"
  },
  { 
    topic: "Sicherheit", 
    question: "Brauchen wir Anwesenheitskontrollen an unseren Grenzen?",
    idx: 11,
    imgUrl: "/images/img1.webp"
  },
];


