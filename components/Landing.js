import Image from "next/image";
import logo from "@/images/logo.png";
import Link from "next/link";
import questions from "./QuizQuestions";

export default function Landing() {
  return (
    <>
      <div className="min-w-[400px] max-w-[100%] min-h-[100vh] max-h-[100%] grid justify-center p-5 bg-[url('../images/bg-image.png')] bg-no-repeat bg-cover">
        <div className="block gap-0">
          <div className="pb-10 flex justify-center">
            <Image
              src={logo}
              width="150"
              height="120"
              className="w-[160px] h-[32px]"
            />
          </div>
          <div className="py-[40px]">
            <Image
              src="https://g-storage.slumber.one/starting-quiz.gif"
              alt="Starting quiz"
              width={350}
              height={300}
              loading="lazy"
              className="w-[350px] "
            />
          </div>
          <div>
            <Link href="/quiz">
              <button className="w-[360px] h-[60px] flex justify-center items-center rounded-[50px] bg-[#e08c6c] text-[#ffffff] text-[20px]">
                Start
              </button>
            </Link>
          </div>
        </div>

        <div className="flex pt-14 justify-center gap-5 text-[15px] underline text-[#5EA387]">
          <Link target="_blank" href="https://stellarsleep.com/privacy">
            <div className="">Privacy policy</div>
          </Link>
          <Link target="_blank" href="https://stellarsleep.com/terms">
            <div>Terms of use</div>
          </Link>
        </div>
      </div>
    </>
  );
}
