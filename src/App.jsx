import Header from "./components/Header";
import { ways } from "./data";
import WayToTeach from "./components/WayToTeach";
import Button from "./components/Button/Button";

export default function App() {
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
          <Button>Подход</Button>
          <Button>Доступность</Button>
          <Button>Концентрация</Button>
        </section>
      </main>
    </div>
  );
}
