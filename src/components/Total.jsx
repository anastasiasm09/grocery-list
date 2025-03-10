function Total({ items }) {
    let total = 0;

    items.forEach((item) => {
        if (!item.isSelected) {
            total += item.quantity
        }
    })
    return <span>Total: {total} </span>
}

export default Total;