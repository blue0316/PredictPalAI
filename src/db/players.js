import neuer from '@assets/players/neuer.webp';
import pavard from '@assets/players/pavard.webp';
import sule from '@assets/players/sule.webp';
import alaba from '@assets/players/alaba.webp';
import hernandez from '@assets/players/hernandez.webp';
import martinez from '@assets/players/martinez.webp';
import tolisso from '@assets/players/tolisso.webp';
import cuisance from '@assets/players/cuisance.webp';
import lewandowski from '@assets/players/lewandowski.webp';
import gnabry from '@assets/players/gnabry.webp';
import alcantara from '@assets/players/alcantara.webp';

const players_list = [
    {name: 'Niklas Süle', number: 4, substitutes: false, avatar: sule},
    {name: 'Benjamin Pavard', number: 5, substitutes: false, avatar: pavard},
    {name: 'David Alaba', number: 27, substitutes: false, avatar: alaba},
    {name: 'Lucas Hernández', number: 21, substitutes: false, avatar: hernandez},
    {name: 'Thiago Alcántara', number: 6, substitutes: true, avatar: alcantara},
    {name: 'Javi Martínez', number: 8, substitutes: false, avatar: martinez},
    {name: 'Mickaël Cuisance', number: 11, substitutes: true, avatar: cuisance},
    {name: 'Corentin Tolisso', number: 24, substitutes: false, avatar: tolisso},
    {name: 'Robert Lewandowski', number: 9, substitutes: false, avatar: lewandowski},
    {name: 'Serge Gnabry', number: 22, substitutes: false, avatar: gnabry},
    {name: 'Manuel Neuer', number: 1, substitutes: false, isCaptain: true, avatar: neuer}
]

export {players_list}