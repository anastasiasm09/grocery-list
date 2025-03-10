function ItemsNumber({ item, addItem, reduceItem}) {
    return <div className="items-number">
        <button onClick={() => reduceItem(item)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => addItem(item)}>+</button>
    </div>
    
}

export default ItemsNumber;