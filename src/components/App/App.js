import React from 'react';
import styles from './App.scss';
import List from '../List/List';

class App extends React.Component {
  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>My first React app</h1>
        <h2 className={styles.subtitle}>Hello world!</h2>

        <List title={['To-dos', <sup key="1">soon!</sup>]} imageSrc="https://i.ibb.co/x863rML/black-and-white-blank-challenge-connect-262488-1.jpg">

        </List>
      </main>
    )
  }
}

export default App;
