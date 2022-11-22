const MessagePopup = ({ messagePopup, setMessagePopup }) => {
  return (
    <div
      className={`z-[10000] md:w-[300px] md:h-[400px] fixed bottom-0 ${
        messagePopup ? "right-2 duration-500" : "right-[-100%] duration-500"
      } rounded-t-md overflow-hidden shadow-md`}
    >
      <div>
        {/* Message Header */}
        <div
          className="w-full text-center py-2 h-[50px] relative flex justify-center items-center"
          style={{ backgroundColor: "#2196F3" }}
        >
          <h1 className="text-xl text-white font-semibold">Salam Sheikh</h1>
          <i
            className="fa-regular fa-circle-xmark text-white absolute top-1 right-1 cursor-pointer"
            onClick={() => setMessagePopup(!messagePopup)}
          ></i>
        </div>

        {/* Message Body */}
        <div className="bg-white h-[290px]"></div>

        {/* Message Send Box */}
        <div
          className="h-[60px] px-2 py-1 flex justify-center"
          style={{ backgroundColor: "#F1F5F7" }}
        >
          <div className="content flex w-full justify-between items-center gap-2 lg:first-letter:gap-0">
            {/* Left */}
            <div className="left">
              {/* Input Box */}
              <div className="flex gap-2 items-center bg-white p-1 rounded-md">
                {/* Image Attch */}
                <div className="image_attach">
                  <label htmlFor="file">
                    <i className="fa-solid fa-paperclip text-lg cursor-pointer text-gray-400"></i>
                  </label>
                  <input type="file" id="file" style={{ display: "none" }} />
                </div>
                {/* Input Box */}
                <input
                  className="bg-transparent border-none outline-none"
                  type="text"
                  placeholder="Write message"
                />
              </div>
            </div>

            {/* RIght */}
            <div
              className="px-2 py-1 rounded-full cursor-pointer"
              style={{ backgroundColor: "#2196F3" }}
            >
              <i className="fa-solid fa-paper-plane text-white"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagePopup;
