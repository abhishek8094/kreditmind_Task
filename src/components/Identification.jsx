import { useState } from "react";
import { GrFormUpload } from "react-icons/gr";

const UploadDocument = () => {
  const [panCardFile, setPanCardFile] = useState(null);
  const [aadharCardFile, setAadharCardFile] = useState(null);

  const handlePanCardChange = (e) => {
    setPanCardFile(e.target.files[0]);
  };

  const handleAadharCardChange = (e) => {
    setAadharCardFile(e.target.files[0]);
  };

  return (
    <div className="flex mt-4 gap-5 ">
      <div className="border-solid border-[1.5px] rounded-lg p-6 w-[350px]">
        <div className="text-green-500 mb-4 w-10 p-2 h-10 rounded-full bg-[#f2f4f7]">
          <GrFormUpload className="text-2xl" />
        </div>
        <h3 className="text-sm font-bold">Upload PAN Card</h3>
        <p className="text-gray-500 mb-4 text-sm">
          Browse or drag and drop file here
        </p>

        <label className=" text-[#21c876] font-semibold text-sm">
          Browse file
          <input
            type="file"
            onChange={handlePanCardChange}
            className="hidden"
          />
        </label>

        {panCardFile && (
          <p className="text-sm text-green-500 mt-2">
            {panCardFile.name} uploaded
          </p>
        )}
      </div>

      <div className="border-solid border-[1.5px] rounded-lg p-4 w-[350px]">
        <div className="text-green-500 mb-4 w-10 p-2 h-10 rounded-full bg-[#f2f4f7]">
          <GrFormUpload className="text-2xl" />
        </div>
        <h3 className="text-sm font-bold">Upload Aadhar Card</h3>
        <p className="text-gray-500 mb-4 text-sm">
          Browse or drag and drop file here
        </p>

        {/* Custom browse file button */}
        <label className=" text-[#21c876] font-semibold text-sm">
          Browse file
          <input
            type="file"
            onChange={handleAadharCardChange}
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

export default UploadDocument;
