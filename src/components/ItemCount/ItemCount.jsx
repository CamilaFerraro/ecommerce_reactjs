import React from "react";
import './ItemCount.css';
import { useState } from "react";



const ItemCount = ({nombreProducto}) => {
    
    const [ItemCount, setItemCount] = useState(1);
        const sumar = () => {
            if (ItemCount < 10){
                setItemCount(ItemCount + 1);
            } else {
                setItemCount(1)
            }
        }
        const restar = () => {
            if (ItemCount > 1){
                setItemCount(ItemCount - 1);
            } else {
                setItemCount(10)
            }
        }

    return (
        <div>
            <h4>{nombreProducto}Mousse de Chocolate</h4>
            <div className="counter">
                <div className="itemCountButton" onClick={restar}><h4>-</h4></div>
                <div className="itemCount">{ItemCount}</div>
                <div className="itemCountButton" onClick={sumar}><h4>+</h4></div>
            </div>
            <button>Agregar al carrito</button>
        </div>
    );
}

export default ItemCount;