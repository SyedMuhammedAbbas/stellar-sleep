import React, { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux/es/exports";
import {
  moveToNextQuestion,
  moveTopreviousQuestion,
  submitAnswer,
  selectQuestion,
} from "@/reducers/QuizSlice";
import MultipleChoiceQuiz from "./quizTypes/MultipleChoiceQuiz";
import CheckBoxQuiz from "./quizTypes/CheckBoxQuiz";
import BehavioraltherapyInfo from "./static/BehavioraltherapyInfo";
import QualitySleepGraph from "./static/QualitySleepGraph";
import PsychologyBasedApproach from "./static/PsychologyBasedApproach";
import Template from "./common/Template";

export default function Quiz() {
  // const [currentQuestion, setCurrentQuestion] = useState(0);
  // const [answers, setAnswers] = useState([]);
  // const [selectedOption, setSelectedOption] = useState(null);
  // const [showInfo, setShowInfo] = useState(false);
  // const current = questions[currentQuestion];

  const dispatch = useDispatch();
  const { questions, currentQuestion, responses } = useSelector(
    (state) => state.quiz
  );
  const current = useSelector(selectQuestion);

  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     if (current.type === "question") {
  //       setAnswers([...answers, event.target.answer.value]);
  //       setCurrentQuestion(currentQuestion + 1);
  //     } else {
  //       setShowInfo(true);
  //     }
  //   };
  // const handleOptionClick = (option) => {
  //   setSelectedOption(option);
  // };
  // const handleBack = () => {
  //   setCurrentQuestion(currentQuestion - 1);
  //   setSelectedOption(null);
  // };

  // const handleNextClick = () => {
  //   setCurrentQuestion(currentQuestion + 1);
  //   setSelectedOption(null);
  // };

  // if (currentQuestion >= questions.length) {
  //   return <h1 className="text-xl font-bold">Quiz Completed</h1>;
  // }

  useEffect(() => {
    dispatch(moveTopreviousQuestion());
    dispatch(moveToNextQuestion());
  }, []);

  function handlePreviousPage() {
    dispatch(moveTopreviousQuestion());
  }

  function handleNextPage() {
    dispatch(moveToNextQuestion());
  }
  // console.log(current, "this is current question");
  // console.log(responses, "Answers array");
  return (
    <div className="bg-transparent p-4 w-[400px]">
      {current.inputType !== ("static" || "dynamic") && (
        <div className="flex gap-5 justify-center py-[20px]">
          {currentQuestion > 0 && (
            <button
              type="button"
              onClick={() => handlePreviousPage()}
              className=" text-white text-[20px]"
            >
              <AiOutlineArrowLeft />
            </button>
          )}
          <div className="text-[15px] text-[#FFFFFF]">
            📋 Understanding your sleep profile
          </div>
        </div>
      )}

      {(() => {
        switch (current.inputType) {
          case "multipleChoice":
            return (
              <MultipleChoiceQuiz
                question={current.question}
                choices={current.choices}
                id={current.id}
              />
            );
          case "CheckBox":
            return (
              <CheckBoxQuiz
                question={current.question}
                choices={current.choices}
              />
            );
          case "static":
            if (current.typeStatic === "behavioral therapy static page") {
              return <BehavioraltherapyInfo />;
            } else if (current.typeStatic === "Quality sleep") {
              return <Template one={""} />;
            } else if (current.typeStatic === "psychology-based approach") {
              return <Template one={""} />;
            }
          default:
            return null;
        }
      })()}
      {/* {current.inputType !== ("static" || "dynamic") && (
        <div className="w-[350px]">
          <button
            onClick={() => handleNextPage()}
            className="bg-[#DE8F6E] w-full h-[70px] text-white text-[20px] text-center rounded-[10px] my-[20px]"
          >
            Next
          </button>
        </div>
      )} */}
    </div>
  );
}
