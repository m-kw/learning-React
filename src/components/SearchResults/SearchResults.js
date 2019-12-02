import React from 'react';
import styles from './SearchResults.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import Container from '../Container/Container';
import ListLink from '../ListLink/ListLink';

class SearchResults extends React.Component {
  static propTypes = {
    cards: PropTypes.array,
    lists: PropTypes.array,
  };

  render() {
    const { cards, lists } = this.props;
    return (
      <Container>
        <section className={styles.component}>
          <h2 className={styles.title}>Your search results</h2>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </section>

        {lists.map(list => (
          <ListLink key={list.id} {...list} />
        ))}
      </Container>
    );
  }
}

export default SearchResults;
