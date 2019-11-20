import React from 'react';
import styles from './Menu.scss';
import PropTypes from 'prop-types';

class Menu extends React.Component {
  state = {
    menuListVisible: false,
  }

  static propTypes = {
    lists: PropTypes.array,
    onListClick: PropTypes.func,
    map: PropTypes.func,
  }

  render() {
    return (
      <div className={styles.component}>
        <i className="fas fa-bars" onClick={e => this.handleClick(e)}></i>
        {
          this.state.menuListVisible &&
          <div className={(this.state.menuListVisible ? styles.list : styles.hidden)}>
            <h4>Your lists</h4>
            <ul>
              { this.props.lists.map(list => <li key={list.key} onClick={() => this.props.onListClick(list.key)}><p>{list.title}</p></li>) }
            </ul>
          </div>
        }
      </div>
    );
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({
      menuListVisible: !prevState.menuListVisible,
    }));
  }

}

export default Menu;
