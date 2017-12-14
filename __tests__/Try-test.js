import 'react-native';
import React from 'react';
import Try from '../subComponent/Try.js';

import renderer from 'react-test-renderer';

test('renderer correctly', () => {
    const tree = renderer.create(<Try />).toJSON();
    expect(tree).toMatchSnapshot();
});