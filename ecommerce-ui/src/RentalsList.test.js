import React from 'react';
import {shallow} from 'enzyme';
import  RentalsList from './RentalsList';
import {MOCK_RENTAL_1, MOCK_RENTAL_2} from './TestMocks';

it('shallow renders RentalsList', () => {
    const wrapper = shallow(
        <RentalsList
            rentals={[MOCK_RENTAL_1, MOCK_RENTAL_2]}
            onAddToCart={()=> {}}
        />
    );

    expect(wrapper).toMatchSnapshot();
});