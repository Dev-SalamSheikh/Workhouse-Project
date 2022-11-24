const PodcastCard = ({ Img, author, min, title }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm">
      {/* Image */}
      <div>
        <img src={Img} alt={title} className="w-full h-52 rounded-lg" />
      </div>

      {/* Content */}
      <div className="py-2 px-4">
        {/* Uppeer Part */}
        <div className="flex justify-between items-center flex-wrap gap-y-1">
          <div className="w-6/12">
            <span className="text-sm font-semibold">{author}</span>
          </div>
          <div className="w-6/12 text-end">
            <span className="text-sm font-semibold">Listener:200</span>
          </div>
          <div className="w-6/12">
            <span className="text-sm font-semibold">Minutes:{min}</span>
          </div>
        </div>

        {/* Lower Content */}
        <div className="mt-2 flex justify-between">
          {/* TItle */}
          <div>
            <h2 className="text-xl font-bold">{title}</h2>
          </div>

          {/* Button */}
          <div>
            <button className="text-base md:text-lg font-semibold bg-SearchBtnBg py-[2px] px-4 rounded-lg">
              Tips
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodcastCard;
