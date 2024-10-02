import { GrFormUpload } from "react-icons/gr";
import { useRef, useState } from "react";

const Financial = () => {
  const [financialFile, setFinancialFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null); 

  const handleFinancialChange = (e) => {
    setFinancialFile(e.target.files[0]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setFinancialFile(e.dataTransfer.files[0]);
      e.dataTransfer.clearData();
    }
  };

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div
      className={`border-solid border-[1.5px] rounded-lg p-6 w-full sm:w-[540px] md:w-[640px] lg:w-[720px] mt-7 mx-auto ${
        isDragging ? "border-green-500 bg-green-50" : ""
      }`}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onDragLeave={handleDragLeave}
    >
      <div
        className="text-green-500 mb-4 w-10 p-2 h-10 rounded-full bg-[#f2f4f7] cursor-pointer"
        onClick={handleIconClick} 
      >
        <GrFormUpload className="text-2xl" />
      </div>
      <h3 className="text-sm font-bold">Upload financial Documents</h3>
      <p className="text-gray-500 mb-4 text-sm">
        {isDragging ? "Drop the file here" : "Browse or drag and drop file here"}
      </p>

      <label className="text-[#21c876] font-semibold text-sm cursor-pointer">
        Browse file
        <input
          type="file"
          ref={fileInputRef} 
          onChange={handleFinancialChange}
          className="hidden"
        />
      </label>

      {financialFile && (
        <p className="text-sm text-green-500 mt-2">
          {financialFile.name} uploaded
        </p>
      )}
    </div>
  );
};

export default Financial;
