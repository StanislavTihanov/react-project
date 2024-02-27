import { ways } from "../data";
import WayToTeach from "./WayToTeach";

export default function TeachingSection() {
  return (
    <section>
      <h2>Hello React</h2>
      <ul>
        {ways.map((ways) => (
          <WayToTeach key={ways.title} {...ways} />
        ))}
      </ul>
    </section>
  );
}
