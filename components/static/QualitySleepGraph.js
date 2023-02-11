import Image from "next/image";
import QualitySleepGraphImage from "@/images/quality_sleep_graph.png";
import logo from "@/images/logo.png";
import { AiOutlineArrowLeft } from "react-icons/ai";

export default function QualitySleepGraph() {
  return (
    <>
      <div className="grid justify-center ">
        <div className="text-[20px] text-[#ffffff]">
          Stellar Sleep creates lasting results through psychology, so you don’t
          “yo-yo” through short-term fixes.
        </div>
        <div>
          <Image
            src={QualitySleepGraphImage}
            width={300}
            height={300}
            className="w-[330px] "
          />
        </div>
      </div>
    </>
  );
}
