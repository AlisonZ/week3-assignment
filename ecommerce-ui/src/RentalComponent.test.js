import React from 'react';
import {shallow} from 'enzyme';
import RentalComponent from './RentalComponent';
import {MOCK_TITLE, MOCK_HOUSETYPE, MOCK_IMAGE, MOCK_COST, MOCK_STARS, MOCK_REVIEWS, MOCK_IS_SUPERHOST} from './TestMocks';

it('shallow renders Rental Component', () => {
    const wrapper = shallow(
        <RentalComponent
            title={MOCK_TITLE}
            houseType={MOCK_HOUSETYPE}
            image={MOCK_IMAGE}
            cost={MOCK_COST}
            stars={MOCK_STARS}
            reviews={MOCK_REVIEWS}
            isSuperhost={MOCK_IS_SUPERHOST}
         />
    );


    expect(wrapper).toMatchSnapshot();
});