import { useState, useRef } from "react";
import { GrFormUpload } from "react-icons/gr";

const Identification = () => {
  const [panCardFile, setPanCardFile] = useState(null);
  const [aadharCardFile, setAadharCardFile] = useState(null);
  const [isPanCardDragOver, setIsPanCardDragOver] = useState(false);
  const [isAadharCardDragOver, setIsAadharCardDragOver] = useState(false);

  const panCardInputRef = useRef(null);
  const aadharCardInputRef = useRef(null); 

  const handlePanCardChange = (e) => {
    setPanCardFile(e.target.files[0]);
  };

  const handleAadharCardChange = (e) => {
    setAadharCardFile(e.target.files[0]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handlePanCardDrop = (e) => {
    e.preventDefault();
    setPanCardFile(e.dataTransfer.files[0]);
    setIsPanCardDragOver(false);
  };

  const handleAadharCardDrop = (e) => {
    e.preventDefault();
    setAadharCardFile(e.dataTransfer.files[0]);
    setIsAadharCardDragOver(false);
  };


  const handlePanCardIconClick = () => {
    panCardInputRef.current.click();
  };

  const handleAadharCardIconClick = () => {
    aadharCardInputRef.current.click();
  };

  return (
    <div className="flex flex-col md:flex-row mt-4 gap-5">
      <div
        className={`border-solid border-[1.5px] rounded-lg p-6 w-full max-w-[350px] ${
          isPanCardDragOver ? "border-green-500 bg-green-50" : ""
        }`}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handlePanCardDrop}
        onDragEnter={() => setIsPanCardDragOver(true)}
        onDragLeave={() => setIsPanCardDragOver(false)}
      >
        <div
          className="text-green-500 mb-4 w-10 p-2 h-10 rounded-full bg-[#f2f4f7] cursor-pointer"
          onClick={handlePanCardIconClick}
        >
          <GrFormUpload className="text-2xl" />
        </div>
        <h3 className="text-sm font-bold">Upload PAN Card</h3>
        <p className="text-gray-500 mb-4 text-sm">
          Browse or drag and drop file here
        </p>

        <label className="text-[#21c876] font-semibold text-sm">
          Browse file
          <input
            type="file"
            onChange={handlePanCardChange}
            ref={panCardInputRef}
            className="hidden"
          />
        </label>

        {panCardFile && (
          <p className="text-sm text-green-500 mt-2">
            {panCardFile.name} uploaded
          </p>
        )}
      </div>

      <div
        className={`border-solid border-[1.5px] rounded-lg p-6 w-full max-w-[350px] ${
          isAadharCardDragOver ? "border-green-500 bg-green-50" : ""
        }`}
        onDragOver={handleDragOver}
        onDrop={handleAadharCardDrop}
        onDragEnter={() => setIsAadharCardDragOver(true)}
        onDragLeave={() => setIsAadharCardDragOver(false)}
      >
        <div
          className="text-green-500 mb-4 w-10 p-2 h-10 rounded-full bg-[#f2f4f7] cursor-pointer"
          onClick={handleAadharCardIconClick}
        >
          <GrFormUpload className="text-2xl" />
        </div>
        <h3 className="text-sm font-bold">Upload Aadhar Card</h3>
        <p className="text-gray-500 mb-4 text-sm">
          Browse or drag and drop file here
        </p>

        <label className="text-[#21c876] font-semibold text-sm">
          Browse file
          <input
            type="file"
            onChange={handleAadharCardChange}
            ref={aadharCardInputRef}
            className="hidden"
          />
        </label>

        {aadharCardFile && (
          <p className="text-sm text-green-500 mt-2">
            {aadharCardFile.name} uploaded
          </p>
        )}
      </div>
    </div>
  );
};

export default Identification;
