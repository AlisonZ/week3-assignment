import React, {Component} from 'react';
import CartItem from './CartItem';
import cartImg from './shopping-cart.png';
import PropTypes from 'prop-types';
import removeIcon from './remove-icon.png';


class ShoppingCart extends Component {
    static propTypes = {
        selectedRentals: PropTypes.array,
        removeFromCart: PropTypes.func,
    }

    constructor() {
        super()
        this.state = {
            isOpen: false,
        }

        this.handleDropDown = this.handleDropDown.bind(this);   
    }

    handleDropDown = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }

    render() {
        const rentalItems = this.props.selectedRentals.map((rental, idx) => 
        <li key={idx}>
            <CartItem 
                rental={rental} 
            />
            <img src={removeIcon} onClick={() => this.props.removeFromCart(idx)} className="cart-remove-img cart-details" alt="minus-symbol"/>

        </li>
        );

        let price = 0;
        this.props.selectedRentals.map((rental) =>
        price += rental.payment.cost
        );

        return (    
            <span >
                <img src={cartImg} onClick={this.handleDropDown} className="cart-img" alt="shopping-cart"/>
                <div>{
                    this.state.isOpen ?
                    (<div>
                        <ul className="unstyled-list">
                            {rentalItems}
                        </ul>
                        <div className="light-grey-primary-title">Total= ${price}</div>
                    </div>) : null
                }
                </div>
            </span>
        );
    }
}

export default ShoppingCart;