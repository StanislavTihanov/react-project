import Header from "./components/Header";
import { useState } from "react";
import { ways, differences } from "./data";
import WayToTeach from "./components/WayToTeach";
import Button from "./components/Button/Button";

export default function App() {
  const [contentType, setContentType] = useState(null);

  function handleClick (type) {
    setContentType(type)
  }

  return (
    <div>
      <Header />
      <main>
        <section>
          <h2>Hello React</h2>
          <ul>
            <WayToTeach {...ways[0]} />
            <WayToTeach {...ways[1]} />
            <WayToTeach {...ways[2]} />
            <WayToTeach {...ways[3]} />
          </ul>
        </section>
        <section>
          <h3>Чем мы отличаемся от других</h3>
          <Button 
             isActive={contentType === 'way'}
             onClick={() => handleClick('way')}>Подход
          </Button>
          <Button 
             isActive={contentType === 'easy'}
             onClick={() => handleClick('easy')}>Доступность
          </Button>
          <Button 
             isActive={contentType === 'program'}
             onClick={() => handleClick('program')}>Концентрация
          </Button>

          {!contentType && <p>Нажми на кнопку</p>}
          {contentType && <p>{differences[contentType]}</p>}
          
        </section>
      </main>
    </div>
  );
}
