import React, {Component} from 'react';
import removeIcon from './remove-icon.png';
import PropTypes from 'prop-types';

class CartItem extends Component {
    static propTypes = {
        rental: PropTypes.object,
        removeFromCart: PropTypes.func,
    }

    render() {
        return (
            <div class="cart-item">
                <span class="dark-grey-primary-title cart-title cart-details">{this.props.rental.title}</span>
                <img src={this.props.rental.image} className="cart-image cart-details" alt="rental-property"/>
                <span class="dark-grey-terciary cart-cost cart-details">
                    <div>
                        ${this.props.rental.payment.cost}/
                    </div>
                    <div>night</div>
                </span>
                <img src={removeIcon} onClick={() => this.props.removeFromCart(this.props.rental)} className="cart-remove-img cart-details" alt="minus-symbol"/>
            </div>
        );
    }
}

export default CartItem;