const Gst = () => {
  return (
    <div className="border rounded-lg p-4  w-[695px]  m-4">
      <h2>GST Number</h2>
      <div className="flex justify-between border p-2 rounded-lg mt-2">
        <input type="text" placeholder="2 7 A A A A P 0 2 6 7 H 2 Z N" />
        <button className="text-[#00c062] ">connect</button>
      </div>
    </div>
  );
};

export default Gst;
