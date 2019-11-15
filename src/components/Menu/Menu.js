import React from 'react';
import styles from './Menu.scss';

class Menu extends React.Component {
  handleClick() {
    console.log('menu cicked');
  }

  render() {
    return (
      <div className={styles.component} onClick={this.handleClick}>
        <i className="fas fa-bars"></i>
      </div>
    );
  }

}

export default Menu;
