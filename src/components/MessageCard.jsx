const MessageCard = ({ img, name, text, status }) => {
  return (
    <div className="w-full bg-Banner md:bg-white lg:pl-4 px-1 pt-3 cursor-pointer border-b border-b-slate-300 md:border-b-0">
      {/* Content */}
      <div className="flex justify-between lg:gap-2 gap-4 items-start">
        {/* Image Box */}
        <div className="w-2/12 pt-3 lg:pt-0">
          <div className="relative flex justify-center">
            <img
              src={img}
              alt="avatar"
              className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] rounded-full brightness-75 object-cover"
            />
            <div className="absolute xl:right-[10%] right-2 lg:-bottom-[7px] bottom-[-4px]">
              <i className="fa-solid fa-circle text-green-600 text-[6px] lg:text-[12px]"></i>
            </div>
          </div>
        </div>
        {/* Bordered Content */}
        <div className="w-10/12 flex justify-between  md:border-b md:border-b-slate-400 pt-3 pb-3">
          {/* Header Name and text */}
          <div className="w-9/12">
            <p className="text-sm lg:text-[17px] leading-3">{name}</p>
            <span className="text-xs lg:text-sm text-gray-500">{text}</span>
          </div>

          {/* Status */}
          <div className="w-2/12 text-center">
            <span className="text-xs lg:text-sm text-gray-500">{status}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageCard;
