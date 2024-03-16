import { TimePlace } from "./styled"
import { useCurrentClock } from "./useClock"

export const Clock = () => {

    const date = useCurrentClock()

    return (
        <TimePlace> Aktualny czas: {date.toLocaleString()} </TimePlace>
    )
}