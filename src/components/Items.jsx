import { useState } from 'react';
import ItemsNumber from './ItemsNumber'

function Items({ items, addItem, reduceItem, handleOnChange }) {

    return items.map((item) => (
        <div className="items-list">
            <div>
                <input
                    type="checkbox"
                    name=""
                    id=""
                    checked={ item.isSelected }
                    onChange={() => handleOnChange(item.itemName)} 
                />
                <span>{item.itemName}</span>
            </div>
            <ItemsNumber item={item} addItem={addItem} reduceItem={reduceItem} />
        </div>
    ))
}

export default Items;