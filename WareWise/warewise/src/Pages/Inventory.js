import React from 'react';
import {MenuList} from "../Helpers/MenuList";
import MenuItem from "../components/menuItem";
import "../styles/Inventory.css";

const Inventory = () => {
  return (
    <div className='Inventory'>
      <h1 className='InventoryTitle'>Inventaire</h1>
      <div className='InventoryList'>{MenuList.map((menuItem, key,) => {
        return <MenuItem
        key={key}
         image={menuItem.image}
          name ={menuItem.name}
          price={menuItem.price} />
      })}</div>
    </div>
  )
};

export default Inventory;
