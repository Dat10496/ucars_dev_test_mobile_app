import audi from "../images/logo/audi.png";
import toyota from "../images/logo/toyota.png";
import bmw from "../images/logo/bmw.png";
import mercerdes from "../images/logo/mercerdes.png";
import huyndai from "../images/logo/huyndai.png";
import mazda from "../images/logo/mazda.png";
import nissan from "../images/logo/nissan.png";
import kia from "../images/logo/kia.png";
import honda from "../images/logo/honda.png";
import more from "../images/logo/more.png";
import ford from "../images/logo/ford.png";

import coupe from "../images/car_type/coupe.png";
import sedan from "../images/car_type/sedan.png";
import suv from "../images/car_type/suv.png";
import mpv from "../images/car_type/mpv1.png";
import hatchback from "../images/car_type/hatchback.png";
import sport from "../images/car_type/sport.png";
import commercial from "../images/car_type/comercial.png";
import classic from "../images/car_type/classic.png";

import usedcar1 from "../images/used_car/1.jpg";
import usedcar2 from "../images/used_car/2.png";
import usedcar3 from "../images/used_car/3.png";
import usedcar4 from "../images/used_car/4.png";
import usedcar5 from "../images/used_car/5.png";

import newcar1 from "../images/new_car/1.png";
import newcar2 from "../images/new_car/2.png";
import newcar3 from "../images/new_car/3.png";
import newcar4 from "../images/new_car/4.png";
import newcar5 from "../images/new_car/5.png";

import latestnew1 from "../images/latest_news/1.png";
import latestnew2 from "../images/latest_news/2.png";
import latestnew3 from "../images/latest_news/3.png";
import latestnew4 from "../images/latest_news/4.png";
import latestnew5 from "../images/latest_news/5.png";

export const POPULAR_BRANDS = [
  { logo: toyota, brand: "Toyota" },
  { logo: bmw, brand: "BMW" },
  { logo: mercerdes, brand: "Mercedes" },
  { logo: huyndai, brand: "Huyndai" },
  { logo: mazda, brand: "Mazda" },
  { logo: audi, brand: "Audi" },
  { logo: nissan, brand: "Nissan" },
  { logo: kia, brand: "Kia" },
  { logo: honda, brand: "Honda" },
  { logo: more, brand: "More" },
];

export const CAR_TYPES = [
  { logo: coupe, type: "Coupe" },
  { logo: sedan, type: "Sedan" },
  { logo: suv, type: "SUV" },
  { logo: mpv, type: "MPV" },
  { logo: hatchback, type: "Hatchback" },
  { logo: sport, type: "Sport" },
  { logo: commercial, type: "Commercial" },
  { logo: classic, type: "Classic" },
];

export const USED_CARD = [
  {
    image: usedcar1,
    brand: "Mazda 3 Sedan 1.5 SP (A)",
    price: "$83,800",
    date: "05/10/11",
    odo: "8,000 km",
    cost: "$7,000 depr.",
  },
  {
    image: usedcar2,
    brand: "BMW 5 Series Sedan 520i (A)",
    price: "$96,800",
    date: "05/10/11",
    odo: "8,000 km",
    cost: "$7,000 depr.",
  },
  {
    image: usedcar3,
    brand: "Honda CR-V 1.5 Turbo 7-Seater (A)",
    price: "$139,000",
    date: "05/10/11",
    odo: "8,000 km",
    cost: "$7,000 depr.",
  },
  {
    image: usedcar4,
    brand: "Subaru Forester 2.0 XT (A)",
    price: "$65,800",
    date: "05/10/11",
    odo: "8,000 km",
    cost: "$7,000 depr.",
  },
  {
    image: usedcar5,
    brand: "Honda Shuttle 1.5 [2017] (A)",
    price: "$67,800",
    date: "05/10/11",
    odo: "8,000 km",
    cost: "$7,000 depr.",
  },
];

export const NEW_CARS = [
  {
    image: newcar1,
    brand: "Land Rover Range Rover Mild Hybrid",
    price: "$578,999",
  },
  { image: newcar2, brand: "Lamborghini Huracan", price: "$250,800" },
  { image: newcar3, brand: "Tesla Model Y SUV", price: "$142,271" },
  { image: newcar4, brand: "BMW 2 Series Coupé", price: "$264,888" },
  {
    image: newcar5,
    brand: "Mercedes Benz E-Class E229d...",
    price: "$250,800",
  },
];

export const LATEST_NEW = [
  {
    id: 1,
    image: latestnew1,
    description:
      "Volkswagen previews all-new electric sedan with plans for a 2023 launch",
    author: "Lionel Kong",
    time: "30m ago",
  },
  {
    id: 2,
    image: latestnew2,
    description: `Hyundai announces Ioniq 6 'streamliner' sedan to rival Model 3
    `,
    author: "Derryn Wong",
    time: "30m ago",
  },
  {
    id: 3,
    image: latestnew3,
    description: "Top 5 Cheapest Cars In Singapore Under $10,000",
    author: "UCARS Team",
    time: "30m ago",
  },
  {
    id: 4,
    image: latestnew4,
    description: "We Rate The Best Car Cameras For Drivers",
    author: "UCARS Team",
    time: "30m ago",
  },
  {
    id: 5,
    image: latestnew5,
    description: "Singapore Budget 2021: What Do Drivers Need to Know",
    author: "Lionel Kong",
    time: "30m ago",
  },
];

export const BRAND_LIST = [
  { logo: audi, brand: "Audi", model: "1200 models" },
  { logo: bmw, brand: "BMW", model: "1200 models" },
  { logo: ford, brand: "Ford", model: "1200 models" },
  { logo: honda, brand: "Honda", model: "1200 models" },
  { logo: huyndai, brand: "Huyndai", model: "1200 models" },
  { logo: kia, brand: "Kia", model: "1200 models" },
  { logo: mazda, brand: "Mazda", model: "1200 models" },
  { logo: nissan, brand: "Nissan", model: "1200 models" },
];
