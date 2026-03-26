import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  const handleClick = () => {
    alert("Кнопку натиснуто!");
  };

  const handleInputChange = (event) => {
    console.log("Значення поля:", event.target.value);
  };

  return (
    <div>
      <h1>Тест компонентів</h1>

      <Input
        placeholder="Введіть текст"
        type="text"
        onChange={handleInputChange}
      />

      <br />

      <Input
        placeholder="Введіть пароль"
        type="password"
        onChange={handleInputChange}
      />

      <br />

      <Button text="Натисни мене" type="button" onClick={handleClick} />
    </div>
  );
}

export default App;
