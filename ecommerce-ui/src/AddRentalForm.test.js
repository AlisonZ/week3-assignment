import React from 'react';
import {shallow} from 'enzyme';
import AddRentalForm from './AddRentalForm';

it('shallow renders Add Rental Form', () => {
    const wrapper = shallow(<AddRentalForm />);

    expect(wrapper).toMatchSnapshot();
});