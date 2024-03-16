import { CurrencyResult } from "./styled"

export const Result = ({ result }) => {
    
   
    return((
        !!result && (
            <CurrencyResult>
                Za kwotę: <strong>{result.targetAmount} zł</strong>  otrzymasz <strong>{result.results.toFixed(2)} {result.currency}</strong>
            </CurrencyResult>
        )
    
    ))
}