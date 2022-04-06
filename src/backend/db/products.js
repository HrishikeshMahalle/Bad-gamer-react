import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    id: uuid(),
    title: "One Handed Keyboard",
    imageSrc:"https://rukminim2.flixcart.com/image/612/612/klmmrgw0/keyboard/gaming-keyboard/c/y/l/bloodbat-one-handed-gaming-keyboard-rgb-backlit-35-keys-portable-original-imagyp9aevryngzh.jpeg?q=70",
    price: "1941",
    rating:4,
    categoryName: "keyboard",
    subCategroy:["keyboard","accessory"]
  },
  {
    id: uuid(),
    title: "EvoFox Gaming Keyboard",
    imageSrc:"https://rukminim2.flixcart.com/image/612/612/kao98cw0/keyboard/gaming-keyboard/y/v/w/amkette-evofox-fireblade-led-backlit-original-imafs67tgdkyx2td.jpeg?q=70",
    price: "1029",
    rating:3,
    categoryName: "keyboard",
    subCategroy:["keyboard","accessory"]
  },
  {
    id: uuid(),
    title: "Logitech Mouse",
    imageSrc:"https://rukminim2.flixcart.com/image/612/612/kp1imq80/mouse/6/9/j/g102-light-sync-logitech-original-imag3d4rzzzyrfxd.jpeg?q=70",
    price: "1499",
    rating:4,
    categoryName: "mouse",
    subCategroy:["accessory","mouse"]
  },
  {
    id: uuid(),
    title: "Razer Death Adder",
    imageSrc:"https://rukminim2.flixcart.com/image/612/612/jz8qf0w0/mouse/e/v/k/razer-deathadder-essential-right-handed-gaming-mouse-rz01-original-imafjafgj4tue2nr.jpeg?q=70",
    price: "1899",
    rating:5,
    categoryName: "mouse",
    subCategroy:["mouse","accessory"]
  },
  {
    id: uuid(),
    title: " Logitech Mouse",
    imageSrc:"https://rukminim2.flixcart.com/image/612/612/kkwwu4w0/mouse/2/h/g/g402-logitech-original-imagy5ny25h8nsms.jpeg?q=70",
    price: "2499",
    rating:4,
    categoryName: "mouse",
    subCategroy:["mouse","accessory"]
  },
  {
    id: uuid(),
    title: "MSI 27 inch",
    imageSrc:"https://rukminim2.flixcart.com/image/312/312/ktlu9ow0/monitor/r/u/i/optix-g271-full-hd-optix-g271-msi-original-imag6wthhsuznfp6.jpeg?q=70",
    price: "16999",
    rating:2,
    categoryName: "monitor",
    subCategroy:["monitor","accessory"]
  },
  {
    id: uuid(),
    title: "LG 24inch ",
    imageSrc:"https://rukminim2.flixcart.com/image/312/312/kw2fki80/monitor/a/b/u/24mp60g-full-hd-24-24mp60g-b-atr-lg-original-imag8tzdagkdz2pm.jpeg?q=70",
    price: "13999",
    rating:4,
    categoryName: "monitor",
    subCategroy:["monitor","accessory"]
  },
  {
    id: uuid(),
    title: "MotherBoard ASUS Intel",
    imageSrc:"https://rukminim2.flixcart.com/image/612/612/kovsvbk0/motherboard/8/o/t/tuf-gaming-b560m-plus-asus-original-imag38xg4gqzh22a.jpeg?q=70",
    price: "14985",
    rating:5,
    categoryName: "motherboard",
    subCategroy:["motherboard","accessory"]
  },
  {
    id: uuid(),
    title: "B550 ASUS Ryzen",
    imageSrc:"https://rukminim2.flixcart.com/image/612/612/klphn680/motherboard/8/w/1/tuf-gaming-b550-plus-asus-original-imagyrzjaqzhd9mw.jpeg?q=70",
    price: "5000",
    rating:3,
    categoryName: "motherboard",
    subCategroy:["motherboard","accessory"]
  },
  {
    id: uuid(),
    title: "Ryzen ThreadRipper",
    imageSrc:"https://rukminim2.flixcart.com/image/612/612/k4a7c7k0/processor/w/f/w/amd-ryzen-threadripper-1900x-original-imaf9varmywbwegk.jpeg?q=70",
    price: "66000",
    rating:3,
    categoryName: "cpu",
    subCategroy:["cpu","accessory"]
  },
  {
    id: uuid(),
    title: "GTA V",
    imageSrc: "https://rukminim2.flixcart.com/image/612/612/jd69le80/code-in-the-box-game/d/r/g/pc-grand-theft-auto-v-rockstar-standard-edition-original-imaf249fytvkz9hm.jpeg?q=70",
    price: "2899",
    rating:3,
    categoryName: "games",
    subCategroy:["action","rpg","pc"]
  },
  {
    id: uuid(),
    title: "Last of us",
    imageSrc: "https://rukminim2.flixcart.com/image/612/612/kb2jmvk0/physical-game/h/w/j/standard-edition-the-last-of-us-part-ii-full-game-ps4-original-imafshumrqn3kzbh.jpeg?q=70",
    price: "1299",
    rating:4,
    categoryName: "games",
    subCategroy:["action","rpg","ps"]
  },
  {
    id: uuid(),
    title: "Spiderman- Miles Moralis",
    imageSrc: "https://rukminim2.flixcart.com/image/612/612/k0mqtu80/physical-game/n/9/z/game-of-the-year-marvel-s-spider-man-full-game-dlc-ps4-original-imafke2fjgvfazgd.jpeg?q=70",
    price: "4999",
    rating:4,
    categoryName: "games",
    subCategroy:["action","rpg","ps"]
  },
  {
    id: uuid(),
    title: "Last of Us Remastered",
    imageSrc: "https://rukminim2.flixcart.com/image/612/612/av-media/games/f/f/m/the-last-of-us-remastered-original-imady9fcv5xe4kbf.jpeg?q=70",
    price: "2899",
    rating:3,
    categoryName: "games",
    subCategroy:["action","rpg","ps"]
  },
  {
    id: uuid(),
    title: "Far cry 6",
    imageSrc: "https://rukminim2.flixcart.com/image/612/612/kzsqykw0/physical-game/2/o/x/no-free-ps5-upgrade-far-cry-6-full-game-ps4-original-imagbpn8gjcxfreq.jpeg?q=70",
    price: "2899",
    rating:3,
    categoryName: "games",
    subCategroy:["action","rpg","ps"]
  },
  {
    id: uuid(),
    title: "God of War Ragnarok",
    imageSrc: "https://rukminim2.flixcart.com/image/612/612/kw5ag7k0/physical-game/t/k/m/-original-imag8w4bg6mfssuh.jpeg?q=70",
    price: "5899",
    rating:5,
    categoryName: "games",
    subCategroy:["action","rpg","ps"]
  },
  {
    id: uuid(),
    title: "Days Gone",
    imageSrc: "https://rukminim2.flixcart.com/image/612/612/klphn680/physical-game/w/c/h/standard-edition-days-gone-full-game-ps4-original-imagyrvzk4byku6q.jpeg?q=70",
    price: "1299",
    rating:3,
    categoryName: "games",
    subCategroy:["action","rpg","ps"]
  },
  {
    id: uuid(),
    title: "Avengers Remastered",
    imageSrc: "https://rukminim2.flixcart.com/image/612/612/kq6yefk0/physical-game/j/4/0/playstation-5-marvel-s-avengers-full-game-ps5-original-imag48r2knrmtt7p.jpeg?q=70",
    price: "2299",
    rating:4,
    categoryName: "games",
    subCategroy:["action","rpg","ps"]
  },
  {
    id: uuid(),
    title: "Cricket 22",
    imageSrc: "https://rukminim2.flixcart.com/image/612/612/kulk9zk0/physical-game/n/y/b/no-international-edition-ps5-cricket-22-international-edition-original-imag7zngwuz8m3j5.jpeg?q=70",
    price: "2899",
    rating:3,
    categoryName: "games",
    subCategroy:["action","sports","ps"]
  },
  {
    id: uuid(),
    title: "WWE 2k22",
    imageSrc: "https://rukminim2.flixcart.com/image/612/612/kz1lle80/physical-game/7/t/c/no-standard-edition-wwe-2k22-full-game-xbox-series-x-s-original-imagb59ruzkr6f7g.jpeg?q=70",
    price: "3999",
    rating:4,
    categoryName: "games",
    subCategroy:["action","sports","xbox"]
  },
  {
    id: uuid(),
    title: "F1 2021",
    imageSrc: "https://rukminim2.flixcart.com/image/416/416/kvfkivk0/physical-game/e/j/b/no-standard-f1-2021-ps4-full-game-playstation-4-original-imag8c2jgrqna5us.jpeg?q=70",
    price: "2999",
    rating:5,
    categoryName: "games",
    subCategroy:["action","sports","ps"]
  },
  {
    id: uuid(),
    title: "Side-Panel|Joggers",
    imageSrc: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/2/19/b76219d5-8a8f-4c99-8b4e-ccb1cc671b101613709838629-1.jpg",
    price: "1999",
    rating:4,
    categoryName: "regular",
    subCatergory:["Regular","Causal","H&M"]
  },
  {
    id: uuid(),
    title: "Black Tshirt",
    imageSrc: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/2/6/cbbbea51-cfe3-44db-89e4-15e8aea2ffd91580948578414-1.jpg",
    price: "1499",
    rating:4,
    categoryName: "causal",
    subCatergory:["Regular","Causal","H&M"]
  },
  {
    id: uuid(),
    title: "White Trainers",
    imageSrc: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/8/12/0001d58a-bf54-4036-bb29-6f7d5644d76f1565590293978-1.jpg",
    price: "1999",
    rating:4,
    categoryName: "footwear",
    subCatergory:["white","footwear","H&M"]
  },
  {
    id: uuid(),
    title: "UnAffordable",
    imageSrc: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16217292/2021/11/25/84d035d9-4eb3-4174-a027-94e70aab31d21637784910545HMMenRedWhiteCheckedWool-BlendShirt1.jpg",
    price: "7999",
    rating:2,
    categoryName: "party",
    subCatergory:["hoddie","Party","H&M"]
  },
  {
    id: uuid(),
    title: "Pink Tshirt",
    imageSrc: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/7488102/2019/8/22/8002a744-0dad-4dbb-9481-cf0090134c3b1566454086786-Dennis-Lingo-Men-Pink-Slim-Fit-Solid-Casual-Shirt-9891566454-1.jpg",
    price: "684",
    rating:2,
    categoryName: "regular",
    subCatergory:["Regular","Office","WROGN"]
  },
  {
    id: uuid(),
    title: "SweatShirt",
    imageSrc: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2175492/2017/12/12/11513054873776-Kook-N-Keech-Men-Black-Printed-Sweatshirt-51513054873532-1.jpg",
    price: "1999",
    rating:4,
    categoryName: "party",
    subCatergory:["Regular","sweatshirt","koochi"]
  },
  {
    id: uuid(),
    title: "Blue Tshirt",
    imageSrc: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1364628/2016/8/31/11472636737718-Roadster-Men-Blue-Regular-Fit-Printed-Casual-Shirt-6121472636737160-1.jpg",
    price: "999",
    rating:5,
    categoryName: "causal",
    subCatergory:["Regular","Causal","Roadster"]
  },
  {
    id: uuid(),
    title: "Jogger",
    imageSrc: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/7695831/2019/3/4/25bb5504-c73e-4672-a37c-6078fb495c3b1551679217431-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Solid-RAPID-DRY-Training-1.jpg",
    price: "1399",
    rating:4,
    categoryName: "sports",
    subCatergory:["Regular","Sports","HRX"]
  },
  {
    id: uuid(),
    title: "Short Jacket",
    imageSrc: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14861574/2021/8/11/08bc81fd-f4ad-40de-ba2d-895a1af473ec1628685046538-Puma-Men-Jackets-4981628685045957-6.jpg",
    price: "1999",
    rating:4,
    categoryName: "party",
    subCatergory:["Regular","Causal","Puma"]
  },
  {
    id: uuid(),
    title: "Workout Wear",
    imageSrc: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/2/19/b76219d5-8a8f-4c99-8b4e-ccb1cc671b101613709838629-1.jpg",
    price: "3999",
    rating:5,
    categoryName: "sports",
    subCatergory:["Regular","Sports","Rigo"]
  },
  {
    id: uuid(),
    title: "Fancy Tshirt",
    imageSrc: "https://assets.myntassets.com/f_webp,dpr_1.5,q_40,w_210,c_limit,fl_progressive/assets/images/2378362/2018/6/9/33523035-65f5-4fcb-b7a5-4062e656d10b1528527188511-Moda-Rapido-Men-Maroon-Printed-Round-Neck-T-shirt-3811528527-3.jpg",
    price: "1999",
    rating:4,
    categoryName: "party",
    subCatergory:["Party","Causal","RoadSter"]
  },
];
