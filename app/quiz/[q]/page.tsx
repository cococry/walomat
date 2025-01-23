"use client"
import { useParams } from 'next/navigation';


import QuizQuestion from '../../../components/Question'

interface QuizQuestionProps {
  topic: string;
  question: string;
  idx: number;
  imgUrl: string; 
}

const questions: QuizQuestionProps[] = [
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


const Page = () => {
  const params = useParams();
  const id = Array.isArray(params?.q) ? params?.q[0] : params?.q; 

  const numericId = id ? (parseInt(id, 10)) - 1 : null;

  console.log(id);
    if (numericId === null || isNaN(numericId) || numericId > questions.length) {
    return <div className="flex flex-col gap-5 text-center p-10 min-h-screen justify-center items-center ">
    <h1 className="text-4xl font-poppins font-bold">Ungültige Frage</h1>
    <p className="font-inter">Der angegebene Index steht nicht in Verbindung mit einer Frage.</p>
    </div>;
  }
  return (
    <div>
    <QuizQuestion topic={questions[numericId].topic} question={questions[numericId].question} idx={questions[numericId].idx} imgUrl={questions[numericId].imgUrl}/>
    </div>
  )
}

export default Page;
