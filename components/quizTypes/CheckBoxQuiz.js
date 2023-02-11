import React, { useState } from "react";

export default function CheckBoxQuiz({ question, choices }) {
  const [answers, setAnswers] = useState({});

  const handleChange = (event, question) => {
    const value = event.target.value;
    setAnswers((prevAnswers) => {
      return {
        ...prevAnswers,
        [question]: prevAnswers[question]
          ? prevAnswers[question].includes(value)
            ? prevAnswers[question].filter((answer) => answer !== value)
            : [...prevAnswers[question], value]
          : [value],
      };
    });
  };

  return (
    <>
      {/* {current.type === "question" && ( */}
      <div className="w-[350px]">
        <h1 className="text-[25px] text-[#ffffff] py-4">{question}</h1>
        <div className="grid gap-2">
          {choices.map((option) => (
            // <div key={option} className="mb-2">
            //   <button
            //     // onClick={() => handleOptionClick(option)}
            //     // value={option}
            //     className={`w-full text-center hover:scale-[1.02] transition-all h-[60px] rounded-[10px] text-[20px] text-[#ffffff]`}
            //     // ${selectedOption.map((index) =>
            //     //   index === option ? "bg-[#769E7D]" : "bg-[#37533C]"
            //     // )}
            //   >
            //     {option}
            //   </button>
            // </div>
            <label key={option}>
              <input
                type="checkbox"
                value={option}
                onChange={(event) => handleChange(event, question)}
              />
              {option}
            </label>
          ))}
        </div>
      </div>
      {/* )} */}
    </>
  );
}
