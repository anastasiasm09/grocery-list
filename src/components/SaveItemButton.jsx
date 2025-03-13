function SaveItemButton({ inputItem, setInputItem, handleSaveClick }) {

    function saveOrEnterClick(event) {

        if (event.key === "Enter") {
            handleSaveClick(event);
        } else {
            setInputItem(event.target.value)
        }
    }

    return <>
        <input
            type="text"
            placeholder='Add an item...'
            value={inputItem}
            onChange={saveOrEnterClick}
            onKeyDown={saveOrEnterClick}
        />
        <button className="save-button" onClick={handleSaveClick}>Save</button>
    </>
}

export default SaveItemButton;
