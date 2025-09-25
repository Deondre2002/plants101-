import { useState } from "react";
import Cart from "./components/Cart";
import PlantList from "./components/PlantList";
import PLANTS from "./data";
import "./index.css";

export default function App() {
  const [plants, setPlants] = useState(PLANTS);
  const [cart, setCart] = useState([]);

  function addPlant(plant) {
    setCart((prevCart) => {
      const realPlant = prevCart.find((item) => item.id === plant.id);
      item.id === plant.id ? { ...item, quantity: item.quantity + 1 } : item;
    });
  }

  function increase(plantId) {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === plantId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  function decrease(plantId) {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === plantId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  return (
    <div className="plants">
      <PlantList plants={plants} addPlant={addPlant} />
      <Cart cart={cart} increase={increase} decrease={decrease} />
    </div>
  );
}
