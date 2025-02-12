
interface QuizQuestionProps {
  topic: string;
  question: string;
  idx: number;
  imgUrl: string; 
}

export const questions: QuizQuestionProps[] = [
  { 
    topic: "Grenzen", 
    question: "Die Grenzen des Staates sollen ausgebaut und stärker bewacht werden." , 
    idx: 1,
    imgUrl: "/images/img1.webp"
  },
  { 
    topic: "Wirtschaft", 
    question: "Am Ende des Projektes soll jeder sein erwirtschaftetes Geld ausgezahlt bekommen." , 
    idx: 2,
    imgUrl: "/images/img2.webp"
  },
  { 
    topic: "Kultur", 
    question: "Betriebe, welche die Kultur fördern und Veranstaltungen planen sollten vom Staat unterstützt werden." , 
    idx: 3,
    imgUrl: "/images/img3.webp"
  },
  { 
    topic: "Nachhaltigkeit", 
    question: "Nachhaltige Projekte werden vom Staat gefördert", 
    idx: 4,
    imgUrl: "/images/img4.webp"
  },
  { 
    topic: "Steuer", 
    question: "Es soll eine progressive Steuer geben.", 
    idx: 5,
    imgUrl: "/images/img5.webp"
  },
];


