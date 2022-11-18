import avatar from '../public/avatars/avatar-female.png';

const start: number = 1950;
const end: number = 2023;
const length = end - start + 1;
export const years = Array(length).fill(start).map((x, y) => x + y);
export const days = Array.from({ length: 31 }, (x, i) => i + 1);

export const bloodGroups = [
  { value: 'O+', name: 'O Positive (O+)' },
  { value: 'O-', name: 'O Negative (O-)' },
  { value: 'A+', name: 'A Positive (A+)' },
  { value: 'A-', name: 'A Negative (A-)' },
  { value: 'B+', name: 'B Positive (B+)' },
  { value: 'B-', name: 'B Negative (B-)' },
  { value: 'AB+', name: 'AB Positive  (AB+)' },
  { value: 'AB-', name: 'AB Negative  (AB-)', }
]
export const months = [
  { value: "1", name: "January", },
  { value: "2", name: "February", },
  { value: "3", name: "March", },
  { value: "4", name: "April", },
  { value: "5", name: "May", },
  { value: "6", name: "June", },
  { value: "7", name: "July", },
  { value: "8", name: "August", },
  { value: "9", name: "September", },
  { value: "10", name: "October", },
  { value: "11", name: "November", },
  { value: "12", name: "December" },
]


export const doners = [
  {
    id: 1, name: 'Sayem Khan',
    phone: '01612178331',
    is_available: true,
    city: 'cumilla',
    avatar: avatar,
    joined: 'dec 2, 2022',
    is_admin: false,
    last_donate: 'oct 2, 2022',
  },
  {
    id: 2, name: 'Sayem Khan',
    phone: '01612178331',
    is_available: false,
    city: 'cumilla',
    avatar: avatar,
    joined: 'dec 2, 2022',
    is_admin: true,
    last_donate: 'oct 2, 2022',
  },
  {
    id: 3, name: 'Sayem Khan',
    phone: '01612178331',
    is_available: false,
    city: 'cumilla',
    avatar: avatar,
    joined: 'dec 2, 2022',
    is_admin: false,
    last_donate: 'oct 2, 2022',
  },
  {
    id: 4, name: 'Sayem Khan',
    phone: '01612178331',
    is_available: true,
    city: 'cumilla',
    avatar: avatar,
    joined: 'dec 2, 2022',
    is_admin: false,
    last_donate: 'oct 2, 2022',
  },
  {
    id: 5, name: 'Sayem Khan',
    phone: '01612178331',
    is_available: true,
    city: 'cumilla',
    avatar: avatar,
    joined: 'dec 2, 2022',
    is_admin: false,
    last_donate: 'oct 2, 2022',
  },
  {
    id: 6, name: 'Sayem Khan',
    phone: '01612178331',
    is_available: false,
    city: 'cumilla',
    avatar: avatar,
    joined: 'dec 2, 2022',
    is_admin: true,
    last_donate: 'oct 2, 2022',
  },
  {
    id: 7, name: 'Sayem Khan',
    phone: '01612178331',
    is_available: true,
    city: 'cumilla',
    avatar: avatar,
    joined: 'dec 2, 2022',
    is_admin: false,
    last_donate: 'oct 2, 2022',
  },

]




