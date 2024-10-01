const Bureau = () => {
  return (
    <div className=" pY-4 w-[720px] mt-5">
      <h2 className="text-lg font-bold">PAN Number</h2>
      <div className="flex justify-between border-solid border-[1.5px] p-2 rounded-lg mt-2">
        <input type="text" placeholder="B A J P C 4 3 5 0 M" className="placeholder-[#3d5047] outline-none w-80" />
        <button className="text-[#00c062] font-semibold ">Fetch</button>
      </div>
    </div>
  );
};

export default Bureau;
