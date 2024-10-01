import { FaAngleRight } from "react-icons/fa";
import DocumentArea from "./DocumentArea";
import ChatUs from "./ChatUs";

const Welcome = () => {
  return (
    <div className="flex flex-col lg:flex-row mt-10 lg:mt-20">
      <div className="border-solid border-[1.5px] w-full lg:w-[73%]">
        <div className="px-6 lg:px-20 mt-4">
          <h1 className="text-[22px] lg:text-[26px] font-bold text-[#000000] leading-8 lg:leading-10 letter-spacing-normal">
            Welcome John
          </h1>
          <p className="text-[#7d7d7d] text-sm lg:text-base">
            Thank you for submitting your application. Please complete the
            following steps.
          </p>
          <div className="border border-gray-200 py-3 rounded-lg flex flex-col lg:flex-row justify-around items-center h-auto lg:h-16 mt-3">
            <h2 className="text-[#3d5047] font-semibold text-sm text-center lg:text-left mb-2 lg:mb-0">
              Your application has been submitted. Track and manage your
              submissions here.
            </h2>
            <span className="text-[#24c878] flex text-sm font-semibold gap-1">
              Show Progress <FaAngleRight className="mt-1" />
            </span>
          </div>

          <DocumentArea />
        </div>
      </div>
      <ChatUs className="mt-6 lg:mt-0 w-full lg:w-auto" />
    </div>
  );
};

export default Welcome;
