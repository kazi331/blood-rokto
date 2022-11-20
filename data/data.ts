import { DonerType } from '../DataTypes';
import avatar from '../public/avatars/avatar-female.png';

const start: number = 1950;
const end: number = 2023;
const length = end - start + 1;
export const years = Array(length).fill(start).map((x, y) => x + y);
export const days = Array.from({ length: 31 }, (x, i) => i + 1);

export const bloodGroups: { value: string, name: string }[] = [
  { value: 'O+', name: 'O Positive (O+)' },
  { value: 'O-', name: 'O Negative (O-)' },
  { value: 'A+', name: 'A Positive (A+)' },
  { value: 'A-', name: 'A Negative (A-)' },
  { value: 'B+', name: 'B Positive (B+)' },
  { value: 'B-', name: 'B Negative (B-)' },
  { value: 'AB+', name: 'AB Positive  (AB+)' },
  { value: 'AB-', name: 'AB Negative  (AB-)', },
]
export const months: { value: string, name: string }[] = [
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


export const doners: DonerType[] = [
  {
    "id": 1,
    "first_name": "Janina",
    "last_name": "Usherwood",
    "phone": "282-677-1702",
    "is_available": false,
    "is_admin": false,
    "blood": "A+",
    "district": "Lalmonirhat",
    "avatar": "https://robohash.org/sintrationeperferendis.png?size=50x50&set=set1",
    "joined": "03/27/2021",
    "last_donate": "01/01/2021"
  }, {
    "id": 2,
    "first_name": "Beatrisa",
    "last_name": "Gasticke",
    "phone": "345-433-0985",
    "is_available": false,
    "is_admin": false,
    "blood": "O-",
    "district": "Kishoreganj",
    "avatar": "https://robohash.org/saepecorporisadipisci.png?size=50x50&set=set1",
    "joined": "09/20/2022",
    "last_donate": "02/28/2021"
  }, {
    "id": 3,
    "first_name": "Howey",
    "last_name": "Pavek",
    "phone": "439-601-3018",
    "is_available": true,
    "is_admin": false,
    "blood": "B-",
    "district": "Joypurhat",
    "avatar": "https://robohash.org/etfaciliscommodi.png?size=50x50&set=set1",
    "joined": "11/22/2021",
    "last_donate": "01/14/2022"
  }, {
    "id": 4,
    "first_name": "Fred",
    "last_name": "Felce",
    "phone": "445-777-6945",
    "is_available": true,
    "is_admin": false,
    "blood": "Ab+",
    "district": "Nilphamari",
    "avatar": "https://robohash.org/corporisquiipsum.png?size=50x50&set=set1",
    "joined": "11/29/2021",
    "last_donate": "06/30/2021"
  }, {
    "id": 5,
    "first_name": "Ari",
    "last_name": "Clem",
    "phone": "930-229-3667",
    "is_available": false,
    "is_admin": false,
    "blood": "A+",
    "district": "Rangpur",
    "avatar": "https://robohash.org/ipsumrepudiandaeest.png?size=50x50&set=set1",
    "joined": "09/10/2022",
    "last_donate": "10/10/2021"
  }, {
    "id": 6,
    "first_name": "Zenia",
    "last_name": "Waison",
    "phone": "723-407-7065",
    "is_available": false,
    "is_admin": false,
    "blood": "B+",
    "district": "Gopalganj",
    "avatar": "https://robohash.org/voluptatemquolaboriosam.png?size=50x50&set=set1",
    "joined": "12/30/2021",
    "last_donate": "09/02/2022"
  }, {
    "id": 7,
    "first_name": "Sonya",
    "last_name": "Drewett",
    "phone": "640-466-7889",
    "is_available": true,
    "is_admin": false,
    "blood": "A+",
    "district": "Gaibandha",
    "avatar": "https://robohash.org/velsintquo.png?size=50x50&set=set1",
    "joined": "06/10/2022",
    "last_donate": "05/18/2022"
  }, {
    "id": 8,
    "first_name": "Susan",
    "last_name": "Squires",
    "phone": "558-987-8974",
    "is_available": false,
    "is_admin": false,
    "blood": "A+",
    "district": "Gazipur",
    "avatar": "https://robohash.org/reprehenderitconsecteturalias.png?size=50x50&set=set1",
    "joined": "01/20/2022",
    "last_donate": "10/21/2022"
  }, {
    "id": 9,
    "first_name": "Jorry",
    "last_name": "Dunkerly",
    "phone": "485-839-6047",
    "is_available": true,
    "is_admin": false,
    "blood": "Ab+",
    "district": "Gopalganj",
    "avatar": "https://robohash.org/earumfugiatcupiditate.png?size=50x50&set=set1",
    "joined": "04/17/2022",
    "last_donate": "02/11/2022"
  }, {
    "id": 10,
    "first_name": "Sergio",
    "last_name": "Sinderland",
    "phone": "211-374-6262",
    "is_available": false,
    "is_admin": false,
    "blood": "O+",
    "district": "Nilphamari",
    "avatar": "https://robohash.org/temporaautaccusamus.png?size=50x50&set=set1",
    "joined": "07/01/2021",
    "last_donate": "09/20/2022"
  }, {
    "id": 11,
    "first_name": "Stephi",
    "last_name": "Assur",
    "phone": "224-386-2470",
    "is_available": false,
    "is_admin": false,
    "blood": "A+",
    "district": "Natore",
    "avatar": "https://robohash.org/nobisnihilqui.png?size=50x50&set=set1",
    "joined": "07/12/2021",
    "last_donate": "04/27/2021"
  }, {
    "id": 12,
    "first_name": "Linet",
    "last_name": "Aherne",
    "phone": "310-158-7489",
    "is_available": true,
    "is_admin": false,
    "blood": "O-",
    "district": "Gopalganj",
    "avatar": "https://robohash.org/repudiandaeuthic.png?size=50x50&set=set1",
    "joined": "07/29/2021",
    "last_donate": "02/20/2021"
  }, {
    "id": 13,
    "first_name": "Ford",
    "last_name": "Witherington",
    "phone": "378-225-3604",
    "is_available": true,
    "is_admin": false,
    "blood": "B-",
    "district": "Sirajgonj",
    "avatar": "https://robohash.org/oditquasincidunt.png?size=50x50&set=set1",
    "joined": "10/11/2022",
    "last_donate": "07/11/2021"
  }, {
    "id": 14,
    "first_name": "Bancroft",
    "last_name": "Gaudin",
    "phone": "988-532-8693",
    "is_available": true,
    "is_admin": false,
    "blood": "A+",
    "district": "Munshiganj",
    "avatar": "https://robohash.org/delenitiasperioreseligendi.png?size=50x50&set=set1",
    "joined": "03/13/2021",
    "last_donate": "01/31/2022"
  }, {
    "id": 15,
    "first_name": "Langston",
    "last_name": "Koenraad",
    "phone": "977-138-2218",
    "is_available": true,
    "is_admin": false,
    "blood": "Ab+",
    "district": "Sherpur",
    "avatar": "https://robohash.org/voluptatibusetvoluptatem.png?size=50x50&set=set1",
    "joined": "06/20/2021",
    "last_donate": "05/22/2021"
  }, {
    "id": 16,
    "first_name": "Freida",
    "last_name": "Fawson",
    "phone": "327-119-5607",
    "is_available": true,
    "is_admin": false,
    "blood": "B+",
    "district": "Madaripur",
    "avatar": "https://robohash.org/nihiloptiocorrupti.png?size=50x50&set=set1",
    "joined": "01/25/2022",
    "last_donate": "04/30/2022"
  }, {
    "id": 17,
    "first_name": "Ursulina",
    "last_name": "Forrington",
    "phone": "826-658-3534",
    "is_available": false,
    "is_admin": false,
    "blood": "B+",
    "district": "Nilphamari",
    "avatar": "https://robohash.org/placeatundeullam.png?size=50x50&set=set1",
    "joined": "03/17/2022",
    "last_donate": "01/05/2022"
  }, {
    "id": 18,
    "first_name": "Francis",
    "last_name": "Manilo",
    "phone": "291-450-6260",
    "is_available": true,
    "is_admin": false,
    "blood": "A+",
    "district": "Dhaka",
    "avatar": "https://robohash.org/etoccaecatiest.png?size=50x50&set=set1",
    "joined": "08/30/2022",
    "last_donate": "01/23/2021"
  }, {
    "id": 19,
    "first_name": "Nadean",
    "last_name": "McVity",
    "phone": "742-709-2507",
    "is_available": false,
    "is_admin": false,
    "blood": "O-",
    "district": "Narsingdi",
    "avatar": "https://robohash.org/sedcorruptieveniet.png?size=50x50&set=set1",
    "joined": "04/17/2022",
    "last_donate": "11/09/2021"
  }, {
    "id": 20,
    "first_name": "Jaymie",
    "last_name": "Baumber",
    "phone": "506-421-6820",
    "is_available": true,
    "is_admin": false,
    "blood": "O+",
    "district": "Shariatpur",
    "avatar": "https://robohash.org/sintquodnihil.png?size=50x50&set=set1",
    "joined": "08/10/2021",
    "last_donate": "09/25/2021"
  }, {
    "id": 21,
    "first_name": "Carie",
    "last_name": "Mathieu",
    "phone": "999-917-3717",
    "is_available": true,
    "is_admin": false,
    "blood": "B-",
    "district": "Mymensingh",
    "avatar": "https://robohash.org/sitdoloresesse.png?size=50x50&set=set1",
    "joined": "04/10/2022",
    "last_donate": "12/04/2021"
  }, {
    "id": 22,
    "first_name": "Gabby",
    "last_name": "Meaton",
    "phone": "780-948-5395",
    "is_available": true,
    "is_admin": false,
    "blood": "A+",
    "district": "Gazipur",
    "avatar": "https://robohash.org/consequaturinventorerecusandae.png?size=50x50&set=set1",
    "joined": "03/21/2021",
    "last_donate": "10/15/2021"
  }, {
    "id": 23,
    "first_name": "Halley",
    "last_name": "Wingrove",
    "phone": "323-196-2558",
    "is_available": true,
    "is_admin": false,
    "blood": "Ab+",
    "district": "Nilphamari",
    "avatar": "https://robohash.org/oditsuntarchitecto.png?size=50x50&set=set1",
    "joined": "09/06/2022",
    "last_donate": "01/30/2021"
  }, {
    "id": 24,
    "first_name": "Nanci",
    "last_name": "Hardaker",
    "phone": "215-537-5404",
    "is_available": false,
    "is_admin": false,
    "blood": "A+",
    "district": "Sirajgonj",
    "avatar": "https://robohash.org/sitadipisciut.png?size=50x50&set=set1",
    "joined": "06/25/2021",
    "last_donate": "05/28/2022"
  }, {
    "id": 25,
    "first_name": "Mile",
    "last_name": "Yukhnin",
    "phone": "671-956-9838",
    "is_available": false,
    "is_admin": false,
    "blood": "A+",
    "district": "Shariatpur",
    "avatar": "https://robohash.org/etipsumperferendis.png?size=50x50&set=set1",
    "joined": "05/02/2021",
    "last_donate": "07/29/2022"
  }, {
    "id": 26,
    "first_name": "Aldus",
    "last_name": "Ivanov",
    "phone": "596-943-7544",
    "is_available": false,
    "is_admin": false,
    "blood": "O-",
    "district": "Tangail",
    "avatar": "https://robohash.org/etvoluptatemminima.png?size=50x50&set=set1",
    "joined": "10/08/2021",
    "last_donate": "03/08/2021"
  }, {
    "id": 27,
    "first_name": "Virgilio",
    "last_name": "Wellman",
    "phone": "365-926-0244",
    "is_available": true,
    "is_admin": false,
    "blood": "O+",
    "district": "Bogura",
    "avatar": "https://robohash.org/perspiciatisrepellatlibero.png?size=50x50&set=set1",
    "joined": "11/10/2022",
    "last_donate": "08/22/2021"
  }, {
    "id": 28,
    "first_name": "Berkeley",
    "last_name": "Edkins",
    "phone": "840-400-1301",
    "is_available": true,
    "is_admin": false,
    "blood": "B-",
    "district": "Gaibandha",
    "avatar": "https://robohash.org/iurequiaest.png?size=50x50&set=set1",
    "joined": "01/27/2021",
    "last_donate": "09/16/2021"
  }, {
    "id": 29,
    "first_name": "Sheelagh",
    "last_name": "McCague",
    "phone": "651-248-5247",
    "is_available": true,
    "is_admin": false,
    "blood": "B+",
    "district": "Sherpur",
    "avatar": "https://robohash.org/etrepellatveniam.png?size=50x50&set=set1",
    "joined": "02/07/2021",
    "last_donate": "03/05/2022"
  }, {
    "id": 30,
    "first_name": "Kathie",
    "last_name": "Shortall",
    "phone": "374-207-4700",
    "is_available": false,
    "is_admin": false,
    "blood": "B-",
    "district": "Natore",
    "avatar": "https://robohash.org/magnamnostrumet.png?size=50x50&set=set1",
    "joined": "04/19/2021",
    "last_donate": "10/18/2022"
  }]






