import React from 'react';
import styles from './Home.scss';
import ListLink from '../ListLink/ListLink';
import Creator from '../Creator/Creator';
import PropTypes from 'prop-types';

class Home extends React.Component {
  static propTypes = {
    lists: PropTypes.array,
    title: PropTypes.node,
    subtitle: PropTypes.node,
    addList: PropTypes.func,
    selectedListId: PropTypes.string,
  }

  render() {
    const { lists, title, subtitle, addList } = this.props;
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>

        {lists.map(list => (
          <ListLink key={list.id} {...list} />
        ))}

        <Creator action={addList} />

      </main>
    );
  }

  handleListClick() {
    console.log('props', this.props);
    console.log('selectedListId', this.props.selectedListId);
  }
}

export default Home;
