"use client"
import Header from "@/components/Header";
import { questions } from '@/components/questions'
import useStoredNumbers from "../../hooks/useStoredNumber";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { useState } from "react";


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

export default function QuestionAccordion() {
  const [checkedId, setCheckedId] = useState<number | null>(null);

  const [userAnswers, setUserAnswers] = useStoredNumbers([]);
  console.log(userAnswers);
  const handleCheckboxChange = (id: number, q: number) => {
    setCheckedId(id);
    let val = 0;
    if(id == 0) {
      val = 1;
    } else if(id == 1) {
      val = 0;
    } else if(id == 2) {
      val = -1;
    }
    setUserAnswers(prevAnswers => {
      const updatedAnswers = [...prevAnswers]; 
      updatedAnswers[q] = val;  
      return updatedAnswers;  
    });
  };

  const handleDoubleWeight = (q: number) => {
    setUserAnswers(prevAnswers => {
      const updatedAnswers = [...prevAnswers]; 
      if(updatedAnswers[q] == -1 || updatedAnswers[q] == 1)
        updatedAnswers[q] *= 2;
      else if(updatedAnswers[q] == -2 || updatedAnswers[q] == 2)
        updatedAnswers[q] /= 2;
      return updatedAnswers;  
    });
  }


  const handleAccordionChange = (value: string) => {
    if (value) {
      const idx = parseInt(value.replace("item-", ""), 10);
      let check = 0;
      if(userAnswers[idx] == 0) {
        check = 1;
      } else if(userAnswers[idx] == -1) {
        check = 2;
      }
      setCheckedId(check);
    }
  };

  if(userAnswers.length < questions.length) {
    return (
      <div>
      <Header />
      <div className="min-h-screen flex justify-center items-center flex-col">
      <h1>Du bist noch nicht fertig!</h1>
      <p className="text-gray-500">Beantworte erst alle Fragen bevor du hier hin gehst.</p>

      </div>
      </div>
    )
  }

  return (
    <div>
    <Header />
    <div className="min-h-screen flex md:items-center md:justify-center">
    <div
    className="bg-white p-6 max-w-2xl w-full"
    >
    <h1 className="text-4xl font-semibold font-poppins mb-4 text-center md:text-left">Deine Antworten</h1>
    {userAnswers.length >= questions.length && (
      <div>
    
      <div className="mt-6 font-inter">
      
    <Accordion type="single" collapsible onValueChange={handleAccordionChange}>
      {questions.map((q, index) => (
    
  <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger>{q.question}</AccordionTrigger>
          <AccordionContent>
            <div className="mt-4">
              <form>
                {["Stimme zu", "Neutral", "Stimme nicht zu"].map((label, id) => (
                  <Checkbox
                    key={id}
                    id={id}
                    labelText={label}
                    isChecked={checkedId === id}
                    onChange={() => handleCheckboxChange(id, index)}
                  />
                ))}
              </form>
              <button onClick={() => handleDoubleWeight(index)} 
              className=
                {`${userAnswers[index] == -2 || userAnswers[index] == 2 ? "bg-black text-white" : "bg-transparent text-black"} font-inter px-4 py-[10px] mt-5 border-black border-[2px] font-bold transition-colors duration-300 ease-in-out`}>Doppelt gewichten</button>
            </div>
          </AccordionContent>
        </AccordionItem>

      ))}
      </Accordion>
      </div>
      </div>
    )}
    <div className="flex justify-center mt-[50px]">
    <a href="/auswertung">
  <button className="font-bold font-poppins bg-black rounded-xl text-white px-5 py-3 hover:bg-neutral-800">Zur Auswertung</button>
  </a>
  </div>

    </div>
    </div>
    </div>

  );
}
