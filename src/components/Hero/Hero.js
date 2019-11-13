import React from 'react';
import styles from './Hero.scss';

const Hero = () => (
  <header class={styles.component}>
    <h2 class={styles.title}>Things to do</h2>
    <img src="https://i.ibb.co/x863rML/black-and-white-blank-challenge-connect-262488-1.jpg" class={styles.image} />
  </header>
);

export default Hero;
