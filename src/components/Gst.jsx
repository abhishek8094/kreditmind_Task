const Gst = () => {
  return (
    <div className="pt-4 w-full max-w-[720px] mx-auto mt-5">
      <h2 className="font-bold text-lg">GST Number</h2>
      <div className="flex flex-col md:flex-row justify-between border-solid border-[1.5px] p-2 rounded-lg mt-2">
        <input 
          type="text" 
          placeholder="2 7 A A A A P 0 2 6 7 H 2 Z N" 
          className="placeholder-[#3d5047] outline-none w-full md:w-80" 
        />
        <button className="text-[#00c062] mt-2 md:mt-0 md:ml-3 mr-3">
          connect
        </button>
      </div>
    </div>
  );
};

export default Gst;
