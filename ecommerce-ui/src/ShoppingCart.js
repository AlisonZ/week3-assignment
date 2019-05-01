import React, {Component} from 'react';
import CartItem from './CartItem';
import cartImg from './shopping-cart.png';
import PropTypes from 'prop-types';

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
        const rentalItems = this.props.selectedRentals.map((rental, indx) => 
            <CartItem rental={rental} removeFromCart={this.props.removeFromCart}  />
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
                    <div>
                        <ul>
                            {rentalItems}
                        </ul>
                        <div class="light-grey-primary-title">Total= ${price}</div>
                    </div> : null
                }
                </div>
            </span>
        );
    }
}

export default ShoppingCart;