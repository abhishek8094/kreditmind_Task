const Bureau = () => {
  return (
    <div className="pY-4 w-full max-w-[720px] mt-5 mx-auto">
      <h2 className="text-lg font-bold">PAN Number</h2>
      <div className="flex flex-col md:flex-row justify-between border-solid border-[1.5px] p-2 rounded-lg mt-2">
        <input
          type="text"
          placeholder="B A J P C 4 3 5 0 M"
          className="placeholder-[#3d5047] outline-none w-full md:w-80 mb-2 md:mb-0"
        />
        <button className="text-[#00c062] font-semibold md:ml-2">Fetch</button>
      </div>
    </div>
  );
};

export default Bureau;
