import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({category, isActive, setActiveIndex}) => {
  return (
    <div key={category.card.card.title} className="bg-gray-50 my-2">
      <div className="flex justify-between cursor-pointer font-bold" onClick={setActiveIndex}>
        <span>
          {category.card.card.title}({category.card.card.itemCards.length})
        </span>
        <span>🔽</span>
      </div>
      {isActive && <ItemList harish={category.card.card.itemCards}/> }
    </div>
  );
};

export default RestaurantCategory
