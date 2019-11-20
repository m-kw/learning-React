import React from 'react';
import styles from './App.scss';
import List from '../List/ListContainer';
import Creator from '../Creator/Creator';
import Menu from '../Menu/Menu';
import PropTypes from 'prop-types';

class App extends React.Component {
  state = {
    image: 'https://i.ibb.co/x863rML/black-and-white-blank-challenge-connect-262488-1.jpg',
    selectedListId: 'list-1',
  }

  static propTypes = {
    lists: PropTypes.array,
    title: PropTypes.node,
    subtitle: PropTypes.node,
  }

  render() {
    const { lists, title, subtitle } = this.props;
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>

        <Menu lists={lists} onListClick={this.handleListClick.bind(this)}/>


        {lists.filter(listData => listData.id === this.state.selectedListId).map(listData => (
          <List key={listData.id} {...listData} />
        ))}



        <Creator action={title => this.addList(title)} />

      </main>
    );
  }

  handleListClick(id) {
    this.setState({
      selectedListId: id,
    });
  }

  addList(title) {
    this.setState(state => {
      const newKey = state.lists.length ? state.lists[state.lists.length - 1].key + 1 : 0;
      return (
        {
          lists: [
            ...state.lists,
            {
              key: newKey,
              title,
              columns: [],
              image: 'https://i.ibb.co/x863rML/black-and-white-blank-challenge-connect-262488-1.jpg',
            },
          ],
          selectedListKey: newKey,
        }
      );
    });
  }

}

export default App;
