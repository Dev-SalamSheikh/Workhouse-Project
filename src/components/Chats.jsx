import { NavLink } from "react-router-dom";
import img1 from "../images/freelancer1.jpg";
import img2 from "../images/freelancer2.jpg";
import img3 from "../images/freelancer3.jpg";
import img4 from "../images/freelancer4.jpg";
import img5 from "../images/freelancer5.jpg";
import img6 from "../images/freelancer6.jpg";
import MessageCard from "./MessageCard";
import TextMessage from "./TextMessage";

const Chats = () => {
  // Chat Data
  const chatData = [
    {
      id: 1,
      image: img1,
      name: "Timothy Valdez",
      text: "Hey, how is it going?",
      status: "now",
    },
    {
      id: 2,
      image: img2,
      name: "Patrick Rodriguez",
      text: "Cool!?",
      status: "16:20",
    },
    {
      id: 3,
      image: img3,
      name: "Linora Medina",
      text: "Okay, great. See you then",
      status: "12:01",
    },
    {
      id: 4,
      image: img4,
      name: "Marry Fisher",
      text: "Marry Send a attachment",
      status: "Thur",
    },
    {
      id: 5,
      image: img5,
      name: "Augusta Abbott",
      text: "Sorry, Can't make it today :(",
      status: "now",
    },
    {
      id: 6,
      image: img6,
      name: "Eril Oliver",
      text: "Thanks",
      status: "Wed",
    },
    {
      id: 7,
      image: img1,
      name: "Timothy Valdez",
      text: "Hey, how is it going?",
      status: "now",
    },
    {
      id: 8,
      image: img2,
      name: "Patrick Rodriguez",
      text: "Cool!?",
      status: "16:20",
    },
    {
      id: 9,
      image: img3,
      name: "Linora Medina",
      text: "Okay, great. See you then",
      status: "12:01",
    },
    {
      id: 10,
      image: img4,
      name: "Marry Fisher",
      text: "Marry Send a attachment",
      status: "Thur",
    },
    {
      id: 11,
      image: img5,
      name: "Augusta Abbott",
      text: "Sorry, Can't make it today :(",
      status: "now",
    },
    {
      id: 12,
      image: img6,
      name: "Eril Oliver",
      text: "Thanks",
      status: "Wed",
    },
    {
      id: 13,
      image: img6,
      name: "Eril Oliver",
      text: "Thanks",
      status: "Wed",
    },
    {
      id: 14,
      image: img1,
      name: "Timothy Valdez",
      text: "Hey, how is it going?",
      status: "now",
    },
    {
      id: 15,
      image: img2,
      name: "Patrick Rodriguez",
      text: "Cool!?",
      status: "16:20",
    },
    {
      id: 16,
      image: img3,
      name: "Linora Medina",
      text: "Okay, great. See you then",
      status: "12:01",
    },
    {
      id: 17,
      image: img4,
      name: "Marry Fisher",
      text: "Marry Send a attachment",
      status: "Thur",
    },
    {
      id: 18,
      image: img5,
      name: "Augusta Abbott",
      text: "Sorry, Can't make it today :(",
      status: "now",
    },
    {
      id: 19,
      image: img6,
      name: "Eril Oliver",
      text: "Thanks",
      status: "Wed",
    },
  ];

  return (
    <div className="bg-chatBg lg:h-[85vh] overflow-hidden">
      {/* Desktop Version */}
      <div className="hidden lg:block">
        <div className="flex justify-between">
          {/* Left Side => Single Chat */}
          <div className="w-3/12 border-r border-r-slate-400 h-[85vh]">
            {/* SearchBar */}
            <div className="h-[80px] flex justify-center items-center  px-8 border-b border-b-slate-400">
              {/* Search Input */}
              <div className="w-11/12 bg-white flex items-center gap-4 rounded-md py-2 px-4 border border-slate-400">
                <i className="fa-solid fa-magnifying-glass text-gray-500"></i>
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-transparent border-none outline-none w-full"
                />
              </div>
            </div>

            {/* Chat Card Container */}
            <div className="h-[91vh] overflow-y-scroll">
              {chatData.map((item) => (
                <MessageCard
                  key={item.id}
                  img={item.image}
                  name={item.name}
                  status={item.status}
                  text={item.text}
                />
              ))}
            </div>
          </div>

          {/* Right Side => Conversations */}
          <div className="w-9/12 overflow-hidden">
            <div className="flex flex-col justify-between h-full">
              {/* Header */}
              <div className="h-[80px] px-2 border-b border-b-slate-400">
                {/* Chat Holder Name */}
                <div className="flex justify-between items-end h-full">
                  {/* Left */}
                  <div className="">
                    <h1 className="text-2xl font-bold mb-2">Timothy Valdez</h1>
                    <h5 className="text-lg flex gap-1">
                      Web Development{" "}
                      <i className="fa-solid fa-pencil text-xs"></i>
                    </h5>
                  </div>
                  {/* Right */}
                  <div className="h-full flex items-end">
                    <h5 className="text-lg cursor-pointer">View Contract</h5>
                  </div>
                </div>
              </div>
              {/* Messages */}

              <div className="pb-4">
                {/* Middle Part => Chat text */}
                <div className="mb-6 px-4 w-[93%] flex flex-col justify-end items-end gap-4">
                  <TextMessage text="Hi, How are you?" />
                  <TextMessage text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, non repudiandae cum, cumque officiis consectetur similique earum animi voluptate, exercitationem ullam. Mollitia voluptate illo corrupti fugiat quos quam. Cum consectetur dicta saepe at voluptatem dolorem minima eveniet sit? Ipsum tempore totam harum dolorem sed alias quam sequi delectus! Vero voluptatum dolor dolore ea doloribus optio libero earum adipisci aliquam nulla beatae facilis, laboriosam possimus asperiores quibusdam dolorum et eaque fuga illum voluptatibus? Quas minima nulla suscipit vero id minus molestiae ullam aspernatur excepturi! Facilis explicabo nemo commodi obcaecati architecto voluptas voluptate sint necessitatibus dolores autem, at reprehenderit, rerum dicta. Nulla?" />
                </div>

                {/* Last Part => Send Message */}
                <div className="px-4 flex justify-between items-center w-full">
                  <div className="bg-white p-4 rounded-md w-[93%] flex items-center justify-between gap-6 shadow-sm">
                    {/* Attachment */}
                    <div>
                      <i className="fa-solid fa-paperclip text-xl cursor-pointer text-gray-400"></i>
                    </div>

                    {/* Input */}
                    <div className="w-full h-full">
                      <input
                        type="text"
                        id="input"
                        placeholder="Write message"
                        className="w-full border-none outline-none h-[25px]"
                      ></input>
                    </div>
                  </div>
                  {/* Arrow */}
                  <div className="w-[5%]">
                    <i className="fa-solid fa-paper-plane text-xl text-[#2196F3] bg-white shadow-md py-2 px-3 flex justify-center items-center w-max rounded-full cursor-pointer"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="block lg:hidden">
        {chatData.map((item) => (
          <NavLink
            key={item.id}
            to={`/message/${item.name.slice(0, item.name.length / 2)}`}
          >
            <MessageCard
              img={item.image}
              name={item.name}
              status={item.status}
              text={item.text}
            />
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Chats;
