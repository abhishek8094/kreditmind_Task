const Gst = () => {
  return (
    <div className=" pt-4 w-[720px] mt-5">
      <h2 className="font-bold text-lg">GST Number</h2>
      <div className="flex justify-between border-solid border-[1.5px] p-2 rounded-lg mt-2">
        <input type="text" placeholder="2 7 A A A A P 0 2 6 7 H 2 Z N" className="placeholder-[#3d5047] outline-none w-80" />
        <button className="text-[#00c062] mr-3 ">connect</button>
      </div>
    </div>
  );
};

export default Gst;
