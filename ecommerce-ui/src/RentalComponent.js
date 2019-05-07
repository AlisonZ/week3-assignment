import React, {Component} from 'react';
import PropTypes from 'prop-types';

class RentalComponent extends Component {
    static propTypes = {
            title: PropTypes.string,
            houseType: PropTypes.string,
            image: PropTypes.string,
            cost: PropTypes.number,
            stars: PropTypes.number,
            reviews: PropTypes.number,
            isSuperhost: PropTypes.bool,
    }

    render() {
        const houseType = this.props.houseType.toUpperCase();

        return (
            <div>
                <img src={this.props.image} className="rental-image" alt="rental-property" />
                <div className="rental-info">

                    <div className="light-grey-secondary-title">{houseType}</div>
                    <div className="dark-grey-primary-title">{this.props.title}</div>
                    <div className="dark-grey-terciary">${this.props.cost}/night</div>
                    <div> 
                        <span className="dark-grey-four">{this.props.stars} stars </span>
                        <span className="dark-grey-four" >{this.props.reviews}</span>
                        {
                            this.props.isSuperhost ?
                            <span className="dark-grey-four">
                                <span className="bullet-separator">∙</span>
                                <span >Superhost</span>
                            </span > : null
                        } 
                    </div>
                </div>
            </div>
        );
    }
}

export default RentalComponent;