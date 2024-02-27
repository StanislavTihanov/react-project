import { useState } from "react";
import logo from "/logo-name.svg";
import { styled } from "styled-components";

const HeaderContainer = styled.header`
  height: 50px;
  display: flex;
  gap: 0.1rem;
  padding: 0 2rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  background: #fafafa;
  flex-wrap: wrap;
`;

export default function Header() {
  const [now, setNow] = useState(new Date());
  setInterval(() => setNow(new Date()), 1000);
  return (
    <HeaderContainer>
      <a href="index.html">
        <img src={logo} alt="logo" />
      </a>
      {/* <h3>React</h3> */}
      <span>Время сейчас: {now.toLocaleTimeString()} </span>
    </HeaderContainer>
  );
}
