import Chats from "../components/Chats";
import Navbar from "../components/Navbar";

const Messages = () => {
  return (
    <div>
      <div className="h-[11vh]">
        <Navbar />
      </div>
      <div className="h-[89vh]">
        <Chats />
      </div>
    </div>
  );
};

export default Messages;
