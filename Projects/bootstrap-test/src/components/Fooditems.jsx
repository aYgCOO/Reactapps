/* eslint-disable no-unused-vars */
import React from "react";
import Item from "./Items";

const FoodItems = () => {
  let foodItems = ['Dal', 'Roti', 'Milk', 'Green Vegetables', 'Salad'];

  return (
    <div className="container bg-light border py-3 rounded-bottom">
      <ul className="list-group">
        {foodItems.map((item) => (
          <Item key={item} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default FoodItems;