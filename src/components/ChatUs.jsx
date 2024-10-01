import { MdOutlinePersonOutline } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
import { FiSend } from "react-icons/fi";
const ChatUs = () => {
  return (
    <div className="border-y-2 w-[27%] ">
      <h3 className="p-4 text-xl text-[#000000] font-bold">Chat with us</h3>
      <div className="flex justify-around items-center">
        <div className="w-16 bg-black h-1"></div>
        <span>Today</span>
        <div className="w-16 bg-black h-1"></div>
      </div>
      <div className="flex justify-evenly mt-4">
        <p className="bg-[#00c062] rounded-lg p-3 w-[230px] text-white text-xs">
          I do not file GST. Is there any other alternative to that?
        </p>
        <MdOutlinePersonOutline className="text-2xl bg-[#f2fbf9] w-10 h-10 rounded-full" />
      </div>
      <div className="flex justify-evenly mt-4">
        <FiMessageSquare className=" bg-[#f2fbf9] w-8 h-10 rounded-full" />
        <p className="bg-[#00c062] rounded-lg p-3 w-[230px] bg-[#edf3f1] text-xs">
          If you do not file GST because your annual turnover is less than 40
          lakhs, you can submit your ITR returns for the past 2 years. Let me
          know if there is anything else I can help you with.
        </p>
      </div>
      <div className="flex justify-evenly mt-4">
        <p className="bg-[#00c062] rounded-lg p-3 w-[230px] text-white text-xs">
          Do I need to upload bank statements for all my accounts?
        </p>
        <MdOutlinePersonOutline className="text-2xl bg-[#f2fbf9] w-10 h-10 rounded-full" />
      </div>

      <div className="flex justify-evenly mt-4">
        <FiMessageSquare className=" bg-[#f2fbf9] w-8 h-10 rounded-full" />
        <p className="bg-[#00c062] rounded-lg p-3 w-[230px] bg-[#edf3f1] text-xs">
          You need to upload 12 months of statement for your revenue account.
          Uploading more bank statements increases your chances of approval and
          might also increase the loan amount you re eligible for.
        </p>
      </div>

      <div className="border-2 mt-60  mx-4 flex justify-between p-6 items-center h-14 mb-2 rounded-lg">
        <h4 className="text-[#7d7d7d] text-sm">Write message</h4>
        <div className="bg-[#00c062] rounded-full w-9 h-9 flex items-center justify-center text-[white]">
          <FiSend />
        </div>
      </div>
    </div>
  );
};

export default ChatUs;
