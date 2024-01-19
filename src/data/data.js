// data.js
import Dosa from "../images/french.jpg";
import Chola from "../images/chhola.jpg";
import Idli from "../images/idli.jpg";
import MasalaDosa from "../images/masala.jpg";
import Paneer from "../images/paneer.jpg";
import Gujrati from "../images/gujarati.jpg";

export const MenuList = [
  {
    id: 1,
    name: "French-fries",
    description:
      "Crispy on the outside, fluffy on the inside, French Fries are golden delights that elevate any meal with their irresistible texture. These deep-fried potato strips are a classic and beloved side dish, perfect for indulging in their salty, savory goodness.", 
    image: Dosa,
    price: 200,
    cardNumber: 1,
    menuId: 1,
    quantity: 0,
  },
  {
    id: 2,
    name: "Chola",
    description:
      "Chola Gulcha is a traditional dish originating from the Indian subcontinent, featuring spicy chickpeas (chola) paired with crispy, deep-fried bread (gulcha). This delectable combination offers a perfect blend of flavors and textures, making it a popular and satisfying street food delicacy.",
    image: Chola,
    price: 250,
    cardNumber: 2,
    menuId: 2,
    quantity: 0,
  },
  {
    id: 3,
    name: "Idli Sambhar",
    description:
      "A South Indian classic, Idli Sambhar consists of soft, steamed rice cakes (idli) served with a flavorful lentil-based stew (sambhar), creating a wholesome and comforting meal.",
    image: Idli,
    price: 300,
    cardNumber: 3,
    menuId: 3,
    quantity: 0,
  },
  {
    id: 4,
    name: "Masala Dosa",
    description:
      " Originating from South India, Masala Dosa is a crispy fermented rice and urad dal crepe filled with a spiced potato mixture, offering a delightful combination of textures and aromatic spices",
    image: MasalaDosa,
    price: 100,
    cardNumber: 4,
    menuId: 4,
    quantity: 0,
  },
  {
    id: 5,
    name: "Paneer",
    description:
      "A versatile Indian cheese, paneer is loved for its mild, creamy taste and is often used in various dishes, adding a rich and satisfying element to both vegetarian and non-vegetarian cuisines.",
    image: Paneer,
    price: 400,
    cardNumber: 5,
    menuId: 5,
    quantity: 0,
  },
  {
    id: 6,
    name: "Gujarati",
    description:
      "Known for its sweet, savory, and spicy flavors, Gujarati cuisine offers a diverse range of vegetarian dishes, featuring dhokla, thepla, and kadhi, showcasing the culinary richness of the Gujarat region",
    image: Gujrati,
    price: 500,
    cardNumber: 6,
    menuId: 6,
    quantity: 0,
  },
];

// Export a function to get initial cart state
export const getInitialCartState = () => {
  return [];
};
