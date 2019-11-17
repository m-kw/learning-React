import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Menu.scss';

class Menu extends React.Component {
  state = {
    listVisible: false,
  }

  render() {
    console.log('this', this);
    return (
      <div className={styles.component} onClick={this.handleClick}>
        <i className="fas fa-bars"></i>
        <div className={styles.list + (this.state.listVisible ? + styles.shown : styles.list)} id="list">
          <p>Lista list</p>
        </div>
      </div>
    );
  }

  handleClick() {
    console.log('this click', this);
    this.setState( {
      listVisible: true,
    });
  }

}

export default Menu;
