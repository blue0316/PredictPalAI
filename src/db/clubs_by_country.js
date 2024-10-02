import bvb from '@assets/clubs/bvb.webp';
import manchester from '@assets/clubs/manchester.webp';
import bayern from '@assets/clubs/bayern.webp';
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
import westham from '@assets/clubs/westham.webp';
import leeds from '@assets/clubs/leeds.webp';
import leicester from '@assets/clubs/leicester.webp';
import everton from '@assets/clubs/everton.webp';
import bayer from '@assets/clubs/bayer.webp';
import koln from '@assets/clubs/koln.webp';
import werder from '@assets/clubs/werder.webp';
import hamburger from '@assets/clubs/hamburger.webp';
import vfb from '@assets/clubs/vfb.webp';
import eintracht from '@assets/clubs/eintracht.webp';
import schalke from '@assets/clubs/schalke.webp';
import hertha from '@assets/clubs/hertha.webp';
import milano from '@assets/clubs/milano.webp';
import lazio from '@assets/clubs/lazio.webp';
import roma from '@assets/clubs/roma.webp';
import napoli from '@assets/clubs/napoli.webp';
import atalanta from '@assets/clubs/atalanta.webp';
import torino from '@assets/clubs/torino.webp';
import sampdoria from '@assets/clubs/sampdoria.webp';
import atletico from '@assets/clubs/atletico.webp';
import valencia from '@assets/clubs/valencia.webp';
import sevilla from '@assets/clubs/sevilla.webp';
import villarreal from '@assets/clubs/villarreal.webp';
import realbetis from '@assets/clubs/realbetis.webp';
import realsociedad from '@assets/clubs/realsociedad.webp';
import athleticbilbao from '@assets/clubs/athleticbilbao.webp';
import celtavigo from '@assets/clubs/celtavigo.webp';
import psg from '@assets/clubs/psg.webp';
import lyon from '@assets/clubs/lyon.webp';
import olympique from '@assets/clubs/olympique.webp';
import asmonaco from '@assets/clubs/asmonaco.webp';
import lille from '@assets/clubs/lille.webp';
import bordeaux from '@assets/clubs/bordeaux.webp';
import asse from '@assets/clubs/asse.webp';
import nice from '@assets/clubs/nice.webp';
import nantes from '@assets/clubs/nantes.webp';
import mhsc from '@assets/clubs/mhsc.webp';

const clubs_by_country = [
    {
        country: 'England',
        clubs: [
            {
                name: 'Arsenal',
                city: 'London',
                logo: arsenal
            },
            {
                name: 'Chelsea',
                city: 'London',
                logo: chelsea
            },
            {
                name: 'Liverpool',
                city: 'Liverpool',
                logo: liverpool
            },
            {
                name: 'Manchester United',
                city: 'Manchester',
                logo: manchester_united
            },
            {
                name: 'Manchester City',
                city: 'Manchester',
                logo: manchester
            },
            {
                name: 'Tottenham Hotspur',
                city: 'London',
                logo: tottenham
            },
            {
                name: 'Leeds United',
                city: 'Leeds',
                logo: leeds
            },
            {
                name: 'Everton',
                city: 'Liverpool',
                logo: everton
            },
            {
                name: 'Leicester City',
                city: 'Leicester',
                logo: leicester
            },
            {
                name: 'West Ham United',
                city: 'London',
                logo: westham
            }
        ]
    },
    {
        country: 'Germany',
        clubs: [
            {
                name: 'Bayern',
                city: 'Munich',
                logo: bayern
            },
            {
                name: 'Borussia',
                city: 'Dortmund',
                logo: bvb
            },
            {
                name: 'Bayer',
                city: 'Leverkusen',
                logo: bayer
            },
            {
                name: 'Schalke 04',
                city: 'Gelsenkirchen',
                logo: schalke
            },
            {
                name: 'Hamburger SV',
                city: 'Hamburg',
                logo: hamburger
            },
            {
                name: 'VfB',
                city: 'Stuttgart',
                logo: vfb
            },
            {
                name: 'Werder',
                city: 'Bremen',
                logo: werder
            },
            {
                name: 'Hertha',
                city: 'Berlin',
                logo: hertha
            },
            {
                name: 'Eintracht',
                city: 'Frankfurt',
                logo: eintracht
            },
            {
                name: '1. FC Köln',
                city: 'Cologne',
                logo: koln
            }
        ]
    },
    {
        country: 'Italy',
        clubs: [
            {
                name: 'Juventus',
                city: 'Turin',
                logo: juventus
            },
            {
                name: 'AC Milan',
                city: 'Milan',
                logo: milan
            },
            {
                name: 'Inter Milan',
                city: 'Milan',
                logo: milano
            },
            {
                name: 'AS Roma',
                city: 'Rome',
                logo: roma
            },
            {
                name: 'SSC Napoli',
                city: 'Naples',
                logo: napoli
            },
            {
                name: 'Lazio',
                city: 'Rome',
                logo: lazio
            },
            {
                name: 'Fiorentina',
                city: 'Florence',
                logo: fiorentina
            },
            {
                name: 'Atalanta',
                city: 'Bergamo',
                logo: atalanta
            },
            {
                name: 'Torino',
                city: 'Turin',
                logo: torino
            },
            {
                name: 'Sampdoria',
                city: 'Genoa',
                logo: sampdoria
            }
        ]
    },
    {
        country: 'Spain',
        clubs: [
            {
                name: 'Real Madrid',
                city: 'Madrid',
                logo: realmadrid
            },
            {
                name: 'Barcelona',
                city: 'Barcelona',
                logo: barcelona
            },
            {
                name: 'Atletico Madrid',
                city: 'Madrid',
                logo: atletico
            },
            {
                name: 'Valencia',
                city: 'Valencia',
                logo: valencia
            },
            {
                name: 'Sevilla',
                city: 'Seville',
                logo: sevilla
            },
            {
                name: 'Villarreal',
                city: 'Villarreal',
                logo: villarreal
            },
            {
                name: 'Real Betis',
                city: 'Seville',
                logo: realbetis
            },
            {
                name: 'Real Sociedad',
                city: 'San Sebastian',
                logo: realsociedad
            },
            {
                name: 'Athletic Bilbao',
                city: 'Bilbao',
                logo: athleticbilbao
            },
            {
                name: 'Celta Vigo',
                city: 'Vigo',
                logo: celtavigo
            }
        ]
    },
    {
        country: 'France',
        clubs: [
            {
                name: 'Paris Saint-Germain',
                city: 'Paris',
                logo: psg
            },
            {
                name: 'Olympique',
                city: 'Marseille',
                logo: olympique
            },
            {
                name: 'Lyon',
                city: 'Lyon',
                logo: lyon
            },
            {
                name: 'AS Monaco',
                city: 'Monaco',
                logo: asmonaco
            },
            {
                name: 'Lille',
                city: 'Lille',
                logo: lille
            },
            {
                name: 'Bordeaux',
                city: 'Bordeaux',
                logo: bordeaux
            },
            {
                name: 'Saint-Etienne',
                city: 'Saint-Etienne',
                logo: asse
            },
            {
                name: 'Nice',
                city: 'Nice',
                logo: nice
            },
            {
                name: 'Montpellier',
                city: 'Montpellier',
                logo: mhsc
            },
            {
                name: 'Nantes',
                city: 'Nantes',
                logo: nantes
            }
        ]
    }
]

export default clubs_by_country