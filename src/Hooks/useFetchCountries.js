import { useEffect, useState } from "react";
import { getCountries } from "../Helpers/getCountries";

export const useFetchCountries = (value) => {
    const [ countries, setCountries ] = useState([]);
    
    const getCountriesArray = async() => {
        if (value) {
            const newCountries = await getCountries(value);
            setCountries(newCountries);
        }
    }

    useEffect(() => {
        getCountriesArray();
    }, [value]);

    return {
        countries
    };
}