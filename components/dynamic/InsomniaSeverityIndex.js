import logo from "@/images/logo.png";
import Image from "next/image";
// import { AiOutlineArrowLeft } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux/es/exports";
import {
  moveToNextQuestion,
  moveTopreviousQuestion,
  submitAnswer,
  selectQuestion,
} from "@/reducers/QuizSlice";
import { useState, useEffect } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
// import logo from "@/images/logo.png";

export default function InsomniaSeverityIndex() {
  const { multipleChoiceResponses } = useSelector((state) => state.quiz);
  const [isi_1, setISI_1] = useState();
  const [isi_2, setISI_2] = useState();
  const [isi_3, setISI_3] = useState();
  const [isi_4, setISI_4] = useState();
  const [isi_5, setISI_5] = useState();
  const [isi_6, setISI_6] = useState();
  const [isi_7, setISI_7] = useState();

  console.log(multipleChoiceResponses, "mcqs in isi");
  // Add up the ISI score:
  // function result({ isi_1, isi_2, isi_3, isi_4, isi_5, isi_6, isi_7 }) {
  //   return (
  //     parseInt(isi_1) +
  //     parseInt(isi_2) +
  //     parseInt(isi_3) +
  //     parseInt(isi_4) +
  //     parseInt(isi_5) +
  //     parseInt(isi_6) +
  //     parseInt(isi_7)
  //   );
  // }
  // ISI score label:
  // function result({ isi_1, isi_2, isi_3, isi_4, isi_5, isi_6, isi_7 }) {
  //   const score =
  //     parseInt(isi_1) +
  //     parseInt(isi_2) +
  //     parseInt(isi_3) +
  //     parseInt(isi_4) +
  //     parseInt(isi_5) +
  //     parseInt(isi_6) +
  //     parseInt(isi_7);
  //   if (score <= 7) {
  //     return "No clinically significant insomnia";
  //   } else if (score <= 14) {
  //     return "Subthreshold insomnia";
  //   } else if (score <= 21) {
  //     return "Moderate clinical insomnia";
  //   } else {
  //     return "Severe clinical insomnia";
  //   }
  // }

  const dispatch = useDispatch();
  // const { questions, currentQuestion } = useSelector((state) => state.quiz);
  // const current = useSelector(selectQuestion);

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
  return (
    <>
      <div className="w-[400px] max-w-[100%] min-h-[100vh] max-h-[100%] grid justify-center p-5 px-7 bg-[#37533C]">
        <div className="w-full grid gap-4">
          <div className="flex ">
            <div className="w-[25%]">
              <button
                // type="button"
                onClick={() => handlePreviousPage()}
                className=" text-white text-[30px]"
              >
                <AiOutlineArrowLeft />
              </button>
            </div>
            <div className="  flex justify-center">
              <Image
                src={logo}
                width="150"
                height="120"
                className="w-[160px] h-[32px]"
              />
            </div>
          </div>
          <div className="grid justify-center text-center">
            <div className="text-[20px] text-[#ffffff]">
              Based on what you've told us, your insomnia severity index* is
            </div>
            <div className="text-[45px] font-bold py-7 text-center text-[#7B91DD]">
              7
            </div>
            <div className="text-[20px] text-[#ffffff]">
              This means that you have
            </div>
            <div className="text-[50px] font-bold text-center text-[#6FCF97]">
              No clinically significant insomnia
            </div>
            <div className="text-[14px] text-[#ffffff]">
              * Insomnia Severity Index (ISI) is the most widely recognized and
              validated screening tool used by clinicians to evaluate insomnia.
            </div>
          </div>
          <div className="w-full">
            <button
              onClick={() => handleNextPage()}
              className="bg-[#DE8F6E] w-full h-[70px] text-white text-[20px] text-center rounded-[10px] my-[20px]"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
