import logo from "@/images/logo.png";
import Image from "next/image";
import aasm from "@/images/aasm.png";
import acp from "@/images/acp.png";
import { AiOutlineArrowLeft } from "react-icons/ai";
import locationSVG from "@/images/locationSVG.svg";

export default function PsychologyBasedApproach() {
  return (
    <>
      <div>
        <Image
          src={locationSVG}
          width={50}
          height={50}
          className="w-[20px] flex justify-center items-center"
        />
      </div>
      <div className="text-[20px] text-[#ffffff]">
        Sleep is personal, and shouldn’t be a one-size-fits-all approach.
        <br />A psychology-based approach to improving your sleep is unique and
        isn’t for everyone.
        <br />
        Tell us about yourself in the next few questions so we can determine if
        Stellar Sleep is the right program for you at this time.
      </div>
    </>
  );
}
