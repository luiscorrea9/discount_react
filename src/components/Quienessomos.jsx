// Quienessomos.jsx
import React, { useEffect, useState } from 'react';
import Card from './Card';

const Quienessomos = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        obtenerproductos();
    }, []);

    const obtenerproductos = async () => {
        const datos = await fetch('https://fakestoreapi.com/products');
        const prod = await datos.json();
        setProductos(prod);
    };

    return (
        <section className="container">
            <h3 className="my-4">Lista de productos</h3>
            <div className="row">
                {productos.map((producto) => (
                    <div className="col-12 col-sm-6 col-md-4" key={producto.id}>
                        <Card
                            image={producto.image}
                            title={producto.title}
                            price={producto.price}
                            description={producto.description}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Quienessomos;
