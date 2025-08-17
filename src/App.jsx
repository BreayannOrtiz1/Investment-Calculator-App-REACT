import Result from "./components/Result";
import UserInput from "./components/UserInput";
import { useState } from "react";
import { calculateInvestmentResults } from "./util/investment";

function App() {
  const [inputData, setInputData] = useState({
    initialInvestment: 10000,
    annualInvestment: 300,
    expectedReturn: 5.5,
    duration: 12,
  });

  function handleOnChangeData(obj) {
    console.log("object received from user input", obj);
    setInputData((prevData) => {
      console.log("prevData BEFORE:", JSON.stringify(prevData, null, 2));
      const updatedData = { ...prevData, [obj.field]: obj.value };
      console.log("updatedData AFTER:", JSON.stringify(updatedData, null, 2));
      return updatedData;
    });
  }

  const results = calculateInvestmentResults(inputData);
  console.log(results);

  return (
    <main>
      <ol id='user-input'>
        <UserInput
          text='initial investment'
          field='initialInvestment'
          onChangeData={handleOnChangeData}
        />
        <UserInput
          text='annual investment'
          field='annualInvestment'
          onChangeData={handleOnChangeData}
        />

        <UserInput
          text='expected return'
          field='expectedReturn'
          onChangeData={handleOnChangeData}
        />
        <UserInput
          text='duration'
          field='duration'
          onChangeData={handleOnChangeData}
        />
      </ol>

      <Result calculated={results} />
    </main>
  );
}

export default App;
