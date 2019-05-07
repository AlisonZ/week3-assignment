import React, {Component} from 'react';
import rentals from './_data/airbnbs.json';
import ShoppingCart from './ShoppingCart';
import RentalsList from './RentalsList';
import AddRentalForm from './AddRentalForm';

class RentalsPage extends Component {
 
    constructor() {
        super()
        this.state = {
            selectedRentals: [],
            rentals: rentals,
            showForm: false,
        }
    }

    addToCart = (idx) => {
        return ()=> {
            const selectedRental = this.state.rentals[idx];
            const isASelectedRental = this.state.selectedRentals.includes(selectedRental)
            if( !isASelectedRental) {
                this.setState(prevState => {
                    return {
                        selectedRentals: [...prevState.selectedRentals, selectedRental],
                    };
                });
            }
        }
    }

    removeFromCart = (idx) => {
        const selectedRentalsCopy = [...this.state.selectedRentals];
        selectedRentalsCopy.splice(idx, 1);

        this.setState({
            selectedRentals: selectedRentalsCopy,
        });
    }

    updateRentalState(newRental) {
         this.setState(prevState => {
            return {
                rentals: [...prevState.rentals, newRental],
            };
        });
    }

    addNewRental = (rentalInfo) => {
        const newRental = {
            "title": rentalInfo.title,
            "houseType": rentalInfo.houseType,
            "image": rentalInfo.image,
            "location": {
                "city": rentalInfo.city,
                "country": rentalInfo.country,
            },
            "payment": {
                "cost": parseInt(rentalInfo.addedCost),
                "description": ""
            },
            "host": {
                "name": "Jamie",
                "isSuperhost": true
            },
            "rating": {
                "stars": 4.5,
                "reviews": 381
            }
        };

        this.updateRentalState(newRental);
    }

    toggleShowForm = () => {
        this.setState({showForm: !this.state.showForm});
    }

    render(){        
        return (
            <div>
                <div className="nav-bar-container">
                    <div className="nav-bar-components">
                        <ShoppingCart 
                            selectedRentals={this.state.selectedRentals} 
                            removeFromCart={this.removeFromCart}
                        />

                        <span 
                            onClick={this.toggleShowForm} 
                            className="dark-grey-primary-title add-property"
                        >
                            Add Property
                        </span>
                    </div>
                </div>
                {
                    this.state.showForm ? 
                    <AddRentalForm 
                        onAddNewRental={this.addNewRental}
                        onSubmitToggle={this.toggleShowForm}
                    /> : 
                    null
                }
              
                <RentalsList 
                    rentals={this.state.rentals} 
                    onAddToCart={this.addToCart} 
                    key=""
                />
            </div>
        );
    }
}

export default RentalsPage;
