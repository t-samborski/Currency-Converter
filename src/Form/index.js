import { Header, Form, Label, Title, Area, Button, Footer } from "./styled"
import { Result } from "./Result";
import { useState } from "react";
import { Clock} from "../Clock"

export const Forms = ({ratesData}) => {

    const [result, setResult] = useState();
    // const ratesData = useRatesData();
    
    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState("EUR");

    const calculateResult = (amount, currency) => {
    const rate = ratesData.rates[currency].value;
       
      
      setResult({
        targetAmount: +amount,
        results: amount * rate,
        currency,
        });
    }
    
    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(amount, currency);
    }    
    return (
        
    <Form onSubmit={onFormSubmit}>
        <Clock/>
        <Header>
            Przelicznik walut
        </Header>
        <Label>
            <Title>Kwota w zł*:</Title>
            <Area
                type="number"
                placeholder="Wpisz kwotę w zł"
                value={amount}
                onChange={({ target }) => setAmount(target.value)}
            />
        </Label>
        <Label>
            <Title>Waluta</Title>
            <Area
                as="select"
                value={currency}
                onChange={({ target }) => setCurrency(target.value)}
            >
                {!!ratesData.rates && Object.keys(ratesData.rates).map(currency =>
                    <option
                        key={currency}
                        value={currency}
                    >{currency}</option>)
                }
            </Area>
        </Label>
        <Button>Przelicz</Button>
        <Footer>Kursy pochodzą ze strony nbp.pl z Tabeli nr 115/A/NBP/2024 z dnia <strong>{ratesData.date}</strong></Footer>
        <Result result={result} />
    </Form>

)};

