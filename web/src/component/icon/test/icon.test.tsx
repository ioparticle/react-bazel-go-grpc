import * as React from 'react';
import renderer from 'react-test-renderer';
import { Icon } from '../icon';

describe('Icon', () => {
  it('renders correctly', () => {
    const icon = renderer
      .create(<Icon icon="test-icon"/>)
      .toJSON();
    expect(icon).toMatchSnapshot();
  });
});
