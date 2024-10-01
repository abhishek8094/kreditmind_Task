import documentStep from "../api/data";
import { FaCircleCheck } from "react-icons/fa6";
import { useState } from "react";
import { GoChevronLeft } from "react-icons/go";

const DocumentArea = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompeletedSteps] = useState([]);

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => (prev > 1 ? prev - 1 : prev));
    }
  };

  const handleNext = () => {
    if (currentStep < documentStep.length) {
      setCurrentStep((prev) => prev + 1);
      markStepAsCompleted();
    }
  };

  const markStepAsCompleted = () => {
    if (!completedSteps.includes(currentStep)) {
      setCompeletedSteps([...completedSteps, currentStep]);
    }
  };

  return (
    <>
      <div className="flex flex-wrap gap-4 mt-8">
        {documentStep.map((document, id) => (
          <div key={id} className="w-full md:w-auto">
            <div
              className={`border border-gray-300 text-nowrap p-2 text-xs text-[#7d7d7d] font-semibold rounded-full ${
                currentStep === document.id
                  ? "bg-[#ebfef5] text-[#27ca7a] border-[#27ca7a]"
                  : "bg-white"
              }`}
            >
              {completedSteps.includes(document.id) ? (
                <div className="flex gap-2 items-center">
                  <span className="text-black">{document.tag}</span>
                  <FaCircleCheck className="text-[#00c062] w-5 h-5" />
                </div>
              ) : (
                document.tag
              )}
            </div>

            {id < documentStep.length - 1 && (
              <hr className="border-gray-500 relative bottom-5 left-20 -z-10" />
            )}
          </div>
        ))}
      </div>
      <div className="border-solid border-[1.5px] relative top-10 rounded-lg">
        <div className="p-4">
          <h4 className="text-[18px] md:text-[22px] font-bold ">
            {documentStep[currentStep - 1].content.title}
          </h4>
          <p className="text-[#8b8b8b] text-sm">
            {documentStep[currentStep - 1].content.description}
          </p>
          <div className="mt-4">{documentStep[currentStep - 1].component}</div>
          <div className="flex justify-between items-center mt-6">
            <button
              onClick={handleBack}
              className={`border border-gray-200 p-2 md:p-3 w-[70px] md:w-[90px] flex justify-center items-center rounded-lg cursor-pointer transition-opacity ${
                currentStep === 1
                  ? "opacity-0 pointer-events-none"
                  : "opacity-100"
              }`}
            >
              <GoChevronLeft className="mr-1 md:mr-2" />
              Back
            </button>
            <button
              onClick={handleNext}
              className="bg-[#00c062] text-[white] p-2 md:p-3 w-[70px] md:w-[80px] rounded-lg cursor-pointer"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DocumentArea;
