import * as React from 'react';
import { Button } from 'react_bazel_go_grpc/component/button/button';
import { add } from 'react_bazel_go_grpc/service/math/math';
import styles from './home.css';

export const Home = ({ children, icon }) => (
  <div className={styles.home}>
    <Button icon="💯">Click me {add(1, 2)}</Button>
  </div>
)
