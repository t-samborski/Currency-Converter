import { Forms } from "./Form";
import { Container } from "./Container";
import { Loading } from "./Loading";
import { Mistake } from "./Mistake";
import { useRatesData } from "./useRatesData";

function App() {
  const ratesData = useRatesData();
  return (
    <Container>
      {ratesData.state === "loading" ?
        (<Loading />) :
        (ratesData.state === "error" ? (
          <Mistake />
        ) : (
          <Forms ratesData={ratesData}/>
        ))
      }
    </Container>
  );
}

export default App;
