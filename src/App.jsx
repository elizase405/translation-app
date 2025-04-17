import { useState } from "react";
import Header from "../components/Header";
import DetectChatbox from "../components/DetectChatbox";
import TranslateChatbox from "../components/TranslateChatbox";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-[#F9FAFB] font-semibold py-20"
      style={{ backgroundImage: "url(../hero_img.jpg)" }}
    >
      <Header />
      <div className="w-[95%] flex flex-col xl:flex-row space-y-2 md:space-x-2">
        <DetectChatbox />
        <TranslateChatbox />
      </div>
    </div>
  );
}

export default App;
