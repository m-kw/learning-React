import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';

class Card extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
  }

  render() {
    return (
      <div className={styles.component}>
        {this.props.title}
      </div>
    )
  }
}

export default Card;
