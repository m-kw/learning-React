import React from 'react';
import styles from './SearchResults.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import Container from '../Container/Container';
//import Link from 'react-router-dom';

class SearchResults extends React.Component {
  static propTypes = {
    cards: PropTypes.array,
  };

  render() {
    const { cards } = this.props;
    return (
      <section className={styles.component}>
        <Container>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </Container>
      </section>
    );
  }
}

export default SearchResults;
