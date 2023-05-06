export const getCountries = async (value) => {
    const url = `https://restcountries.com/v3.1/name/${value}`;
    const resp = await fetch(url);
    const data  = await resp.json();

    const countries = data.map( country => ({
        Name: country.name.common,
        Flag: country.flags.png,
        Capital: country.capital,
        Population: country.population.toLocaleString()
    }));

    return countries;
} 