import { useState } from "react"
import { SearchBar } from "./Components/SearchBar"
import { useFetchCountries } from "./Hooks/useFetchCountries";
import { Table } from "./Components/Table";

export const CountriesApp = () => {
    const [ inputValue, setInputValue ] = useState('');
    const { countries } = useFetchCountries(inputValue);

    const onSetValue = (newInput) => {
        setInputValue(newInput);
    };

    return (
        <div className="container">
            <h1>Countries App</h1>
            <hr />
            <SearchBar 
                onNewValue = { onSetValue }
                placeholder="Search by Country"
            />
      {countries.length > 0 && <Table countries={countries} />}
        </div>
    )
}