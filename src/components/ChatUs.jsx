import { MdOutlinePersonOutline } from "react-icons/md";
import { LuMessageSquare } from "react-icons/lu";
import { FiSend } from "react-icons/fi";

const ChatUs = () => {
  return (
    <div className="border-y-[1.5px] w-full lg:w-[27%] md:w-[40%] sm:w-[80%] mx-auto">
      <h3 className="p-4 text-xl text-[#000000] font-bold">Chat with us</h3>

      <div className="flex justify-around items-center">
        <div className="w-16 sm:w-20 bg-[#f2f4f7] h-[1px]"></div>
        <span className="text-xs text-[#7d7d7d]">Today</span>
        <div className="w-16 sm:w-20 bg-[#f2f4f7] h-[1px]"></div>
      </div>

      <div className="flex relative left-4 sm:left-8 lg:left-16 mt-4">
        <p className="bg-[#00c062] rounded-lg p-3 w-[140px] sm:w-[207px] lg:w-[250px] text-[#a9f1ce] text-xs">
          I do not file GST. Is there any other alternative to that?
        </p>
        <MdOutlinePersonOutline className="text-sm bg-[#f2fbf7] text-[#a7aaa9] ml-2 p-2 w-8 h-8 sm:w-10 sm:h-10 rounded-full" />
      </div>

      <div className="flex mr-3 justify-evenly mt-4">
        <div className="bg-[#edf3f1] p-2 w-7 h-7 sm:w-8 sm:h-8 rounded-full">
          <LuMessageSquare className="text-[#2ac97b] w-5 h-5 sm:w-6 sm:h-6 relative right-1 bottom-1" />
        </div>
        <div className="bg-[#edf3f1] font-medium rounded-lg p-3 w-[160px] sm:w-[230px] lg:w-[250px] text-xs">
          If you do not file GST because your annual turnover is less than 40
          lakhs, you can submit your ITR returns for the past 2 years. Let me
          know if there is anything else I can help you with.
        </div>
      </div>

      <div className="flex relative left-4 sm:left-8 lg:left-16 mt-4">
        <p className="bg-[#00c062] rounded-lg p-3 w-[140px] sm:w-[207px] lg:w-[250px] text-[#a9f1ce] text-xs">
          Do I need to upload bank statements for all my accounts?
        </p>
        <MdOutlinePersonOutline className="text-sm bg-[#f2fbf7] text-[#a7aaa9] ml-2 p-2 w-8 h-8 sm:w-10 sm:h-10 rounded-full" />
      </div>

      <div className="flex justify-evenly mt-4">
        <div className="bg-[#edf3f1] p-2 w-7 h-7 sm:w-8 sm:h-8 rounded-full">
          <LuMessageSquare className="text-[#2ac97b] w-5 h-5 sm:w-6 sm:h-6 relative right-1 bottom-1" />
        </div>
        <p className="bg-[#edf3f1] font-medium rounded-lg p-3 w-[160px] sm:w-[230px] lg:w-[250px] text-xs">
          You need to upload 12 months of statement for your revenue account.
          Uploading more bank statements increases your chances of approval and
          might also increase the loan amount you're eligible for.
        </p>
      </div>

      <div className="border-2 mt-10 sm:mt-20 lg:mt-60 mx-4 flex justify-between p-4 sm:p-6 items-center h-14 mb-2 rounded-lg">
        <h4 className="text-[#7d7d7d] text-xs sm:text-sm">Write message</h4>
        <div className="bg-[#00c062] rounded-full w-7 h-7 sm:w-9 sm:h-9 flex items-center justify-center text-white">
          <FiSend />
        </div>
      </div>
    </div>
  );
};

export default ChatUs;
