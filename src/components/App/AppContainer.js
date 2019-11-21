import { connect } from 'react-redux';
import App from './App';
import { createAction_addList } from '../../redux/listsRedux';

const mapStateToProps = state => ({
  title: state.app.title,
  subtitle: state.app.subtitle,
  lists: state.lists,
  selectedListId: 'list-1',
});

const mapDispatchToProps = (dispatch, props) => ({
  addList: title => dispatch(createAction_addList(
    {
      listId: props.id,
      title,
      columns: [],
      image: 'https://i.ibb.co/x863rML/black-and-white-blank-challenge-connect-262488-1.jpg',
    },
  )),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);