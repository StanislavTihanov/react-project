import { useState } from "react";
import Button from "./Button/Button";

export default function FeedbackSection() {
  const [name, setName] = useState("");
  const [hasError, setHasError] = useState(false);
  const [reason, setReason] = useState("help");

  function handleNameChange(event) {
    setName(event.target.value);
    setHasError(event.target.value.trim().length === 0)
  }

  return (
    <section>
      <h3>Обратная связь</h3>

      <form className="form">
        <label htmlFor="name">Ваше имя</label>
        <input
          type="text"
          id="name"
          className="control"
          value={name}
          onChange={handleNameChange}
          style={{border: hasError ? '1px solid red' : null}}
        />
        <label htmlFor="reason">Причина обращения</label>
        <select
          id="reason"
          className="control"
          value={reason}
          onChange={(event) => setReason(event.target.value)}
        >
          <option value="error">Ошибка</option>
          <option value="help">Предложение</option>
          <option value="suggest">Нужна помощь</option>
        </select>

        <Button>Отправить</Button>
      </form>
    </section>
  );
}
