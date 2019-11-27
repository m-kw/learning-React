import { connect } from 'react-redux';
import Home from './Home';
import { createAction_addList } from '../../redux/listsRedux';
import { createAction_changeSelectedList } from '../../redux/appRedux';
import shortid from 'shortid';

const mapStateToProps = state => ({
  title: state.app.title,
  subtitle: state.app.subtitle,
  lists: state.lists,
  selectedListId: state.app.selectedListId,
});

const mapDispatchToProps = (dispatch) => ({
  addList: (title) => {
    const id = shortid.generate();
    dispatch(createAction_addList(
      {
        id: id,
        title,
        columns: [],
        image: 'https://i.ibb.co/x863rML/black-and-white-blank-challenge-connect-262488-1.jpg',
      },
    ));
    dispatch(createAction_changeSelectedList(
      {
        selectedListId: id,
      }
    ));
  } ,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
