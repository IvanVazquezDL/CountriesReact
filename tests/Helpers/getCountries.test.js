import { getCountries } from "../../src/Helpers/getCountries";

describe('Test on getCountries', () => {
    test('Should bring the api data', async () => {
        const countries = await getCountries();
        console.log(countries);
    });
});