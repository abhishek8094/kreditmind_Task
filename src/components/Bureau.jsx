const Bureau = () => {
  return (
    <div className="border rounded-lg p-4  w-[695px]  m-4">
      <h2>PAN Number</h2>
      <div className="flex justify-between border p-2 rounded-lg mt-2">
        <input type="text" placeholder="B A J P C 4 3 5 0 M" />
        <button className="text-[#00c062] ">Fetch</button>
      </div>
    </div>
  );
};

export default Bureau;
