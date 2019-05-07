import React from 'react';
import RentalComponent from './RentalComponent';

export default class RentalsList extends React.Component {
    render() {        
        const rentalsList = this.props.rentals.map((rental, idx) => {
            return (
                    <li key={idx} className="rental-component">
                        <RentalComponent 
                            title={rental.title} 
                            houseType={rental.houseType} 
                            image={rental.image}
                            cost={rental.payment.cost}
                            stars={rental.rating.stars}
                            reviews={rental.rating.reviews}
                            isSuperhost={rental.host.isSuperhost}
                        />
                        <button 
                            onClick={this.props.onAddToCart(idx)}
                            className="add-to-cart-btn"
                        >
                            Add to Cart
                        </button>
                    </li>
                );
            });

        return (
            <div>
                <h1 className="top-places-title">Top Places to Stay</h1>
                    <ul className="rentals-list unstyled-list">
                       {rentalsList}
                    </ul>
            </div>
        );
    }
}