import React from 'react';
import {shallow} from 'enzyme';
import ShoppingCart from './ShoppingCart';
import {MOCK_RENTAL_1, MOCK_RENTAL_2} from './TestMocks';


it('shallow renders a Shopping Cart', () => {
    const wrapper = shallow(
    <ShoppingCart 
        selectedRentals={[MOCK_RENTAL_1, MOCK_RENTAL_2]}
    />);

    expect(wrapper).toMatchSnapshot();
});