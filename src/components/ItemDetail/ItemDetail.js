import { useState, useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';
import { CartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';

export const ItemDetail = ({title, image, description, price}) => {
    const {addItem} = useContext(CartContext);
    const [contador, setContador] = useState(0);

    const onAdd = (dato)=>{
        console.log("hizo click", dato);
        setContador(dato)
        addItem(title, image, description, price, dato)
    }
    return (
        <div className='itemDetail'>
            <h1>{title}</h1>
            <img src={image} alt={description}/>
            <p>{description}</p>
            <p>{price}</p>
            <p>Cantidad seleccionada: {contador}</p>
            <ItemCount stock={10} initial={1} onAdd={onAdd}/>
            {
                contador > 0 &&
                <Link to="/cart">
                    <button>Ir al carrito</button>
                </Link>
            }
        </div>

    )
}

export default ItemDetail;
