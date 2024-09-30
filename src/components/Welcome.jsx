import { FaAngleRight } from "react-icons/fa";
import { MdOutlinePersonOutline } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
import { FiSend } from "react-icons/fi";

const Welcome = () => {
  return (
    <div className="flex mt-20">
      <div className="border-solid border-2 w-[70%] ">
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
          <div></div>
        </div>
      </div>
      <div className="border-y-2 w-[30%] ">
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
            Uploading more bank statements increases your chances of approval
            and might also increase the loan amount you re eligible for.
          </p>
        </div>

        <div className="border-2 mt-36  mx-4 flex justify-between p-6 items-center h-14 mb-2 rounded-lg">
          <h4 className="text-[#7d7d7d] text-sm">Write message</h4>
          <div className="bg-[#00c062] rounded-full w-9 h-9 flex items-center justify-center text-[white]">
            <FiSend />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
