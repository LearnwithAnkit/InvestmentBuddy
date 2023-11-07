import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
import { useState } from "react";
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  const isInputValid = userInput.duration >= 1;
  function handleChange(inputIndentifier, newValue) {
    setUserInput((prevUserInput) => {
      return { ...prevUserInput, [inputIndentifier]: +newValue };
    });
  }
  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      {/* Results go Here */}
      {!isInputValid && (
        <p className="center">Please enter duration greater than Zero</p>
      )}
      {isInputValid && <Results input={userInput} />}
    </>
  );
}

export default App;
