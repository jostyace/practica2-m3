import { Item } from "../Item"

import './ItemSelector.css';

export const ItemsSelector = ({ items }) => {
    return (
        <div className="ElementsDiv">
            <ul className="ItemSelector">
                {items.map((item, index) => (
                    <Item 
                        key={index} 
                        icono={item.icono} 
                        titulo={item.titulo} 
                        id={item.id} 
                        color={item.color} 
                        contenido= {item.contenido} 
                    />
                ))}
            </ul>
        </div>
    );
};