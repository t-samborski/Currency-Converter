import { Header, Form, Label, Title, Area, Button, Footer } from "./styled"

export const Forms = () => (
    <Form>
        <Header>
                Przelicznik walut
        </Header>
        <Label>
            <Title>Kwota w zł*:</Title>
            <Area />
        </Label>
        <Label>
            <Title>Waluta</Title>
            <Area />
        </Label>
        <Button>Przelicz</Button>
        <Footer>Kursy pochodzą ze strony nbp.pl z Tabeli nr 115/A/NBP/2024 z dnia 2024-03-09</Footer>
    </Form>

);

