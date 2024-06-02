import { useState } from 'react';

import TopicItem from './TopicItem';
import PropTypes from 'prop-types';

TopicList.propTypes = {
  categories: PropTypes.array,
  onDelete: PropTypes.func,
};

export default function TopicList({ categories, onDelete }) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabClick = (index) => {
    setActiveTabIndex(index);
  };

  return (
    <ul className="sidebar-list">
      {categories.map((item, index) => (
        <TopicItem
          onDelete={onDelete}
          item={item}
          key={item.id}
          onClick={() => handleTabClick(index)}
          className={index === activeTabIndex ? 'active' : 'чцув'}
        />
      ))}
    </ul>
  );
}
