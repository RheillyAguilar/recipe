
import HeroImageOne from '../Asset/Image/Filipino-Cuisine-Popularity.png'
import HeroImageTwo from '../Asset/Image/lumpiang-shanghai.jpg'
import HeroChoiceOne from '../Asset/Image/Almsual.jfif'
import HeroChoiceTwo from '../Asset/Image/Lutong-Ulam.jpg'
import HeroChoiceThree from '../Asset/Image/Merienda.jpg'

export const NavLinks = [
    { href: '/', key: 'Home', text: 'Home' },
    { href: '/recipe', key: 'Recipe', text: 'Recipe' },
    { href: '/blog', key: 'Blog', text: 'Blog' },
];

export const HeroData = [
    {
        id: 1,
        image: HeroImageOne,
        title: `Filipino Cuisine`,
        description: 'A majority of mainstream Filipino dishes that compose Filipino cuisine are from the food traditions of various ethnolinguistic groups and tribes of the archipelago, including the Ilocano, Pangasinan, Kapampangan, Tagalog, Bicolano, Visayan, Chavacano and Maranao ethnolinguistic groups.'
    },
    {
        id: 2,
        image: HeroImageTwo,
        title: `Lumpiang Shanghai`,
        description: 'A Filipino deep-fried appetizer consisting of a mixture of giniling (ground pork) wrapped in a thin egg crêpe. Lumpiang Shanghai is regarded as the most basic type of lumpia in Filipino cuisine, and it is usually smaller and thinner than other lumpia variants.'
    }
];

export const HeroChoiceData = [
    {
        id: 6,
        image: HeroChoiceOne,
        title: 'Umagahan',
        destination: '/umagahan'
    },
    {
        id: 7,
        image: HeroChoiceTwo,
        title: 'Ulam',
        destination: '/lutong-ulam'
    },
    {
        id: 8,
        image: HeroChoiceThree,
        title: 'Merienda',
        destination: '/merienda'
    },
];

export const HeroItemData = [
    {
        id: 9,
        image: 'https://www.kawalingpinoy.com/wp-content/uploads/2013/01/sinigang-baboy-7.jpg',
        title: 'Sinigang',
        description: 'Filipino stews or soups like sinigang are known for their savory and sour flavors. It is among the more well-liked Filipino dishes.',
        destination: '/procedure'
    },
    {
        id: 10,
        image: 'https://www.lutongbahayrecipe.com/wp-content/uploads/2019/04/lutong-bahay-camote-cue-recipe-1200x1087.jpg',
        title: 'Kamote Cue',
        description: 'A common snack dish in the Philippines made from camote (sweet potatoes) is called camote cue or camotecue.',
        destination: '/procedure'
    },
    {
        id: 11,
        image: 'https://makeitdough.com/wp-content/uploads/2023/01/Sourdough-Pandesal-18.jpg',
        title: 'Pandesal',
        description: 'The pandesal is incredibly fluffy and soft. These are excellent on their own or with fillings for breakfast or as a snack.',
        destination: '/procedure'
    },
    {
        id: 12,
        image: 'https://www.seriouseats.com/thmb/uc8nb040OwgXekR9obuhEqm8WoI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2019__10__20191023-chicken-adobo-vicky-wasik-19-12ce105a2e1a44dfb1e2673775118064.jpg',
        title: 'Adobo',
        description: 'Chicken are cooked with vinegar, garlic, and soy sauce in this meal. There are variations that include onions as well.',
        destination: '/procedure'
    },
    {
        id: 13,
        image: 'https://sweetsimplevegan.com/wp-content/uploads/2021/03/filipino-Banana-Cue-sweet-simple-vegan.jpg',
        title: 'Banana Cue',
        description: 'Banana cue, also known as bananacue, is a common street meal or snack. It is a combination of the words "banana" and "barbecue,".',
        destination: '/procedure'
    },
    {
        id: 14,
        image: 'https://images.deliveryhero.io/image/fd-ph/Products/15022744.jpg?width=%s',
        title: 'Ham Silog',
        description: `A tasty ham silog is ideal for breakfast, brunch, or any other time of day when you're craving something warm.`,
        destination: '/procedure'
    },
    {
        id: 15,
        image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/11/2/0/DV1510H_fried-chicken-recipe-10_s4x3.jpg.rend.hgtvcom.1280.1280.suffix/1568222255998.jpeg',
        title: 'Fried Chicken',
        description: 'Fried chicken is a dish made of chicken pieces that have been air, pressure, pan, or deep-fried after being coated in seasoned flour.',
        destination: '/procedure'
    },
    {
        id: 16,
        image: 'https://www.seriouseats.com/thmb/elzl8iopwr-WrEbCIApwmTXhB7M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20210617-turon-vicky-wasik-seriouseats-seriouseats-25-c8fab2c218bf47d484afb614e51e3376.jpg',
        title: 'Turon',
        description: `One kind of Filipino snack is turon. It's also known as banana lumpia or deep-fried banana rolls. Turon, a traditional Filipino meryenda.`,
        destination: '/procedure'
    },
]
