import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../Home';

describe('Home component', () => {
  it('Renders correctly', () => {
    const tree = renderer
      .create(<Home />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
