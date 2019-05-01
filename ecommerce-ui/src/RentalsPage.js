import React, {Component} from 'react';
import rentals from './_data/airbnbs.json';
import RentalComponent from './RentalComponent';
import ShoppingCart from './ShoppingCart';

class RentalsPage extends Component {
 
    constructor() {
        super()
        this.state = {
            selectedRentals: [],
            rentals: rentals,
            showForm: false,
            addedTitle: '',
            addedPropertyType: '',
            addedCost:'',
            addedImgSrc: '',
            addedCity: '',
            addedCountry: '',
        }
        
        this.addToCart = this.addToCart.bind(this);
        this.removeFromCart = this.removeFromCart.bind(this);
        this.onSubmitNewRental = this.onSubmitNewRental.bind(this);
        this.handleAddedTitle = this.handleAddedTitle.bind(this);
        this.handleAddedPropertyType = this.handleAddedPropertyType.bind(this);
        this.handleAddedCost = this.handleAddedCost.bind(this);
        this.handleAddedImg = this.handleAddedImg.bind(this);
        this.handleAddedCity = this.handleAddedCity.bind(this);
        this.handleAddedCountry = this.handleAddedCountry.bind(this);
    }

    addToCart = (addedRental) => {
        this.setState({
            selectedRentals: [...this.state.selectedRentals, addedRental]
        });
    }

    removeFromCart = (removedRental) => {
        let filteredRentals = this.state.selectedRentals.filter(rental => rental.title !== removedRental.title);
        this.setState({
            selectedRentals: filteredRentals
        });
    }

    onSubmitNewRental = (event) => {
        const addedRental = {
            host: {
                name: '',
                isSuperhost: false,
            },
            houseType: this.state.addedPropertyType,
            image: this.state.addedImgSrc,
            location:{
                city: this.state.addedCity,
                country: this.state.addedCountry,
            },
            payment: {
                cost: this.state.addedCost,
                description: 'Free cancellation',
            },
            rating: {
                stars: 5,
                reviews: 0,
            },
            title: this.state.addedTitle,
        }

        this.setState({
            rentals: [...this.state.rentals, addedRental]
        });

        this.setState({showForm:false});
        event.preventDefault();
        //add a toggle on showForm to not show the form after submit
    }

    handleAddedTitle = (event) => {
        this.setState({addedTitle: event.target.value});
        // console.log('state', this.state);
    }

    handleAddedPropertyType = (event) => {
        this.setState({addedPropertyType: event.target.value});
    }

    handleAddedCost = (event) => {
        this.setState({addedCost: event.target.value});
    }

    handleAddedImg = (event) => {
        this.setState({addedImgSrc: event.target.value});
    }

    handleAddedCity = (event) => {
        this.setState({addedCity: event.target.value});
    }

    handleAddedCountry = (event) => {
        this.setState({addedCountry: event.target.value});
    }

    toggleShowForm = () => {
        this.setState({showForm: !this.state.showForm});
        console.log('show form toggle clikkkk', this.state.showForm);
    }

    render(){
        const rentalsList = this.state.rentals.map((rental, indx) =>
             <RentalComponent rental={rental} key={indx} addToCart={this.addToCart}/>
        );
        
        return (
            <div>
                <div className="nav-bar-container">
                    <div className="nav-bar-components">
                        <ShoppingCart selectedRentals={this.state.selectedRentals} removeFromCart={this.removeFromCart}/>
                        <span onClick={this.toggleShowForm} className="dark-grey-primary-title add-property">Add Property</span>
                    </div>
                </div>
                <div>{
                    this.state.showForm ?
                    <form id="add-rental-form" action="" method="get" onSubmit={this.addNewRental} class="add-rental-form"> {}
                    <div class="dark-grey-primary-title add-item">List your property with us:</div>
                    <div class="add-rental">
                        <label for="title-input" class="dark-grey-terciary add-item"> Rental title:</label>
                        <input type="text" name="title-input" value={this.state.addedTitleValue} onChange={this.handleAddedTitle} class="add-input"/>
                    </div>
                    <div class="add-rental">   
                        <label for="property-type-input" class="dark-grey-terciary add-item">Property type:</label>
                        <input type="text" name="property-type-input" value={this.state.addedPropertyType} onChange={this.handleAddedPropertyType} class="add-input"></input>
                    </div>
                    <div class="add-rental">
                        <label for="cost-input" class="dark-grey-terciary add-item">Cost per night:</label>
                        <input type="text" name="cost-input" value={this.state.addedCost} onChange={this.handleAddedCost} class="add-input"></input>
                    </div>
                    <div class="add-rental">
                        <label for="image-input" class="dark-grey-terciary add-item">Image link:</label>
                        <input type="text" name="image-input" value={this.state.addedImgSrc} onChange={this.handleAddedImg} class="add-input"></input>
                    </div>
                    <div class="add-rental">
                        <label for="city-input" class="dark-grey-terciary add-item">City:</label>
                        <input type="text" name="city-input" value={this.state.addedCity} onChange={this.handleAddedCity} class="add-input"></input>
                    </div>
                    <div class="add-rental">
                        <label for="country-input" class="dark-grey-terciary add-item">Country:</label>
                        <input type="text" name="country-input" value={this.state.addedCountry} onChange={this.handleAddedCountry} class="add-input"></input>
                    </div>
                    

                    <div>
                        <input type="submit" name="add-rental-submit-button" value="Submit" onClick={this.onSubmitNewRental}></input>
                    </div>

                </form> : null
                }

                </div>
              
                <h1 className="top-places-title">Top Places to Stay</h1>
                <ul className="rentals-list">{rentalsList}</ul>
            </div>
        );
    }
}

export default RentalsPage;
