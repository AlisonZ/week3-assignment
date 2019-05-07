import React, {Component} from 'react';

class AddRentalForm extends Component {

    constructor() {
        super() 
        this.state = {
            title: '',
            houseType: '',
            image: "https://via.placeholder.com/350",
            addedCost: 0,
            city: '',
            country: '',
            newRental: {},
        }

    }

    handleAddedTitle = (event) => {
       this.setState({title: event.target.value});
   }

    handleAddedPropertyType = (event) => {
        this.setState({houseType: event.target.value});
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

    render() {
        return (
            <div>
                <form 
                    id="add-rental-form"
                    onSubmit={(e) => {
                        e.preventDefault();
                        this.props.onAddNewRental(this.state);
                        this.props.onSubmitToggle();
                    }}

                    action="" 
                    method="get" 
                    className="add-rental-form"
                > 

                    <div className="dark-grey-primary-title add-item">List your property with us:</div>
                    <div className="add-rental">
                        <label 
                            for="title-input" 
                            class="dark-grey-terciary add-item"
                        > 
                            Rental title:
                        </label>
                        <input 
                            type="text" 
                            name="title-input" 
                            value={this.state.title}  
                            onChange={this.handleAddedTitle} 
                            className="add-input"
                        />

                    </div>
                     <div class="add-rental">   
                        <label 
                            for="property-type-input" 
                            class="dark-grey-terciary add-item"
                        >
                            Property type:
                        </label>
                        <input 
                            type="text" 
                            name="property-type-input"
                            value={this.state.addedPropertyType} 
                            onChange={this.handleAddedPropertyType} 
                            class="add-input"
                        />
                    </div>
                    <div class="add-rental">
                        <label 
                            for="cost-input" 
                            class="dark-grey-terciary add-item"
                        >
                            Cost per night:
                        </label>
                        <input 
                            type="text" 
                            name="cost-input" 
                            value={this.state.addedCost} 
                            onChange={this.handleAddedCost} 
                            class="add-input"
                        />
                    </div>
                    <div class="add-rental">
                        <label 
                            for="image-input" 
                            class="dark-grey-terciary add-item"
                        >
                            Image link:
                        </label>
                        <input 
                            type="text" 
                            name="image-input" 
                            value={this.state.addedImgSrc} 
                            onChange={this.handleAddedImg} 
                            class="add-input"
                        />
                    </div>
                    <div class="add-rental">
                        <label 
                            for="city-input" 
                            class="dark-grey-terciary add-item"
                        >
                            City:
                        </label>
                        <input 
                            type="text" 
                            name="city-input" 
                            value={this.state.addedCity} 
                            onChange={this.handleAddedCity} 
                            class="add-input"
                        />
                    </div>
                    <div class="add-rental">
                        <label 
                            for="country-input" 
                            class="dark-grey-terciary add-item"
                        >
                            Country:
                        </label>
                        <input 
                            type="text" 
                            name="country-input" 
                            value={this.state.addedCountry} 
                            onChange={this.handleAddedCountry} 
                            class="add-input"
                        />
                    </div>
                    

                    <div>
                        <input 
                            type="submit" 
                            name="add-rental-submit-button" 
                            value="Submit" 
                            // onClick={this.props.onAddNewRental}
                        />
                    </div> 

                </form> 
            </div>
        );
    }
}

export default AddRentalForm;