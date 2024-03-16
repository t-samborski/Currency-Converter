import axios from "axios";
import { useEffect, useState } from "react";

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({ state: "loading" });

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const response = await axios.get("products.json");

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

