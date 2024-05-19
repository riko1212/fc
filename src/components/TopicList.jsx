import { useState } from 'react';

import TopicItem from './TopicItem';
import PropTypes from 'prop-types'

TopicList.propTypes = {
  categories: PropTypes.array,
}

export default function TopicList({ categories }) {

const [activeTabIndex, setActiveTabIndex] = useState(0);

const handleTabClick = (index) => {
  setActiveTabIndex(index);
};

  return (
    <ul className="sidebar-list">
      {categories.map((item, index) => (
        <TopicItem item={item} key={item.id}  onClick={() => handleTabClick(index)} className={index === activeTabIndex ? 'active' : 'чцув'} />
      ))}
    </ul>
  );
}
