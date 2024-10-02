import dayjs from 'dayjs';

import avatar1 from '@assets/avatars/1.webp';
import avatar2 from '@assets/avatars/2.webp';
import avatar3 from '@assets/avatars/3.webp';
import avatar4 from '@assets/avatars/4.webp';
import avatar5 from '@assets/avatars/5.webp';

const chat = [
    {
        timestamp: dayjs().subtract(15, 'minute'),
        sender: {
            name: 'Greg Freeman',
            avatar: avatar1
        },
        message: 'Hey, how is it going?. Are you up for a quick call?'
    },
    {
        timestamp: dayjs().subtract(1, 'day'),
        sender: {
            name: 'Charlie Smith',
            avatar: avatar2
        },
        message: 'Hi! I am looking for a new training program. Do you have any recommendations?'
    },
    {
        timestamp: dayjs().subtract(1, 'day').subtract(2, 'hour'),
        sender: {
            name: 'Vic Patel',
            avatar: avatar3
        },
        message: 'Hey Rick! My name is Vic. I am a designer at a local agency. I was wondering if you would be interested in a collaboration?'
    },
    {
        timestamp: dayjs().subtract(2, 'day').subtract(4, 'hour'),
        sender: {
            name: 'Andy Lopez',
            avatar: avatar4
        },
        message: 'Heeey man! 🙂 How are you? Just wanted to remind you that we have a meeting tomorrow at 10:00 am.'
    },
    {
        timestamp: dayjs().subtract(3, 'day').subtract(6, 'hour'),
        sender: {
            name: 'Jenny Wilson',
            avatar: avatar5
        },
        message: 'Hey Rick! I just wanted to let you know that I have finished the design for the new website. I am waiting for your feedback.'
    }
];

export default chat