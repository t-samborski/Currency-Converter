import { Forms } from "./Form";
import { Container } from "./Container";
import { useState } from "react";
import { currencys } from "./currencys";


function App() {

  const [result, setResult] = useState();

  const calculateResult = (amount, currency) => {
  const rate = currencys.find((currencys) => currencys.short === currency).rate;

    setResult({
      targetAmount: +amount,
      results: amount / rate,
      currency,
    })
  }

  return (
    <Container>
      <Forms result={result} calculateResult={calculateResult} />
    </Container>
  );
}

export default App;
