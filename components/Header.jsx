import { useState } from "react";

function Header() {
  const [count, setCount] = useState(0);

  return (
    <div className="relative flex justify-center items-center pb-15">
      <img
        src="../logo.svg"
        alt="chat.io logo"
        style={{ clipPath: "inset(0 92px 0 0)" }}
      />
      <p className="absolute pl-2">chat.io</p>
    </div>
  );
}

export default Header;
