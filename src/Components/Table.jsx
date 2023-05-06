import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

export const Table = ({ countries }) => {
    const headers = Object.keys(countries[0]);

    return (
<>
    <table>
        <thead>
            <tr>
            {
                headers.map((header) => 
                    <th key={uuidv4()}>{header}</th>
                )
            }
            </tr>
        </thead>
        <tbody>
        {
            countries.map(country => (
            <tr key={uuidv4()}>
                {
                    headers.map((header) => 
                        header === 'Flag' ? (
                            <td key={uuidv4()}>
                                <img src={country[header]} alt="flag" />
                            </td>
                        ) : (
                            <td key={uuidv4()}>{country[header]}</td>
                        )
                    )
                }
            </tr>
            ))
        }
      </tbody>
    </table>
</>
    )
}

Table.propTypes = {
    countries: PropTypes.array
}