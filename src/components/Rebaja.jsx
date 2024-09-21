import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useTranslation } from 'react-i18next';

const Rebaja = () => {

    const {t, i18n} = useTranslation(["global"])

    const discountTextMap = {
        "Sin descuento": "Sin descuento",
        "25": "25% de descuento",
        "30": "30% de descuento",
        "50": "50% de descuento",
        "75": "75% de descuento"
    };

    const [valor, setValor] = useState(() => {
        const savedValue = window.localStorage.getItem('text');
        return savedValue || "Sin descuento";
    });


    const setLocalStorage = value =>{
        try{
            setValor(value)
            window.localStorage.setItem("text", value)
        }catch(error){
            console.log(error)
        }
    }

    const handleSelect = (eventKey) => {
        setLocalStorage(eventKey);
    };

    return (
        <div>
            <DropdownButton id="dropdown-basic-button" title={valor} onSelect={handleSelect}>
                <Dropdown.Item eventKey="Sin descuento">Sin descuento</Dropdown.Item>
                <Dropdown.Item eventKey="25">25%</Dropdown.Item>
                <Dropdown.Item eventKey="30">30%</Dropdown.Item>
                <Dropdown.Item eventKey="50">50%</Dropdown.Item>
                <Dropdown.Item eventKey="75">75%</Dropdown.Item>
            </DropdownButton>
            <br/>
            <p>Descuento aplicado: {discountTextMap[valor]}</p>
        
           
        </div>
    );
};

export default Rebaja;
