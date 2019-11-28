import { connect } from 'react-redux';
import SearchResults from './SearchResults';
import { getSearchedCards } from '../../redux/cardsRedux';

const mapStateToProps = (state) => ({
  cards: getSearchedCards(state),
});

export default connect(mapStateToProps)(SearchResults);
