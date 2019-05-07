import React from 'react';
import {shallow} from 'enzyme';
import RentalsPage from './RentalsList';
import {MOCK_RENTAL_1, MOCK_RENTAL_2} from './TestMocks';

it('shallow renders Rentals Page', () => {
    const wrapper = shallow(
        <RentalsPage 
        rentals={[MOCK_RENTAL_1, MOCK_RENTAL_2]}
        onAddToCart={()=> {}}
        />);

    expect(wrapper).toMatchSnapshot();
});