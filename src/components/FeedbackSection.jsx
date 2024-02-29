import { useState } from "react";
import Button from "./Button/Button";

function StateVsRef () {
  const [value, setValue] = useState ('')
  return(
    <div>
      <h3>Input value: {value}</h3>
      <input type="text"  className="control"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  )
}

export default function FeedbackSection() {
  const [form, setForm] = useState({
    name: '',
    hasError: false,
    reason: 'help'
  })

  function handleNameChange(event) {
    setForm((prev) => ({
      ...prev,
      name: event.target.value,
      hasError: event.target.value.trim().length === 0,
    }))
  }

  return (
    <section>
      <h3>Обратная связь</h3>

      <form className="form" style={{ marginBottom: '1rem'}}>
        <label htmlFor="name">Ваше имя</label>
        <input
          type="text"
          id="name"
          className="control"
          value={form.name}
          style={{
            border: form.hasError ? '1px solid red' : null,
            }}
          onChange={handleNameChange}
        />
        <label htmlFor="reason">Причина обращения</label>
        <select
          id="reason"
          className="control"
          value={form.reason}
          onChange={(event) => 
               setForm(prev => ({...prev, reason: event.target.value}))
          }
        >
          <option value="error">Ошибка</option>
          <option value="help">Предложение</option>
          <option value="suggest">Нужна помощь</option>
        </select>

        <Button disabled={form.hasError} isActive={!form.hasError}>Отправить</Button>
      </form>
      <StateVsRef/>
    </section>
  );
}
