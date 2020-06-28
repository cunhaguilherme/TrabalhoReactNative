import React from 'react';
import { render } from 'react-native-testing-library';

import Season from './index.js';

test('should be render screen', async () => {
    const {baseElement} = render(<Season />);
    console.log(baseElement);
    expect(baseElement).toMatchSnapshot();
});