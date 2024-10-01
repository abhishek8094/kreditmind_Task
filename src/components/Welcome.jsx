import { FaAngleRight } from "react-icons/fa";
import { GoChevronLeft } from "react-icons/go";
import DocumentArea from "./DocumentArea";
import { useState } from "react";
import ChatUs from "./ChatUs";

const Welcome = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div className="flex mt-20">
      <div className="border-solid border-2 w-[73%] ">
        <div className="px-20 mt-4">
          <h1 className="text-2xl font-bold text-[#14151a]">Welcome John</h1>
          <p className="text-[#9b9b9b] py-1 font-sm">
            Thank you for submitting your application. Please complete the
            following steps.
          </p>
          <div className="border-2 py-2 rounded-lg flex justify-around items-center h-16 mt-3">
            <h2 className="text-[#3d5047] font-semibold text-sm ">
              Your application has been submitted. Track and manage your
              submissions here.
            </h2>
            <span className="text-[#24c878] flex text-sm font-normal">
              Show Progress <FaAngleRight className="mt-1 " />
            </span>
          </div>
          <div>
            <DocumentArea
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
            />
          </div>

          <div className="flex justify-between items-center relative top-16">
            <button
              onClick={handleBack}
              className="border border-gray-200 p-3 w-[90px] flex justify-center items-center rounded-lg cursor-pointer "
              disabled={currentStep === 1}
            >
              <GoChevronLeft className="mr-2" />
              Back
            </button>
            <button
              onClick={handleNext}
              className="bg-[#00c062] text-[white] p-3 w-[80px] rounded-lg cursor-pointer"
              disabled={currentStep === 5}
            >
              Next
            </button>
          </div>
        </div>
      </div>
      <ChatUs/>
      
    </div>
  );
};

export default Welcome;
