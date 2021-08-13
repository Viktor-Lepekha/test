import React from 'react';
import './CardsList.css';

export const CardsList = ({ products }) => (
    <ul className="cardsList__list">
        {products.map((product) => (
            <li key={product.id}>
                <div className="cardsList__card">
                    <img
                        className="cardsList__image"
                        src={product.image}
                        alt="image of the product"
                    />
                    <div className="cardsList_opener">
                        <i class="fas fa-arrow-circle-down"></i>
                    </div>
                    <h3 className="cardsList__title">{product.title}</h3>
                    <p className="cardsList__description">
                        {product.description}
                    </p>
                    <button className="cardsList__button" type="button">
                        Go for it!
                    </button>
                </div>
            </li>
        ))}
    </ul>
)