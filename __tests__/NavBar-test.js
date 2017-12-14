import 'react-native';
import React from 'react';
import NavBar from '../subComponent/NavBar.js';

import renderer from 'react-test-renderer';

test('renderer correctly', () => {
    const tree = renderer.create(<NavBar />).toJSON();
    expect(tree).toMatchSnapshot();
});