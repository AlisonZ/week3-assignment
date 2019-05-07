import React, {Component} from 'react';
import PropTypes from 'prop-types';

class CartItem extends Component {
    static propTypes = {
        rental: PropTypes.object,
    }

    render() {
        return (
            <div className="cart-item">
                <span className="dark-grey-primary-title cart-title cart-details">{this.props.rental.title}</span>
                <img src={this.props.rental.image} className="cart-image cart-details" alt="rental-property"/>
                <span className="dark-grey-terciary cart-cost cart-details">
                    <div>
                        ${this.props.rental.payment.cost}/
                    </div>
                    <div>night</div>
                </span>
            </div>
        );
    }
}

export default CartItem;