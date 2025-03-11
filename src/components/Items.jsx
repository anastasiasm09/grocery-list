import { useState } from 'react';
import ItemsNumber from './ItemsNumber'

function Items({ items, addItem, reduceItem, handleOnChange }) {

    return items.map((item) => (
        <div
            className="items-list"
            key={item.itemName}
            style={{
                textDecoration: item.isSelected ? "line-through" : "none",
                color: item.isSelected ? "#B5DDA4" : "white"
            }}>
            <div>
                <input
                    type="checkbox"
                    checked={item.isSelected}
                    onChange={() => handleOnChange(item.itemName)}
                />
                <span className='item'>{item.itemName}</span>
            </div>
            <ItemsNumber item={item} addItem={addItem} reduceItem={reduceItem} />
        </div>
    ))
}

export default Items;