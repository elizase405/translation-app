import { useState } from "react";

function DetectChatbox() {
  const [text, setText] = useState("Bonjour, comment allez-vous?");

  const handleText = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="flex flex-col bg-[#121826CC] p-5 border-2 border-[#D2D5DA22] rounded-3xl w-full h-85">
      <div className="flex justify-between items-center border-b border-[#D2D5DA22]">
        <div className="w-[55%] md:w-2/5 lg:w-1/3 xl:w-[55%] flex items-center justify-between py-3 pl-4 text-[#D2D5DA]">
          <p>English</p>
          <p className="bg-[#D2D5DA44] px-4 py-2 rounded-xl text-white">
            French
          </p>
          <div className="">
            <p className="inline-block">Spanish</p>
            <img
              src="../Expand_down.svg"
              alt="arrow down icon"
              className="inline-block text-[#F9FAFB]"
            />
          </div>
        </div>
        <img
          src="../Horizontal_top_left_main.svg"
          alt=""
          className="border-2 border-[#D2D5DA44] rounded-xl h-9 w-9 p-1.5 cursor-pointer"
        />
      </div>
      <div className="flex flex-col flex-1">
        <textarea
          defaultValue={text}
          onChange={handleText}
          className="outline-none my-6 w-full resize-none flex-1"
        />
      </div>
      <div className="flex justify-between items-center">
        <div className="flex">
          <img
            src="../sound_max_fill.svg"
            alt="read text icon"
            className="border-2 border-[#D2D5DA44] rounded-xl p-1.5 cursor-pointer"
          />
          <img
            src="../Copy.svg"
            alt="Copy text icon"
            className="border-2 border-[#D2D5DA44] rounded-xl p-1.5 cursor-pointer ml-2"
          />
        </div>
      </div>
    </div>
  );
}

export default DetectChatbox;
