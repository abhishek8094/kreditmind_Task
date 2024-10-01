import { GrFormUpload } from "react-icons/gr";
import { useState } from "react";

const Financial = () => {
  const [financialFile, setFinancialFile] = useState(null);

  const handleFinancialChange = (e) => {
    setFinancialFile(e.target.files[0]);
  };

  return (
    <div className="border rounded-lg p-6  w-[720px] mt-7">
      <div className="text-green-500 mb-4 w-10 p-2 h-10 rounded-full bg-[#f2f4f7]">
        <GrFormUpload className="text-2xl" />
      </div>
      <h3 className="text-sm font-bold">Upload financial Documents</h3>
      <p className="text-gray-500 mb-4 text-sm">
        Browse or drag and drop file here
      </p>

      <label className=" text-[#21c876] font-semibold text-sm">
        Browse file
        <input
          type="file"
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
