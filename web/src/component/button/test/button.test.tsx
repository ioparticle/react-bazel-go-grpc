import * as React from 'react';
import renderer from 'react-test-renderer';
import { Button } from '../button';

describe('Button', () => {
  it('renders correctly', () => {
    const button = renderer
      .create(<Button>Instagram</Button>)
      .toJSON();
    expect(button).toMatchSnapshot();
  });
});
