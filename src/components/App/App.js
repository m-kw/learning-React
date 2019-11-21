import React from 'react';
import styles from './App.scss';
import List from '../List/ListContainer';
import Creator from '../Creator/Creator';
import Menu from '../Menu/Menu';
import PropTypes from 'prop-types';
import Search from '../Search/SearchContainer';

class App extends React.Component {

  static propTypes = {
    lists: PropTypes.array,
    title: PropTypes.node,
    subtitle: PropTypes.node,
    addList: PropTypes.func,
    selectedListId: PropTypes.string,
  }

  render() {
    const { lists, title, subtitle, addList, selectedListId } = this.props;
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>

        <Search />

        <Menu lists={lists} onListClick={this.handleListClick.bind(this)}/>


        {console.log('lists', lists)}
        {lists.filter(list => list.id === selectedListId).map(list => (
          <List key={list.id} {...list} />
        ))}



        <Creator action={addList} />

      </main>
    );
  }

  handleListClick(id) {
    const { selectedListId } = this.props;
    this.setState({
      selectedListId: id,
    });
    console.log('state', selectedListId);
  }
}

export default App;
