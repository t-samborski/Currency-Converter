import { Header, Form, Label, Title, Area, Button, Footer } from "./styled"
import { currencys } from "../currencys";
import { Result } from "./Result";
import { useState } from "react";

export const Forms = ({clock, result, calculateResult}) => {
    
    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState(currencys[0].short);
         
    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(amount, currency);
    }    
    return (

    <Form onSubmit={onFormSubmit}>
        {clock}
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
                {currencys.map(currencys =>
                    <option
                        key={currencys.short}
                        value={currencys.short}
                    >{currencys.name}</option>)
                }
            </Area>
        </Label>
        <Button>Przelicz</Button>
        <Footer>Kursy pochodzą ze strony nbp.pl z Tabeli nr 115/A/NBP/2024 z dnia 2024-03-09</Footer>
        <Result result={result} />
    </Form>

)};

