// utils
import dayjs from 'dayjs';
import {nanoid} from 'nanoid';

// assets
import img1 from '@assets/reviews/1.webp';
import img2 from '@assets/reviews/2.webp';
import img3 from '@assets/reviews/3.webp';
import img4 from '@assets/reviews/4.webp';
import img5 from '@assets/reviews/5.webp';
import img6 from '@assets/reviews/6.webp';
import img7 from '@assets/reviews/7.webp';
import img8 from '@assets/reviews/8.webp';
import img9 from '@assets/reviews/9.webp';
import img10 from '@assets/reviews/10.webp';

const reviews = [
    {
        id: nanoid(5),
        name: 'John Smith',
        avatar: img1,
        title: 'Comfy and stylish t-shirt',
        text: 'This t-shirt is super comfortable and looks great with jeans. The fabric is soft and breathable, and the fit is just right. I love wearing it to casual events.',
        rating: 4.5,
        liked: 60,
        disliked: 10,
        date: dayjs().subtract({days: 1, hours: 2, minutes: 30})
    },
    {
        id: nanoid(5),
        name: 'Emily Brown',
        avatar: img2,
        title: 'Great quality, fair price',
        text: 'I was pleasantly surprised by the quality of this t-shirt, especially considering the affordable price. The fabric is thick and durable, and the seams are well-constructed. Definitely worth the purchase.',
        rating: 4.0,
        liked: 45,
        disliked: 5,
        date: dayjs().subtract({days: 2, hours: 3, minutes: 15})
    },
    {
        id: nanoid(5),
        name: 'David Lee',
        avatar: img3,
        title: 'Disappointing fit',
        text: 'I was excited to receive this t-shirt, but unfortunately the fit was not as expected. The sleeves were too short and the body was too loose, even though I ordered my usual size. The fabric was nice though.',
        rating: 2.5,
        liked: 5,
        disliked: 25,
        date: dayjs().subtract({days: 3, hours: 4, minutes: 45})
    },
    {
        id: nanoid(5),
        name: 'Sarah Johnson',
        avatar: img4,
        title: 'Perfect for workouts',
        text: 'I bought this t-shirt specifically for my gym sessions, and it has exceeded my expectations. The fabric is moisture-wicking and breathable, and the fit is snug but not too tight. I highly recommend it to other fitness enthusiasts.',
        rating: 4.5,
        liked: 75,
        disliked: 2,
        date: dayjs().subtract({days: 4, hours: 5, minutes: 30})
    },
    {
        id: nanoid(5),
        name: 'Alex Wilson',
        avatar: img5,
        title: 'Versatile wardrobe staple',
        text: 'This t-shirt is a great addition to my wardrobe because it can be dressed up or down. The fabric is high-quality and doesn\'t wrinkle easily, and the fit is flattering without being too tight. I\'ve already worn it to several different occasions.',
        rating: 4.5,
        liked: 55,
        disliked: 5,
        date: dayjs().subtract({days: 5, hours: 6, minutes: 15})
    },
    {
        id: nanoid(5),
        name: 'Megan Davis',
        avatar: img6,
        title: 'Runs a bit small',
        text: 'I would recommend ordering one size up in this t-shirt, as it runs a bit small. Other than that, it\'s a great basic tee that can be paired with anything. The fabric is soft and comfortable.',
        rating: 3.5,
        liked: 25,
        disliked: 10,
        date: dayjs().subtract({days: 6, hours: 7, minutes: 45})
    },
    {
        id: nanoid(5),
        name: 'Chris Miller',
        avatar: img7,
        title: 'Satisfied customer',
        text: 'I am very happy with my purchase of this t-shirt. It fits well and is comfortable to wear for extended periods of time. The price is also reasonable for the quality of the product. I would buy it again.',
        rating: 4.0,
        liked: 40,
        disliked: 5,
        date: dayjs().subtract({days: 7, hours: 8, minutes: 30})
    },
    {
        id: nanoid(5),
        name: 'Natalie Green',
        avatar: img8,
        title: 'Soft and cozy',
        text: 'This t-shirt feels like a hug! The fabric is incredibly soft and cozy, and I love the relaxed fit. It\'s perfect for lounging around the house or running errands.',
        rating: 4.5,
        liked: 50,
        disliked: 3,
        date: dayjs().subtract({days: 8, hours: 9, minutes: 15})
    },
    {
        id: nanoid(5),
        name: 'Alice Chen',
        avatar: img9,
        title: 'Great for layering',
        text: 'I love using this t-shirt as a base layer for my outfits. The fabric is thin and breathable, and it doesn\'t add any bulk to my look. It\'s also comfortable enough to wear on its own. Overall, a great purchase.',
        rating: 4.0,
        liked: 30,
        disliked: 5,
        date: dayjs().subtract({days: 9, hours: 10, minutes: 45})
    },
    {
        id: nanoid(5),
        name: 'Lisa Rodriguez',
        avatar: img10,
        title: 'Fun graphic tee',
        text: 'I love the design on this t-shirt! It\'s fun and playful, and definitely makes a statement. The fabric is soft and comfortable, and the fit is true to size. It\'s my new favorite casual shirt.',
        rating: 4.0,
        liked: 35,
        disliked: 5,
        date: dayjs().subtract({days: 10, hours: 11, minutes: 30})
    }
]

export default reviews