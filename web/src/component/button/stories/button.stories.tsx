import * as React from 'react';
import { Button } from '../button';

export default { title: 'Button' };

export const withText = () => (
  <Button>Hello Button</Button>
);

export const withEmoji = () => (
  <Button>😀 😎 👍 💯</Button>
);
