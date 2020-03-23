import * as React from 'react';
import { Icon } from 'react_bazel_go_grpc/component/icon/icon';
import styles from './button.css';

export const Button = ({ children, icon }: { icon: string }) => (
  <button className={styles.button}>
    {icon && <Icon icon={icon}/>}
    {children}
  </button>
)
