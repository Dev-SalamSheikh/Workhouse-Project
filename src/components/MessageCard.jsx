const MessageCard = ({ img, name, text, status }) => {
  return (
    <div className="w-full bg-white pl-8 pt-3 cursor-pointer">
      {/* Content */}
      <div className="flex justify-between">
        {/* Image Box */}
        <div className="w-2/12">
          <div className="relative">
            <img
              src={img}
              alt="avatar"
              className="w-[50px] h-[50px] rounded-full brightness-75 object-cover"
            />
            <div className="absolute right-[22px] bottom-0">
              <i className="fa-solid fa-circle text-green-600 text-[12px]"></i>
            </div>
          </div>
        </div>
        {/* Bordered Content */}
        <div className="w-10/12 flex justify-between  border-b border-b-slate-400 pt-3 pb-3">
          {/* Header Name and text */}
          <div className="w-9/12">
            <p className="text-[17px] leading-3">{name}</p>
            <span className="text-sm text-gray-500">{text}</span>
          </div>

          {/* Status */}
          <div className="w-2/12 text-center">
            <span className="text-sm text-gray-500">{status}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageCard;
