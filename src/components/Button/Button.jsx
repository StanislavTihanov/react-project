import "./Button.css";

export default function Button({children}) {
  function handleClick () {
      console.log('fffffffffffffff')
  }
  return <button className="button" onClick={handleClick} >
  {children}
  </button>;
}
