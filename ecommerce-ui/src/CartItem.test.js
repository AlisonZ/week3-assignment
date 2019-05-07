import React from 'react';
import {shallow} from 'enzyme';
import CartItem from './CartItem';
import { MOCK_RENTAL_1 } from "./TestMocks.js";

it('shallow renders Cart Item', () => {
    const wrapper = shallow(
    <CartItem rental={MOCK_RENTAL_1}/>
    );

    expect(wrapper).toMatchSnapshot();
});