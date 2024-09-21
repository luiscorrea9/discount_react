// Card.jsx
import React from 'react';

export const Card = ({ title, description, image, price }) => {
    const descuento = parseInt(window.localStorage.getItem('text'), 10) || 0;

    return (
        <div className="card mb-4" style={{ width: '24rem', height: '35rem' }}>
            <img
                className="card-img-top"
                src={image}
                alt="Card image cap"
                style={{ width: '100%', height: '350px', objectFit: 'cover' }}
            />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">Precio: ${price}</p>
                {descuento > 0 && (
                    <p className="card-text text-success">
                        Precio con descuento: ${(price - (price * descuento) / 100).toFixed(2)}
                    </p>
                )}
            </div>
        </div>
    );
};

export default Card;
