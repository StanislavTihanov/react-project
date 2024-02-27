import { useState } from "react";
import logo from "/logo-name.svg";
export default function Header() {
  const [now, setNow] = useState(new Date())
  setInterval(() => setNow(new Date()), 1000)
  return (
    <header>
      <a href="index.html">
        <img src={logo} alt="logo"/>
      </a>
      {/* <h3>React</h3> */}
      <span>Время сейчас: {now.toLocaleTimeString()} </span>
    </header>
  );
}
