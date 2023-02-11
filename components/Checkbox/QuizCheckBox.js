import React, { useState } from "react";
import ProgressBar from "../ProgressBar";
import { AiOutlineArrowLeft } from "react-icons/ai";

export default function QuizCheckBox({ questionsCheckbox }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showInfo, setShowInfo] = useState(false);
  const current = questionsCheckbox[currentQuestion];

  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     if (current.type === "question") {
  //       setAnswers([...answers, event.target.answer.value]);
  //       setCurrentQuestion(currentQuestion + 1);
  //     } else {
  //       setShowInfo(true);
  //     }
  //   };
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  const handleBack = () => {
    setCurrentQuestion(currentQuestion - 1);
    setSelectedOption(null);
  };

  const handleNextClick = () => {
    setCurrentQuestion(currentQuestion + 1);
    setSelectedOption(null);
  };

  // if (currentQuestion >= questionsCheckbox.length) {
  //   return <h1 className="text-xl font-bold">Quiz Completed</h1>;
  // }

  return (
    <div className="bg-transparent p-4 w-[350px]">
      <div className="flex gap-5 justify-center py-[20px]">
        {currentQuestion > 0 && (
          <button
            type="button"
            onClick={handleBack}
            className=" text-white text-[20px]"
          >
            <AiOutlineArrowLeft />
          </button>
        )}
        <div className="text-[15px] text-[#FFFFFF]">
          📋 Understanding your sleep profile
        </div>
      </div>
      {/* {!showInfo && ( */}
      <ProgressBar
        progress={(currentQuestion / questionsCheckbox.length) * 100}
      />
      {/* )} */}
      {current.type === "question" && (
        <div className="w-[350px]">
          <h1 className="text-[25px] text-[#ffffff] py-4">
            {current.question}
          </h1>
          <div className="grid gap-2">
            {current.options.map((option) => (
              <div key={option} className="mb-2">
                <button
                  onClick={() => handleOptionClick(option)}
                  value={option}
                  className={`w-full text-center ${
                    selectedOption === option ? "bg-[#769E7D]" : "bg-[#37533C]"
                  }   hover:scale-[1.02] transition-all h-[60px] rounded-[10px] text-[20px] text-[#ffffff]`}
                >
                  {option}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
      {currentQuestion.type === "info" && (
        <h1 className="font-bold text-[#ffffff] text-[20px]">{current.info}</h1>
      )}
      {
        <div className="w-[350px]">
          <button
            onClick={handleNextClick}
            className="bg-[#DE8F6E] w-full h-[70px] text-white text-[20px] text-center rounded-[10px] my-[20px]"
          >
            Next
          </button>
        </div>
      }
    </div>
  );
}
