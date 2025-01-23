"use client"
import useStoredNumbers from '../hooks/useStoredNumber';
import {useState} from 'react'

import Header from "@/components/Header";
import {useRouter} from 'next/navigation'


interface CheckboxProps {
  id: number; 
  labelText: string;
  isChecked: boolean;
  onChange: (id: number) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  labelText,
  isChecked,
  onChange,
}) => {
  return (
    <div className="flex items-center space-x-3 mt-3">
      <label htmlFor={`checkbox-${id}`} className="relative flex items-center cursor-pointer">
        <input
          id={`checkbox-${id}`}
          type="checkbox"
          className="hidden peer"
          checked={isChecked}
          onChange={() => onChange(id)}
        />
        <span className="w-6 h-6 inline-block rounded-full border-2 border-black peer-checked:border-black peer-checked:bg-black"></span>
      </label>
      <span className="text-black xl:text-xl font-inter">{labelText}</span>
    </div>
  );
};

interface MultipleChoiceFormProps {
  setAnswer: React.Dispatch<React.SetStateAction<number | null>>;
};

const MultipleChoiceForm: React.FC<MultipleChoiceFormProps> = ({setAnswer}) => {
  const [checkedId, setCheckedId] = useState<number | null>(null); 

  const handleCheckboxChange = (id: number) => {
    setCheckedId(checkedId === id ? null : id); 
    setAnswer(checkedId === id ? null : id); 
  };


  return (
    <div className="mt-10">
      <form>
        {["Stimme zu", "Stimme eher zu", "Neutral", "Stimmer eher nicht zu", "Stimme nicht zu"].map((label, index) => (
          <Checkbox
            key={index}
            id={index}
            labelText={label}
            isChecked={checkedId === index}
            onChange={handleCheckboxChange}
          />
        ))}
      </form>
    </div>
  );
};


interface QuizQuestionProps {
  topic: string;
  question: string;
  idx: number;
  imgUrl: string; 
}

const QuizQuestion : React.FC<QuizQuestionProps> = ({topic, question, idx, imgUrl}) => {
  const [answers, addAnswer] = useStoredNumbers([]); 
  const [answer, setAnswer] = useState<number | null>(null); 

  const router = useRouter();
  const processAnswer = () => {
    if(answer == 0) {
      addAnswer(2);
    }
    else if(answer == 1) {
      addAnswer(1);
    }
    else if(answer == 3) {
      addAnswer(-1);
    }
    else if(answer == 4) {
      addAnswer(-2);
    }
    if(idx != 5)
      router.push(`/quiz/${idx + 1}`);
    else 
      router.push(`/auswertung`);

  }
    console.log(answers);

return (
  <div>
    <Header/>
  <main className="flex flex-col md:min-h-screen justify-start md:justify-center items-start md:items-center">
  <div className="p-10">
  <img className="w-[512px] mb-10 shadow-lg rounded-xl" src={imgUrl}/>
  <div className="max-w-lg">
  <h1 className="font-bold font-poppins xl:text-[50px]">Frage {idx}</h1>
  <p className="font-inter text-xl mt-5"><strong>{topic}: </strong>{question}</p>
  <MultipleChoiceForm setAnswer={setAnswer}/>

  <div className="flex items-center justify-center font-bold font-poppins mt-[50px]">
  <button onClick={processAnswer} disabled={answer === null} className={`group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-lg px-6 font-medium text-neutral-200 duration-500 ${answer !== null ? "bg-neutral-950" : "bg-neutral-500"}`}><div className="translate-x-0 opacity-100 transition group-hover:-translate-x-[150%] group-hover:opacity-0">{idx == 5 ? "Zum Ergebnis" : "Nächste Frage"}</div><div className="absolute translate-x-[150%] opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></div></button>
  </div>
   </div>
    </div>
    </main>
  </div>
  )
}

export default QuizQuestion;
