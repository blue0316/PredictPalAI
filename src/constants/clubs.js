import bvb from '@assets/clubs/bvb.webp';
import manchester from '@assets/clubs/manchester.webp';
import bayern from '@assets/clubs/bayern.webp';
import newcastle from '@assets/clubs/newcastle.webp';
import fiorentina from '@assets/clubs/fiorentina.webp';
import manchester_united from '@assets/clubs/manchester_united.webp';
import chelsea from '@assets/clubs/chelsea.webp';
import liverpool from '@assets/clubs/liverpool.webp';
import arsenal from '@assets/clubs/arsenal.webp';
import tottenham from '@assets/clubs/tottenham.webp';
import realmadrid from '@assets/clubs/realmadrid.webp';
import barcelona from '@assets/clubs/barcelona.webp';
import juventus from '@assets/clubs/juventus.webp';
import milan from '@assets/clubs/milan.webp';

const CLUBS = [
    {
        name: 'Borussia Dortmund',
        shortName: 'BVB',
        logo: bvb,
        id: 'bvb',
        city: 'Dortmund',
        country: 'Germany',
        color: 'accent'
    },
    {
        name: 'Manchester City',
        shortName: 'Man. City',
        logo: manchester,
        id: 'mancity',
        city: 'Manchester',
        country: 'UK',
        color: 'blue'
    },
    {
        name: 'Bayern Munich',
        logo: bayern,
        id: 'bayern',
        city: 'Munich',
        country: 'Germany',
        color: 'red',
        shortName: 'Bayern'
    },
    {
        name: 'Newcastle United',
        logo: newcastle,
        id: 'newcastle',
        city: 'Newcastle',
        country: 'UK',
        shortName: 'Newcastle',
        color: 'blue'
    },
    {
        name: 'Fiorentina',
        logo: fiorentina,
        id: 'fiorentina',
        city: 'Florence',
        country: 'Italy',
        shortName: 'Fiorentina',
        color: 'purple'
    },
    {
        name: 'Manchester United',
        logo: manchester_united,
        id: 'manunited',
        color: 'red',
        city: 'Manchester',
        country: 'UK',
        shortName: "Man. United"
    },
    {
        name: 'Chelsea',
        logo: chelsea,
        id: 'chelsea',
        color: 'blue',
        city: 'London',
        country: 'UK',
        shortName: 'Chelsea'
    },
    {
        name: 'Liverpool',
        logo: liverpool,
        id: 'liverpool',
        color: 'turquoise',
        city: 'Liverpool',
        country: 'UK',
        shortName: 'Liverpool'
    },
    {
        name: 'Arsenal',
        logo: arsenal,
        id: 'arsenal',
        color: 'red',
        city: 'London',
        country: 'UK',
        shortName: 'Arsenal'
    },
    {
        name: 'Tottenham Hotspur',
        logo: tottenham,
        id: 'tottenham',
        color: 'blue',
        city: 'London',
        country: 'UK',
        shortName: 'Tottenham'
    },
    {
        name: 'Real Madrid',
        logo: realmadrid,
        id: 'realmadrid',
        color: 'accent',
        city: 'Madrid',
        country: 'Spain',
        shortName: 'Real Madrid'
    },
    {
        name: 'Barcelona',
        shortName: 'Barca',
        logo: barcelona,
        id: 'barcelona',
        color: 'blue',
        city: 'Barcelona',
        country: 'Spain'
    },
    {
        name: 'Juventus',
        logo: juventus,
        id: 'juventus',
        color: 'grass',
        city: 'Turin',
        country: 'Italy',
        shortName: 'Juventus'
    },
    {
        name: 'AC Milan',
        logo: milan,
        id: 'acmilan',
        color: 'red',
        city: 'Milan',
        country: 'Italy',
        shortName: 'AC Milan'
    },
];

export default CLUBS