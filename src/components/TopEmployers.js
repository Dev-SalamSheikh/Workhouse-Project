const TopEmployers = () => {
  const Data = [
    { id: 1, text: "Google" },
    { id: 2, text: "IBM" },
    { id: 3, text: "Meta" },
    { id: 4, text: "Playmint" },
    { id: 5, text: "BlackRock incorperation" },
    { id: 6, text: "Interexy" },
    { id: 7, text: "Warehouse Jobs" },
  ];
  return (
    <div className="flex items-center justify-center flex-col mt-4">
      {/* Heading */}
      <h1 className="lg:text-3xl text-2xl font-semibold">Top Employers</h1>

      {/* Buttons Box One */}
      <div className="mt-6 mb-3 flex justify-center gap-4 flex-wrap w-full">
        {Data.slice(0, 3).map((btn) => (
          <button
            key={btn.id}
            className="border-black border px-10 py-1 rounded-md text-base lg:text-lg font-semibold lg:w-max w-full"
          >
            {btn.text}
          </button>
        ))}
      </div>

      {/* Buttons Div 2 */}
      <div className="flex justify-center gap-4 flex-wrap w-full">
        {Data.splice(3, Data.length - 1).map((btn) => (
          <button
            key={btn.id}
            className="border-black border px-10 py-1 rounded-md text-base lg:text-lg font-semibold lg:w-max w-full"
          >
            {btn.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TopEmployers;
