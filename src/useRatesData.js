import axios from "axios";
import { useEffect, useState } from "react";

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({ state: "loading" });

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const response = await axios.get("https://api.currencyapi.com/v3/latest?apikey=cur_live_222y2QVMHCzaRW2VVVkTzIOWFU5vyJsMv5q8Wmy1&base_currency=PLN");

                const { meta, data } = await response.data;

                setRatesData({
                    state: "success",
                    rates: data,
                    date: meta.last_updated_at,
                });

            } catch {
                setRatesData({ state: "error", });
            }
        };
        setTimeout(fetchRates, 1000)
    }, []);
    return ratesData;
};

