import {nanoid} from 'nanoid';

const groups_matches = [
    {
        team1: {
            color: 'red',
            countryName: 'Ukraine',
            countryCode: 'UA',
            score: 3,
        },
        team2: {
            color: 'grass',
            countryName: 'Brazil',
            countryCode: 'BR',
            score: 7,
        },
        group: 'A', id: nanoid(5)
    },
    {
        team1: {
            color: 'accent',
            countryName: 'Germany',
            countryCode: 'DE',
            score: 5,
        },
        team2: {
            color: 'azure',
            countryName: 'France',
            countryCode: 'FR',
            score: 2,
        },
        group: 'A', id: nanoid(5),
        active: true,
    },
    {
        team1: {
            color: 'blue',
            countryName: 'Argentina',
            countryCode: 'AR',
            score: 9,
        },
        team2: {
            color: 'salmon',
            countryName: 'Spain',
            countryCode: 'ES',
            score: 1,
        },
        group: 'A', id: nanoid(5),
    },
    {
        team1: {
            color: 'orange',
            countryName: 'Italy',
            countryCode: 'IT',
            score: 4,
        },
        team2: {
            color: 'turquoise',
            countryName: 'Portugal',
            countryCode: 'PT',
            score: 6,
        },
        group: 'A', id: nanoid(5),
    },
    {
        team1: {
            color: 'red',
            countryName: 'Ukraine',
            countryCode: 'UA',
            score: 3,
        },
        team2: {
            color: 'grass',
            countryName: 'Brazil',
            countryCode: 'BR',
            score: 7,
        },
        group: 'A', id: nanoid(5),
    },
    {
        team1: {
            color: 'accent',
            countryName: 'Germany',
            countryCode: 'DE',
            score: 5,
        },
        team2: {
            color: 'azure',
            countryName: 'France',
            countryCode: 'FR',
            score: 2,
        },
        group: 'A', id: nanoid(5),
    },
    {
        team1: {
            color: 'blue',
            countryName: 'Argentina',
            countryCode: 'AR',
            score: 9,
        },
        team2: {
            color: 'salmon',
            countryName: 'Spain',
            countryCode: 'ES',
            score: 1,
        },
        group: 'A', id: nanoid(5),
    },
    {
        team1: {
            color: 'orange',
            countryName: 'Italy',
            countryCode: 'IT',
            score: 4,
        },
        team2: {
            color: 'turquoise',
            countryName: 'Portugal',
            countryCode: 'PT',
            score: 6,
        },
        group: 'A', id: nanoid(5),
    },
    {
        team1: {
            color: 'red',
            countryName: 'Ukraine',
            countryCode: 'UA',
            score: 3,
        },
        team2: {
            color: 'grass',
            countryName: 'Brazil',
            countryCode: 'BR',
            score: 7,
        },
        group: 'A', id: nanoid(5),
    },
    {
        team1: {
            color: 'accent',
            countryName: 'Germany',
            countryCode: 'DE',
            score: 5,
        },
        team2: {
            color: 'azure',
            countryName: 'France',
            countryCode: 'FR',
            score: 2,
        },
        group: 'B', id: nanoid(5),
    },
    {
        team1: {
            color: 'blue',
            countryName: 'Argentina',
            countryCode: 'AR',
            score: 9,
        },
        team2: {
            color: 'salmon',
            countryName: 'Spain',
            countryCode: 'ES',
            score: 1,
        },
        group: 'B', id: nanoid(5),
    },
    {
        team1: {
            color: 'orange',
            countryName: 'Italy',
            countryCode: 'IT',
            score: 4,
        },
        team2: {
            color: 'turquoise',
            countryName: 'Portugal',
            countryCode: 'PT',
            score: 6,
        },
        group: 'B', id: nanoid(5),
    },
    {
        team1: {
            color: 'electro',
            countryName: 'Netherlands',
            countryCode: 'NL',
            score: 8,
        },
        team2: {
            color: 'green',
            countryName: 'Belgium',
            countryCode: 'BE',
            score: 0,
        },
        group: 'B', id: nanoid(5),
    },
    {
        team1: {
            color: 'pink',
            countryName: 'England',
            countryCode: 'GB',
            score: 10,
        },
        team2: {
            color: 'purple',
            countryName: 'Croatia',
            countryCode: 'HR',
            score: 2,
        },
        group: 'B', id: nanoid(5),
    },
    {
        team1: {
            color: 'red',
            countryName: 'Switzerland',
            countryCode: 'CH',
            score: 5,
        },
        team2: {
            color: 'grass',
            countryName: 'Poland',
            countryCode: 'PL',
            score: 4,
        },
        group: 'B', id: nanoid(5),
    },
    {
        team1: {
            color: 'pink',
            countryName: 'England',
            countryCode: 'GB',
            score: 10,
        },
        team2: {
            color: 'purple',
            countryName: 'Croatia',
            countryCode: 'HR',
            score: 2,
        },
        group: 'B', id: nanoid(5),
    },
    {
        team1: {
            color: 'red',
            countryName: 'Switzerland',
            countryCode: 'CH',
            score: 5,
        },
        team2: {
            color: 'grass',
            countryName: 'Poland',
            countryCode: 'PL',
            score: 4,
        },
        group: 'B', id: nanoid(5),
    },
    {
        team1: {
            color: 'red',
            countryName: 'Ukraine',
            countryCode: 'UA',
            score: 3,
        },
        team2: {
            color: 'grass',
            countryName: 'Brazil',
            countryCode: 'BR',
            score: 7,
        },
        group: 'C', id: nanoid(5),
    },
    {
        team1: {
            color: 'accent',
            countryName: 'Germany',
            countryCode: 'DE',
            score: 5,
        },
        team2: {
            color: 'azure',
            countryName: 'France',
            countryCode: 'FR',
            score: 2,
        },
        group: 'C', id: nanoid(5),
    },
    {
        team1: {
            color: 'blue',
            countryName: 'Argentina',
            countryCode: 'AR',
            score: 9,
        },
        team2: {
            color: 'salmon',
            countryName: 'Spain',
            countryCode: 'ES',
            score: 1,
        },
        group: 'C', id: nanoid(5),
    },
    {
        team1: {
            color: 'orange',
            countryName: 'Italy',
            countryCode: 'IT',
            score: 4,
        },
        team2: {
            color: 'turquoise',
            countryName: 'Portugal',
            countryCode: 'PT',
            score: 6,
        },
        group: 'C', id: nanoid(5),
    },
    {
        team1: {
            color: 'green',
            countryName: 'Netherlands',
            countryCode: 'NL',
            score: 8,
        },
        team2: {
            color: 'pink',
            countryName: 'Chile',
            countryCode: 'CL',
            score: 0,
        },
        group: 'C', id: nanoid(5),
    },
    {
        team1: {
            color: 'purple',
            countryName: 'England',
            countryCode: 'GB',
            score: 2,
        },
        team2: {
            color: 'accent',
            countryName: 'Croatia',
            countryCode: 'HR',
            score: 4,
        },
        group: 'C', id: nanoid(5),
    },
    {
        team1: {
            color: 'turquoise',
            countryName: 'Denmark',
            countryCode: 'DK',
            score: 6,
        },
        team2: {
            color: 'orange',
            countryName: 'Australia',
            countryCode: 'AU',
            score: 1,
        },
        group: 'C', id: nanoid(5),
    },
    {
        team1: {
            color: 'salmon',
            countryName: 'Switzerland',
            countryCode: 'CH',
            score: 3,
        },
        team2: {
            color: 'red',
            countryName: 'Costa Rica',
            countryCode: 'CR',
            score: 5,
        },
        group: 'C', id: nanoid(5),
    },
    {
        team1: {
            color: 'azure',
            countryName: 'Czech Republic',
            countryCode: 'CZ',
            score: 4,
        },
        team2: {
            color: 'accent',
            countryName: 'Scotland',
            countryCode: 'GB',
            score: 2,
        },
        group: 'D', id: nanoid(5),
    },
    {
        team1: {
            color: 'turquoise',
            countryName: 'Argentina',
            countryCode: 'AR',
            score: 6,
        },
        team2: {
            color: 'red',
            countryName: 'Iceland',
            countryCode: 'IS',
            score: 0,
        },
        group: 'D', id: nanoid(5),
    },
    {
        team1: {
            color: 'green',
            countryName: 'Croatia',
            countryCode: 'HR',
            score: 5,
        },
        team2: {
            color: 'salmon',
            countryName: 'Nigeria',
            countryCode: 'NG',
            score: 3,
        },
        group: 'D', id: nanoid(5),
    },
    {
        team1: {
            color: 'orange',
            countryName: 'England',
            countryCode: 'GB',
            score: 8,
        },
        team2: {
            color: 'pink',
            countryName: 'Bosnia and Herzegovina',
            countryCode: 'BA',
            score: 1,
        },
        group: 'D', id: nanoid(5),
    },
    {
        team1: {
            color: 'blue',
            countryName: 'Scotland',
            countryCode: 'GB',
            score: 2,
        },
        team2: {
            color: 'orange',
            countryName: 'Czech Republic',
            countryCode: 'CZ',
            score: 3,
        },
        group: 'D', id: nanoid(5),
    },
    {
        team1: {
            color: 'pink',
            countryName: 'Iceland',
            countryCode: 'IS',
            score: 1,
        },
        team2: {
            color: 'turquoise',
            countryName: 'Argentina',
            countryCode: 'AR',
            score: 5,
        },
        group: 'D', id: nanoid(5),
    },
    {
        team1: {
            color: 'salmon',
            countryName: 'Nigeria',
            countryCode: 'NG',
            score: 0,
        },
        team2: {
            color: 'green',
            countryName: 'Croatia',
            countryCode: 'HR',
            score: 2,
        },
        group: 'D', id: nanoid(5),
    },
    {
        team1: {
            color: 'azure',
            countryName: 'Bosnia and Herzegovina',
            countryCode: 'BA',
            score: 4,
        },
        team2: {
            color: 'red',
            countryName: 'England',
            countryCode: 'GB',
            score: 7,
        },
        group: 'D', id: nanoid(5),
    },
    {
        team1: {
            color: 'red',
            countryName: 'Spain',
            countryCode: 'ES',
            score: 2,
        },
        team2: {
            color: 'green',
            countryName: 'Sweden',
            countryCode: 'SE',
            score: 1,
        },
        group: 'E', id: nanoid(5),
    },
    {
        team1: {
            color: 'azure',
            countryName: 'Poland',
            countryCode: 'PL',
            score: 4,
        },
        team2: {
            color: 'blue',
            countryName: 'Slovakia',
            countryCode: 'SK',
            score: 0,
        },
        group: 'E', id: nanoid(5),
    },
    {
        team1: {
            color: 'orange',
            countryName: 'Sweden',
            countryCode: 'SE',
            score: 3,
        },
        team2: {
            color: 'grass',
            countryName: 'Slovakia',
            countryCode: 'SK',
            score: 1,
        },
        group: 'E', id: nanoid(5),
    },
    {
        team1: {
            color: 'turquoise',
            countryName: 'Spain',
            countryCode: 'ES',
            score: 5,
        },
        team2: {
            color: 'salmon',
            countryName: 'Poland',
            countryCode: 'PL',
            score: 2,
        },
        group: 'E', id: nanoid(5),
    },
    {
        team1: {
            color: 'pink',
            countryName: 'Slovakia',
            countryCode: 'SK',
            score: 3,
        },
        team2: {
            color: 'red',
            countryName: 'Spain',
            countryCode: 'ES',
            score: 4,
        },
        group: 'E', id: nanoid(5),
    },
    {
        team1: {
            color: 'accent',
            countryName: 'Poland',
            countryCode: 'PL',
            score: 1,
        },
        team2: {
            color: 'green',
            countryName: 'Sweden',
            countryCode: 'SE',
            score: 2,
        },
        group: 'E', id: nanoid(5),
    },
    {
        team1: {
            color: 'blue',
            countryName: 'Slovakia',
            countryCode: 'SK',
            score: 0,
        },
        team2: {
            color: 'pink',
            countryName: 'Poland',
            countryCode: 'PL',
            score: 2,
        },
        group: 'E', id: nanoid(5),
    },
    {
        team1: {
            color: 'salmon',
            countryName: 'Sweden',
            countryCode: 'SE',
            score: 2,
        },
        team2: {
            color: 'azure',
            countryName: 'Spain',
            countryCode: 'ES',
            score: 3,
        },
        group: 'E', id: nanoid(5),
    },
    {
        team1: {
            color: 'orange',
            countryName: 'Hungary',
            countryCode: 'HU',
            score: 2,
        },
        team2: {
            color: 'blue',
            countryName: 'Portugal',
            countryCode: 'PT',
            score: 3,
        },
        group: 'F', id: nanoid(5),
    },
    {
        team1: {
            color: 'purple',
            countryName: 'France',
            countryCode: 'FR',
            score: 4,
        },
        team2: {
            color: 'turquoise',
            countryName: 'Germany',
            countryCode: 'DE',
            score: 1,
        },
        group: 'F', id: nanoid(5),
    },
    {
        team1: {
            color: 'pink',
            countryName: 'Hungary',
            countryCode: 'HU',
            score: 0,
        },
        team2: {
            color: 'green',
            countryName: 'France',
            countryCode: 'FR',
            score: 3,
        },
        group: 'F', id: nanoid(5),
    },
    {
        team1: {
            color: 'accent',
            countryName: 'Portugal',
            countryCode: 'PT',
            score: 2,
        },
        team2: {
            color: 'salmon',
            countryName: 'Germany',
            countryCode: 'DE',
            score: 2,
        },
        group: 'F', id: nanoid(5),
    },
    {
        team1: {
            color: 'blue',
            countryName: 'Hungary',
            countryCode: 'HU',
            score: 1,
        },
        team2: {
            color: 'salmon',
            countryName: 'France',
            countryCode: 'FR',
            score: 3,
        },
        group: 'F', id: nanoid(5),
    },
    {
        team1: {
            color: 'orange',
            countryName: 'Portugal',
            countryCode: 'PT',
            score: 2,
        },
        team2: {
            color: 'turquoise',
            countryName: 'Germany',
            countryCode: 'DE',
            score: 1,
        },
        group: 'F', id: nanoid(5),
    },
    {
        team1: {
            color: 'purple',
            countryName: 'Hungary',
            countryCode: 'HU',
            score: 0,
        },
        team2: {
            color: 'accent',
            countryName: 'Portugal',
            countryCode: 'PT',
            score: 3,
        },
        group: 'F', id: nanoid(5),
    },
    {
        team1: {
            color: 'green',
            countryName: 'France',
            countryCode: 'FR',
            score: 2,
        },
        team2: {
            color: 'pink',
            countryName: 'Germany',
            countryCode: 'DE',
            score: 2,
        },
        group: 'F', id: nanoid(5),
    },
    {
        team1: {
            color: 'azure',
            countryName: 'England',
            countryCode: 'EN',
            score: 3,
        },
        team2: {
            color: 'red',
            countryName: 'Croatia',
            countryCode: 'HR',
            score: 1,
        },
        group: 'G', id: nanoid(5),
    },
    {
        team1: {
            color: 'turquoise',
            countryName: 'Scotland',
            countryCode: 'SC',
            score: 2,
        },
        team2: {
            color: 'green',
            countryName: 'Czech Republic',
            countryCode: 'CZ',
            score: 2,
        },
        group: 'G', id: nanoid(5),
    },
    {
        team1: {
            color: 'salmon',
            countryName: 'Croatia',
            countryCode: 'HR',
            score: 1,
        },
        team2: {
            color: 'blue',
            countryName: 'Czech Republic',
            countryCode: 'CZ',
            score: 3,
        },
        group: 'G', id: nanoid(5),
    },
    {
        team1: {
            color: 'orange',
            countryName: 'England',
            countryCode: 'EN',
            score: 4,
        },
        team2: {
            color: 'pink',
            countryName: 'Scotland',
            countryCode: 'SC',
            score: 0,
        },
        group: 'G', id: nanoid(5),
    },
    {
        team1: {
            color: 'accent',
            countryName: 'Scotland',
            countryCode: 'SC',
            score: 1,
        },
        team2: {
            color: 'purple',
            countryName: 'Croatia',
            countryCode: 'HR',
            score: 3,
        },
        group: 'G', id: nanoid(5),
    },
    {
        team1: {
            color: 'red',
            countryName: 'Czech Republic',
            countryCode: 'CZ',
            score: 2,
        },
        team2: {
            color: 'azure',
            countryName: 'England',
            countryCode: 'EN',
            score: 2,
        },
        group: 'G', id: nanoid(5),
    },
    {
        team1: {
            color: 'green',
            countryName: 'Croatia',
            countryCode: 'HR',
            score: 0,
        },
        team2: {
            color: 'turquoise',
            countryName: 'England',
            countryCode: 'EN',
            score: 2,
        },
        group: 'G', id: nanoid(5),
    },
    {
        team1: {
            color: 'blue',
            countryName: 'Czech Republic',
            countryCode: 'CZ',
            score: 1,
        },
        team2: {
            color: 'salmon',
            countryName: 'Scotland',
            countryCode: 'SC',
            score: 1,
        },
        group: 'G', id: nanoid(5),
    },
]

export default groups_matches