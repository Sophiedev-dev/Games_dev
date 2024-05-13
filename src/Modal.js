import React, {useState} from "react";

export const Modal = ({isOpen, onClose, OnSelection})=> {
    const [selectedValue, setSelectedValue] = useState("");
    const [low, setLow] = useState(0);
    const [hight, setHight] = useState(20);

    const handleSelectionChange = (e)=>{
        selectedValue(parseInt(e.target.value));
    };
    const handleLowChange = (e)=>{
        setLow(e.target.value);
    }
    const handleHightChange = (e)=>{
        setHight(e.target.value);
    }
    const handleSubmit = (e)=>{
        OnSelection(selectedValue, low, hight);
        onClose();
    }

    if (!isOpen) return null;
    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Selectionnez une valeur:</h2>
                <select value={selectedValue} onChange={handleSelectionChange}>
                    <option value="">---Selectionnez une valeur---</option>
                    <option value="facile">facile</option>
                    <option value="facile">difficile</option>
                    <option value="tres_difficile">tres difficile</option>
                </select>
                <button onClick={handleSubmit}>Commencer la partie</button>
            </div>
        </div>
    );
};
export default Modal;