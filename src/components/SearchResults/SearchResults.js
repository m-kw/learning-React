import React from 'react';
import styles from './SearchResults.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import Container from '../Container/Container';

class SearchResults extends React.Component {
  static propTypes = {
    cards: PropTypes.array,
    searchString: PropTypes.string,
  };

  render() {
    const { cards } = this.props;
    console.log('SearchResults rendered');
    return (
      <section className={styles.component}>
        <Container>
          <div>
            <p>Test text</p>
            {cards.map(cardData => (
              <Card key={cardData.id} {...cardData} />
            ))}
          </div>
        </Container>
      </section>
    );
  }
}

export default SearchResults;
