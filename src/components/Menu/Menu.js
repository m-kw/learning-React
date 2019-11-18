import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Menu.scss';

class Menu extends React.Component {
  state = {
    menuListVisible: false,
  }

  render() {
    console.log('this', this);
    console.log('this.state', this.state.menuListVisible);
    return (
      <div className={styles.component} onClick={e => this.handleClick(e)}>
        <i className="fas fa-bars"></i>
        <div className={(this.state.menuListVisible ? styles.list : styles.hidden)}>
          <p>Lista list</p>
        </div>
      </div>
    );
  }

  handleClick(e) {
    e.preventDefault();
    console.log('this click', this);
    this.setState(prevState => (
      {
        menuListVisible: !prevState.menuListVisible,
      }
    ));
  }

}

export default Menu;
