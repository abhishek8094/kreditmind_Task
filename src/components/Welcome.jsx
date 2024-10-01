import { FaAngleRight } from "react-icons/fa";

import DocumentArea from "./DocumentArea";

import ChatUs from "./ChatUs";

const Welcome = () => {
  return (
    <div className="flex mt-20">
      <div className=" border-solid border-[1.5px] w-[73%] ">
        <div className="px-20 mt-4">
          <h1 className="text-[26px] font-bold text-[#000000] leading-10 letter-spacing-normal">
            Welcome John
          </h1>
          <p className="text-[#7d7d7d] font-sm">
            Thank you for submitting your application. Please complete the
            following steps.
          </p>
          <div className="border border-gray-200 py-3 rounded-lg flex justify-around items-center h-16 mt-3">
            <h2 className="text-[#3d5047] font-semibold text-sm ">
              Your application has been submitted. Track and manage your
              submissions here.
            </h2>
            <span className="text-[#24c878] flex text-sm font-semibold gap-1">
              Show Progress <FaAngleRight className="mt-1 " />
            </span>
          </div>

          <DocumentArea />
        </div>
      </div>
      <ChatUs />
    </div>
  );
};

export default Welcome;
