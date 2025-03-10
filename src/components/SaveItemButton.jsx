function SaveItemButton({ inputItem, setInputItem, handleSaveClick }) {

    return <>
        <input
            type="text"
            placeholder='Add an item...'
            value={inputItem}
            onChange={(event) => setInputItem(event.target.value)}
        />
        <button className="save-button" onClick={handleSaveClick}>Save</button>
    </>
}

export default SaveItemButton;