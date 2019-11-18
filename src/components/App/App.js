import React from 'react';
import styles from './App.scss';
import List from '../List/List';
import { pageContents, appData } from '../../data/dataStore';
import Creator from '../Creator/Creator';
import Menu from '../Menu/Menu';

class App extends React.Component {
  state = {
    lists: this.props.lists || [],
    image: 'https://i.ibb.co/x863rML/black-and-white-blank-challenge-connect-262488-1.jpg',
    selectedListKey: 0,
  }

  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{pageContents.title}</h1>
        <h2 className={styles.subtitle}>{pageContents.subtitle}</h2>

        <Menu lists={this.state.lists} onListClick={this.handleListClick.bind(this)}/>

        {this.state.lists.filter(list => list.key === this.state.selectedListKey).map(({ key, ...listProps }) => (
          <List key={key} {...listProps}/>
        ))}

        <Creator action={title => this.addList(title)} />

      </main>
    )
  }

  handleListClick(key) {
    this.setState({
      selectedListKey: key,
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
            }
          ],
          selectedListKey: newKey
        }
      );
    })
  }

}

export default App;
