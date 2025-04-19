import { useState, useEffect } from "react";

function DetectChatbox() {
  const [text, setText] = useState("Hello, how are you?");
  const len = text.length;
  const [textLen, setTextLen] = useState(len);
  const [copied, setCopied] = useState(false);
  const [shrink, setShrink] = useState(false);

  const handleText = (e) => {
    setText(e.target.value);
  };


  useEffect(() => {
    fetch("https://cors-anywhere.herokuapp.com/https://api.mymemory.translated.net"
, {
      method: "POST",
      body: JSON.stringify({
        q: text,
        source: "en|fr",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json())
    .then(data => console.log(data))
    .catch(err => console.log("Unable to translate: ", err))
  }, []);

  const handleRead = () => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.voice = speechSynthesis.getVoices()[4];
    synth.speak(utterance);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setShrink(true);
      setTimeout(() => setShrink(false), 10);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      console.error("Unable to copy text");
    }
  };

  useEffect(() => setTextLen(text.length), [text]);

  return (
    <div className="flex flex-col bg-[#212936CC] p-5 border-2 border-[#D2D5DA22] rounded-3xl w-full h-85">
      {copied && (
        <span className="absolute top-0 right-0 mt-1 mr-2 bg-transparent text-white text-sm px-4 py-4 rounded-lg shadow-[0_0px_1px_rgba(255,255,255,0.5))] transition-opacity duration-300">
          Copied text to clipboard!
          <div
            className={`absolute left-0 bottom-0 bg-[#bbb] ${
              shrink ? "w-[99%]" : "w-0"
            } transition-all ease-linear duration-3000 h-1 rounded-xl`}
          ></div>
        </span>
      )}
      <div className="border-b border-[#D2D5DA22]">
        <div className="w-5/6 md:w-[55%] lg:w-2/5 xl:w-4/5 flex items-center justify-between pb-3 pl-4 text-[#D2D5DA]">
          <p>Detect Language</p>
          <p className="bg-[#D2D5DA44] p-2 md:px-4 rounded-xl text-white">
            English
          </p>
          <p>French</p>
          <div className="">
            <p className="inline-block">Spanish</p>
            <img
              src="../Expand_down.svg"
              alt="arrow down icon"
              className="inline-block text-[#F9FAFB]"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-1">
        <textarea
          defaultValue={text}
          onChange={handleText}
          className="outline-none mt-6 w-full resize-none flex-1"
        />
        <label className="self-end text-[#D2D5DA] pb-3 text-sm font-normal">
          {textLen}/500
        </label>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex">
          <img
            src="../sound_max_fill.svg"
            alt="read text icon"
            onClick={handleRead}
            className="border-2 border-[#D2D5DA44] rounded-xl p-1.5 cursor-pointer"
          />
          <img
            src="../Copy.svg"
            alt="Copy text icon"
            onClick={handleCopy}
            className="border-2 border-[#D2D5DA44] rounded-xl p-1.5 cursor-pointer ml-2"
          />
        </div>
        <button className="bg-[#263FA9] border border-[#7CA9F3] rounded-xl px-6 py-2.5 cursor-pointer">
          <img src="../Sort_alfa.svg" alt="" className="inline-block" />{" "}
          Translate
        </button>
      </div>
    </div>
  );
}

export default DetectChatbox;
