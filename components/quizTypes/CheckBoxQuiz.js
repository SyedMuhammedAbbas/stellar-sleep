import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  moveToNextQuestion,
  moveTopreviousQuestion,
  submitMultipleChoiceAnswer,
  selectQuestion,
  selectAnswer,
} from "@/reducers/QuizSlice";

export default function CheckBoxQuiz({ question, choices, id }) {
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

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(submitMultipleChoiceAnswer());
  }, []);

  function handleOptionClick(option, id) {
    setSelectedChoice(option);
    setSelectedOption([id, option]);
    // dispatch(submitMultipleChoiceAnswer(selectedOption));
  }

  function handleSubmitResponse() {
    dispatch(submitMultipleChoiceAnswer(selectedOption));
    // setSelectedOption("");
    dispatch(moveToNextQuestion());
  }
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
            <label
              key={option}
              className={`w-full px-5 mb-2 flex items-center hover:scale-[1.02] bg-[#37533C] transition-all h-[60px] rounded-[10px] text-[20px] text-[#ffffff]`}
            >
              <input
                type="checkbox"
                value={option}
                className="mr-2 w-4 h-4"
                onChange={(event) => handleChange(event, question)}
              />
              {option}
            </label>
          ))}
        </div>
        <div className="w-[350px]">
          <button
            onClick={() => handleSubmitResponse()}
            className="bg-[#DE8F6E] w-full h-[70px] text-white text-[20px] text-center rounded-[10px] my-[20px]"
          >
            Next
          </button>
        </div>
      </div>
      {/* )} */}
    </>
  );
}
