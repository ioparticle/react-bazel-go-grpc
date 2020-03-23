import * as React from 'react';
import styles from './icon.css';

export const Icon = ({ icon }: { icon: string }) => (
  <div className={styles.icon}>
    {icon}
  </div>
)
