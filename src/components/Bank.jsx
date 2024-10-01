import { GrFormUpload } from "react-icons/gr";
import { useState } from "react";

const Bank = () => {
  const [bankFile, setBankFile] = useState(null);

  const handleBankChange = (e) => {
    setBankFile(e.target.files[0]);
  };

  return (
    <div className="border-solid border-[1.5px] rounded-lg p-6 w-full sm:w-[540px] md:w-[640px] lg:w-[720px] mt-7 mx-auto">
      <div className="text-green-500 mb-4 w-10 p-2 h-10 rounded-full bg-[#f2f4f7]">
        <GrFormUpload className="text-2xl" />
      </div>
      <h3 className="text-sm font-bold">Upload bank statements</h3>
      <p className="text-gray-500 mb-4 text-sm">
        Browse or drag and drop file here
      </p>

      <label className="text-[#21c876] font-semibold text-sm cursor-pointer">
        Browse file
        <input
          type="file"
          onChange={handleBankChange}
          className="hidden"
        />
      </label>

      {bankFile && (
        <p className="text-sm text-green-500 mt-2">
          {bankFile.name} uploaded
        </p>
      )}
    </div>
  );
};

export default Bank;
