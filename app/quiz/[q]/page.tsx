"use client"
import { useParams } from 'next/navigation';
import { questions } from '@/components/questions' 


import QuizQuestion from '../../../components/Question'


const Page = () => {
  const params = useParams();
  const id = Array.isArray(params?.q) ? params?.q[0] : params?.q; 

  const numericId = id ? (parseInt(id, 10)) - 1 : null;

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
