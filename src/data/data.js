// data.js
import Dosa from "../images/french.jpg";
import Chola from "../images/chhola.jpg";
import Idli from "../images/idli.jpg";
import MasalaDosa from "../images/masala.jpg";
import Paneer from "../images/paneer.jpg";
import Gujrati from "../images/gujarati.jpg";
import Pizza from "../images/pizza.jpg";
import Burger from "../images/burger.jpg";
import Pasta from "../images/pasta.jpg";

export const MenuList = [
  {
    id: 1,
    name: "French Fries",
    description:
      "Crispy on the outside, fluffy on the inside, French Fries are golden delights that elevate any meal with their irresistible texture. These deep-fried potato strips are a classic and beloved side dish, perfect for indulging in their salty, savory goodness.",
    image: Dosa,
    price: 200,
    
  },
  {
    id: 2,
    name: "Chola Gulcha",
    description:
      "Chola Gulcha is a traditional dish originating from the Indian subcontinent, featuring spicy chickpeas (chola) paired with crispy, deep-fried bread (gulcha). This delectable combination offers a perfect blend of flavors and textures, making it a popular and satisfying street food delicacy.",
    image: Chola,
    price: 250,
   
  },
  {
    id: 3,
    name: "Idli Sambhar",
    description:
      "A South Indian classic, Idli Sambhar consists of soft, steamed rice cakes (idli) served with a flavorful lentil-based stew (sambhar), creating a wholesome and comforting meal.",
    image: Idli,
    price: 300,
   
  },
  {
    id: 4,
    name: "Masala Dosa",
    description:
      "Originating from South India, Masala Dosa is a crispy fermented rice and urad dal crepe filled with a spiced potato mixture, offering a delightful combination of textures and aromatic spices.",
    image: MasalaDosa,
    price: 100,
   
  },
  {
    id: 5,
    name: "Paneer Tikka",
    description:
      "Paneer Tikka is a popular Indian appetizer made from marinated and grilled paneer cubes, often seasoned with a blend of aromatic spices and served with chutney. It's a delicious vegetarian option loved by many.",
    image: Paneer,
    price: 400,
 
  },
  {
    id: 6,
    name: "Gujarati Thali",
    description:
      "Known for its sweet, savory, and spicy flavors, Gujarati Thali offers a diverse range of vegetarian dishes, featuring dhokla, thepla, kadhi, and more, showcasing the culinary richness of the Gujarat region.",
    image: Gujrati,
    price: 500,
   
  },
  {
    id: 7,
    name: "Margherita Pizza",
    description:
      "Margherita Pizza is a classic Italian pizza topped with tomato sauce, fresh mozzarella cheese, basil leaves, and a drizzle of olive oil. It's a simple yet delicious option that showcases the flavors of the ingredients.",
    image: Pizza,
    price: 350,
  
  },
  {
    id: 8,
    name: "Veggie Burger",
    description:
      "Veggie Burger is a vegetarian twist on the classic burger, featuring a patty made from vegetables, beans, or grains, topped with lettuce, tomato, onion, and condiments, served on a bun. It's a satisfying and flavorful option for burger lovers.",
    image: Burger,
    price: 300,
   
  },
  {
    id: 9,
    name: "Creamy Pasta",
    description:
      "Creamy Pasta is a comforting dish made from cooked pasta tossed in a creamy sauce, often flavored with cheese, garlic, herbs, and other ingredients. It's a versatile option that can be customized with various toppings and additions.",
    image: Pasta,
    price: 280,
  
  },
];

// Export a function to get initial cart state
export const getInitialCartState = () => {
  return [];
};
