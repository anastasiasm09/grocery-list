import { useState } from 'react'

import Header from "./components/Header"
import SaveItemButton from './components/SaveItemButton'
import Items from './components/Items'
import ItemsNumber from './components/ItemsNumber'
import Total from './components/Total'
import { use } from 'react'

function App() {
  const title = "GROCERY LIST";

  const [items, setItems] = useState([
    { itemName: 'apple', quantity: 2, isSelected: false },
    { itemName: 'banana', quantity: 5, isSelected: false },
    { itemName: 'potatoes', quantity: 20, isSelected: false }
  ]);
  const [inputItem, setInputItem] = useState('');

  function handleSaveClick() {
    if (inputItem.length) {
      const newItem = {
        itemName: inputItem,
        quantity: 1,
        isSelected: false
      };
      const updatedItems = [...items, newItem];

      setItems(updatedItems);
      setInputItem('');
    }
  };

  function handleOnChange(itemName) {
    setItems(prevItems =>
      prevItems.map(item =>
        item.itemName === itemName ? { ...item, isSelected: !item.isSelected } : item
      )
    );
  };

  const handleQuantityIncrease = (item) => {
    const addedValue = items.map((selectedItem) => {
      if (selectedItem.itemName === item.itemName) {
        const updatedItem = { ...selectedItem }
        updatedItem.quantity = updatedItem.quantity + 1
        return updatedItem;
      } 
      else {
        return selectedItem;
      }
    })

    setItems(addedValue);
  };


  const handleQuantityDecrease = (item) => {
    const reducedValue = items.map((selectedItem) => {
      if (selectedItem.itemName === item.itemName) {
        const updatedItem = { ...selectedItem }
        updatedItem.quantity = updatedItem.quantity - 1;
        return updatedItem;
      }
      else {
        return selectedItem;
      }
    })
    const updatedList = reducedValue.filter((item) => item.quantity !== 0)

    setItems(updatedList);
  };

  return (
    <>
      <div className='container'>
        <div>
          <Header title={title} />
        </div>
        <div className='add-item-box'>
          < SaveItemButton handleSaveClick={handleSaveClick} setInputItem={setInputItem} inputItem={inputItem} />
        </div>
        <Items items={items} addItem={handleQuantityIncrease} reduceItem={handleQuantityDecrease} handleOnChange={handleOnChange} />
        <Total items={items} />
      </div>
    </>

  )
}

export default App;
