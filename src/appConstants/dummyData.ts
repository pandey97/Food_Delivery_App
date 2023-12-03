import { Images,Icons } from "../themes";

const myProfile = {
  name: 'ByProgrammers',
  profile_image: require('../themes/images/profile.png'),
  address: 'No. 88, Jln Padungan, Kuching',
};

const categories = [
  {
    id: 1,
    name: 'Fast Food',
    icon: require('../themes/icons/burger.png'),
  },
  {
    id: 2,
    name: 'Fruit Item',
    icon: require('../themes/icons/cherry.png'),
  },
  {
    id: 3,
    name: 'Rice Item',
    icon: require('../themes/icons/rice.png'),
  },
];

const menu = [
  {
    id: 1,
    name: 'Hamburger',
    description: 'Chicken patty hamburger',
    price: '$15.99',
    calories: 78,
    isFavourite: true,
    categories: 0,
    rating: 5,
    delivery_time: '10 Mins',
    distance: 4,
    pricing: 15,
    image: require('../themes/images/hamburger.png'),
  },

  {
    id: 2,
    name: 'Hot Tacos',
    description: 'Mexican tortilla & tacos',
    price: '$10.99',
    calories: 78,
    isFavourite: false,
    categories: 1,
    rating: 4,
    delivery_time: '30 Mins',
    distance: 15,
    pricing: 10,
    image: require('../themes/images/hot_tacos.png'),
  },

  {
    id: 3,
    name: 'Veg Biryani',
    description: 'A popular rice & Vegetable.',
    price: '$10.99',
    calories: 78,
    isFavourite: true,
    categories: 2,
    rating: 5,
    delivery_time: '10 Mins',
    distance: 10,
    pricing: 10,
    image: require('../themes/images/veg_biryani.png'),
  },

  {
    id: 4,
    name: 'Wrap Sandwich',
    description: 'Grilled vegetables sandwich',
    price: '$10.99',
    calories: 78,
    isFavourite: false,
    categories: 0,
    rating: 4,
    delivery_time: '30 Mins',
    distance: 15,
    pricing: 10,
    image: require('../themes/images/wrap_sandwich.png'),
  },
  {
    id: 5,
    name: 'Hamburger',
    description: 'Chicken patty hamburger',
    price: '$15.99',
    calories: 78,
    isFavourite: true,
    categories: 3,
    rating: 3,
    delivery_time: '20 Mins',
    distance: 15,
    pricing: 20,
    image: require('../themes/images/hamburger.png'),
  },

  {
    id: 6,
    name: 'Hot Tacos',
    description: 'Mexican tortilla & tacos',
    price: '$10.99',
    calories: 78,
    isFavourite: false,
    categories: 3,
    rating: 3,
    delivery_time: '20 Mins',
    distance: 15,
    pricing: 20,
    image: require('../themes/images/hot_tacos.png'),
  },
  {
    id: 7,
    name: 'Veg Biryani',
    description: 'A popular rice & Vegetable.',
    price: '$10.99',
    calories: 68,
    isFavourite: true,
    categories: 3,
    rating: 2,
    delivery_time: '20 Mins',
    distance: 20,
    pricing: 20,
    image: require('../themes/images/veg_biryani.png'),
  },
  {
    id: 8,
    name: 'Wrap Sandwich',
    description: 'Grilled vegetables sandwich',
    price: '$10.99',
    calories: 68,
    isFavourite: false,
    categories: 3,
    rating: 2,
    delivery_time: '20 Mins',
    distance: 20,
    pricing: 20,
    image: require('../themes/images/wrap_sandwich.png'),
  },
  {
    id: 9,
    name: 'Rice Meal',
    description: 'Grilled Eggfully Rice',
    price: '$14.99',
    calories: 88,
    isFavourite: true,
    categories: 2,
    rating: 1,
    delivery_time: '10 Mins',
    distance: 10,
    pricing: 10,
    image: Icons.rice,
  },
  {
    id: 10,
    name: 'Cherry Fruit',
    description: 'Mixed Vegetable Packed Meal',
    price: '$19.99',
    calories: 98,
    isFavourite: false,
    categories: 1,
    rating: 1,
    delivery_time: '10 Mins',
    distance: 10,
    pricing: 10,
    image: Icons.cherry,
  },
];

const hamburger = {
  id: 1,
  name: 'Hamburger',
  description: 'Chicken patty hamburger',
  categories: [1, 2],
  price: '$15.99',
  calories: 78,
  isFavourite: true,
  image: require('../themes/images/hamburger.png'),
};

const hotTacos = {
  id: 2,
  name: 'Hot Tacos',
  description: 'Mexican tortilla & tacos',
  categories: [1, 3],
  price: '$10.99',
  calories: 78,
  isFavourite: false,
  image: require('../themes/images/hot_tacos.png'),
};

const vegBiryani = {
  id: 3,
  name: 'Veg Biryani',
  description:
    'A popular spice and vegetables mixed favoured rice dish which is typically prepared by layering the biryani gravy and basmati rice in flat bottom vessel.',
  categories: [1, 2, 3],
  price: '$10.99',
  calories: 78,
  isFavourite: true,
  image: require('../themes/images/veg_biryani.png'),
};

const wrapSandwich = {
  id: 4,
  name: 'Wrap Sandwich',
  description: 'Grilled vegetables sandwich',
  categories: [1, 2],
  price: '$10.99',
  calories: 78,
  isFavourite: true,
  image: require('../themes/images/wrap_sandwich.png'),
};

const sizes = [
  {
    id: 1,
    label: '12"',
  },
  {
    id: 2,
    label: '14"',
  },
  {
    id: 3,
    label: '16"',
  },
  {
    id: 4,
    label: '18"',
  },
];

const myCart = [
  {
    ...hamburger,
    qty: 1,
  },
  {
    ...hotTacos,
    qty: 1,
  },
  {
    ...vegBiryani,
    qty: 1,
  },
];

const myCards = [
  {
    id: 1,
    name: 'Master Card',
    icon: require('../themes/icons/mastercard.png'),
    card_no: '1234',
  },
  {
    id: 2,
    name: 'Google Pay',
    icon: require('../themes/icons/google.png'),
    card_no: '1234',
  },
];

const allCards = [
  {
    id: 3,
    name: 'Apple Pay',
    icon: require('../themes/icons/apple.png'),
    card_no: '1234',
  },
  {
    id: 4,
    name: 'Visa',
    icon: require('../themes/icons/visa.png'),
    card_no: '1234',
  },
  {
    id: 5,
    name: 'PayPal',
    icon: require('../themes/icons/paypal.png'),
    card_no: '1234',
  },
  {
    id: 6,
    name: 'Google Pay',
    icon: require('../themes/icons/google.png'),
    card_no: '1234',
  },
  {
    id: 7,
    name: 'Master Card',
    icon: require('../themes/icons/mastercard.png'),
    card_no: '1234',
  },
];

const Notification_Tab = [
  {
    title: 'Today',
    data: [
      {
        icon: Icons.dominos,
        name: "Domino's - Buy 1 get 1 free",
        description: 'Buy 1 get 1 free for small sizes',
        untilText: 'until Nov 30, 2021',
        time: 'a few seconds ago',
      },
      {
        icon: Images.veg_biryani,
        name: 'Veg Biryani - 35% sale today',
        description: 'Buy 1 get 1 free for small sizes',
        untilText: 'until Nov 30, 2021',
        time: '5 mins ago',
      },
    ],
  },
  {
    title: 'Yesterday',
    data: [
      {
        icon: Icons.dominos,
        name: "Domino's - Buy 1 get 1 free",
        description: 'Buy 1 get 1 free for small sizes',
        untilText: 'until Nov 30, 2021',
        time: '1 day ago',
      },
      {
        icon: Images.veg_biryani,
        name: 'Veg Biryani - 35% sale today',
        description: 'Buy 1 get 1 free for small sizes',
        untilText: 'until Nov 30, 2021',
        time: '1 day ago',
      },
    ],
  },
];

const drawer = [
  {
    name: 'Home',
    navigation: 'Home',
    icon: Icons.home,
  },
  {
    name: 'My Order',
    navigation: 'MyOrders',
    icon: Icons.orders,
  },
  {
    name: 'My Wallet',
    navigation: '',
    icon: Icons.wallet,
  },
  {
    name: 'Notification',
    navigation: 'Notification',
    icon: Icons.notification,
  },
  {
    name: 'Favourite',
    navigation: '',
    icon: Icons.favourite,
  },
  {
    name: 'Track Your Order',
    navigation: 'Delivery',
    icon: Icons.location,
  },
  {
    name: 'Coupons',
    navigation: 'Coupon',
    icon: Icons.coupon,
  },
  {
    name: 'Settings',
    navigation: 'Settings',
    icon: Icons.setting,
  },
  {
    name: 'Invite a Friend',
    navigation: '',
    icon: Icons.profile,
  },
  {
    name: 'Help Center',
    navigation: '',
    icon: Icons.help,
  },
  {
    name: 'Logout',
    navigation: '',
    icon: Icons.logout,
  },
];

const Notification = [
  {
    icon: Icons.notification,
    name: 'Notifications',
    description: 'You will receive daily updates',
  },
  {
    icon: Icons.notification,
    name: 'Promotional Notifications',
    description: 'You will receive daily updates',
  },
];

const available_coupon = [
  {
    name: 'Burgur King',
    discount: '20%',
    valid: 'Valid until 01 Jan 2022',
    icon: Icons.burgur_king,
  },
  {
    name: 'KFC',
    discount: '10%',
    valid: 'Valid until 01 Jan 2022',
    icon: Icons.kfc,
  },
  {
    name: 'Pizza Hut',
    discount: '35%',
    valid: 'Valid until 01 Feb 2022',
    icon: Icons.pizza_hut,
  },
  {
    name: 'Starbucks',
    discount: '15%',
    valid: 'Valid until 01 Feb 2022',
    icon: Icons.starbucks,
  },
  {
    name: 'Domino’s Pizza',
    discount: '30%',
    valid: 'Valid until 01 Feb 2022',
    icon: Icons.dominos,
  },
];

const used_coupon = [
  {
    name: 'Burgur King',
    discount: '20%',
    valid: 'Valid until 01 Jan 2022',
    icon: Icons.burgur_king,
  },
  {
    name: 'Starbucks',
    discount: '15%',
    valid: 'Valid until 01 Feb 2022',
    icon: Icons.starbucks,
  },
];

const settings = [
  {
    id: 1,
    name: 'Change Password',
    navigate: 'ChangePassword',
    icon: Icons.lock,
  },
  {
    id: 2,
    name: 'Preferences',
    navigate: '',
    icon: Icons.filter,
  },
  {
    id: 3,
    name: 'Notifications',
    navigate: 'Notification',
    icon: Icons.notification,
  },
  {
    id: 4,
    name: 'Data use',
    navigate: '',
    icon: Icons.data_use,
  },
  {
    id: 5,
    name: 'Language',
    navigate: '',
    icon: Icons.globe,
  },
  {
    id: 6,
    name: 'Check Update',
    navigate: '',
    icon: Icons.check_update,
  },
  {
    id: 7,
    name: 'Contact Us',
    navigate: '',
    icon: Icons.call,
  },
  {
    id: 8,
    name: 'Privacy Policy',
    navigate: '',
    icon: Icons.privacy,
  },
  {
    id: 9,
    name: 'Terms & Conditions',
    navigate: '',
    icon: Icons.terms,
  },
  {
    id: 10,
    name: 'Logout',
    navigate: '',
    icon: Icons.logout,
  },
];

const My_Order_History = [
  {
    title: '19 Sep 2021',
    data: [
      {
        icon: Icons.pizza_hut,
        name: 'Pizza Hut',
        date_time: '19 Sep, 14:30',
        items: '3 Items',
        order_delivered: true,
        price: '$35.30',
      },
      {
        icon: Icons.kfc,
        name: 'KFC',
        date_time: '19 Sep, 12:30',
        items: '4 Items',
        order_delivered: true,
        price: '$55.00',
      },
      {
        icon: Icons.dominos,
        name: 'Domino’s Pizza',
        date_time: '19 Sep, 10:30',
        items: '1 Items',
        order_delivered: false,
        price: '$15.50',
      },
    ],
  },
  {
    title: '15 Sept 2021',
    data: [
      {
        icon: Icons.starbucks,
        name: 'Starbucks',
        date_time: '15 Sep, 10:00',
        items: '4 Items',
        order_delivered: true,
        price: '$40.00',
      },
      {
        icon: Icons.burgur_king,
        name: 'Burking King',
        date_time: '19 Sep, 14:30',
        items: '3 Items',
        order_delivered: true,
        price: '$55.00',
      },
      {
        icon: Icons.McDonald,
        name: 'McDonald',
        date_time: '19 Sep, 12:30',
        items: '1 Items',
        order_delivered: false,
        price: '$15.50',
      },
    ],
  },
];

const My_Order_Upcoming = [
  {
    title: '',
    data: [
      {
        icon: Icons.starbucks,
        name: 'Starbucks',
        date_time: '27 Sep, 10:00',
        items: '4 Items',
        order_delivered: true,
        price: '#88888',
      },
      {
        icon: Icons.McDonald,
        name: 'McDonald',
        date_time: '27 Sep, 10:00',
        items: '4 Items',
        order_delivered: false,
        price: '#98888',
      },
    ],
  },
  {
    title: 'Latest Orders',
    data: [
      {
        icon: Icons.starbucks,
        name: 'Starbucks',
        date_time: '27 Sep, 10:00',
        items: '4 Items',
        order_delivered: true,
        price: '$10.00',
      },
      {
        icon: Icons.burgur_king,
        name: 'Burking King',
        date_time: '27 Sep, 8:00',
        items: '4 Items',
        order_delivered: true,
        price: '$12.00',
      },
    ],
  },
];

const RiderReview = {
  tips: ['No Tips', '$5', '$10', '$15', '$20'],
};

const My_Account = [
  {
    'Full Name': 'Alex!',
  },
  {
    'Phone Number': '8923735637',
  },
  {
    'User ID': 'ST/SD/21/820',
  },
];

const My_Account_Details = [
  {
    'ID Card': 'Not updated',
  },
  {
    'Date of Birth': '26/02/1999',
  },
  {
    Gender: 'Male',
  },
  {
    Joined: 'October 2021',
  },
  {
    Email: 'alex123@gmail.com',
  },
  {
    Address: 'E-29, Budh Vihar, Noida',
  },
];

export default {
  vegBiryani,
  hamburger,
  myProfile,
  categories,
  menu,
  sizes,
  myCart,
  myCards,
  allCards,
  Notification_Tab,
  drawer,
  Notification,
  available_coupon,
  used_coupon,
  settings,
  My_Order_History,
  My_Order_Upcoming,
  RiderReview,
  My_Account,
  My_Account_Details,
};
