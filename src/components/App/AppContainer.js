import { connect } from 'react-redux';
import App from './App';
import { createAction_addList } from '../../redux/listsRedux';
import { createAction_changeSelectedList } from '../../redux/appRedux';

const mapStateToProps = state => ({
  title: state.app.title,
  subtitle: state.app.subtitle,
  lists: state.lists,
  selectedListId: state.app.selectedListId,
});

const mapDispatchToProps = (dispatch, props) => ({
  addList: title => {
    dispatch(createAction_addList(
      {
        id: props.id,
        title,
        columns: [],
        image: 'https://i.ibb.co/x863rML/black-and-white-blank-challenge-connect-262488-1.jpg',
      },
    ));
    dispatch(createAction_changeSelectedList(
      {
        selectedListId: props.id,
      }
    ));
  } ,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
