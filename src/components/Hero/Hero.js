import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

const Hero = props => (
  <header class={styles.component}>
    <h2 class={styles.title}>{ReactHtmlParser(props.titleText)}</h2>
    <img src={props.image} class={styles.image} />
  </header>
);

Hero.propTypes = {
  titleText: PropTypes.node.isRequired,
  image: PropTypes.string,
};

export default Hero;
