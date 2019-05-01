import React, {Component} from 'react';
import PropTypes from 'prop-types';

class RentalComponent extends Component {
    static propTypes = {
        rental: PropTypes.object,
        addToCart: PropTypes.func,
    }

    render() {
        const houseType = this.props.rental.houseType.toUpperCase();

        return (
            <div className="rental-component">
                <img src={this.props.rental.image} className="rental-image" alt="rental-property" />
                <div className="rental-info">

                    <div className="light-grey-secondary-title">{houseType}</div>
                    <div className="dark-grey-primary-title">{this.props.rental.title}</div>
                    <div className="dark-grey-terciary">${this.props.rental.payment.cost}/night</div>
                    <div> 
                        <span className="dark-grey-four">{this.props.rental.rating.stars} stars </span>
                        <span className="dark-grey-four" >{this.props.rental.rating.reviews}</span>
                        {
                            this.props.rental.host.isSuperhost ?
                            <span className="dark-grey-four">
                                <span className="bullet-separator">∙</span>
                                <span >Superhost</span>
                            </span > : null
                        } 

                        <span id="ratings">
                            <span onClick={() => this.props.addToCart(this.props.rental)} className="add-to-cart dark-grey-primary-title">Add to Cart</span>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default RentalComponent;