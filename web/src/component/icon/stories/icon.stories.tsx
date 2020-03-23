import * as React from 'react';
import { Icon } from '../icon';

export default { title: 'Icon' };

export const withText = () => (
  <Icon icon="text"/>
);

export const withEmoji = () => (
  <Icon icon="👍"/>
);
