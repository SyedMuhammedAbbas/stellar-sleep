// import logo from "@/images/logo.png";
// import Image from "next/image";
// import { AiOutlineArrowLeft } from "react-icons/ai";

export default function InsomniaSeverityIndex() {
  return (
    <>
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
    </>
  );
}
