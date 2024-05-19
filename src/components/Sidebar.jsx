import FormAddCategory from './FormAddCategory';
import TopicList from './TopicList';
import { useState } from 'react';
import PropTypes from 'prop-types'


Sidebar.propTypes = {
  children: PropTypes.object,
}

const topicList = [
  { id: 1, name: 'House' },
  { id: 2, name: 'Kids' },
  { id: 3, name: 'Food' },
  { id: 4, name: 'Transport' },
  { id: 5, name: 'Education' },
  { id: 6, name: 'Health' },
];

export default function Sidebar() {
  const [showAddCategory, setShowAddCategory] = useState(false);
  const [categories, setCategories] = useState(topicList);
  function handleShowAddCategory() {
    setShowAddCategory((show) => !show);
  }

  function handleAddCategory(category) {
    setCategories((categories) => [...categories, category]);
    setShowAddCategory(false);
  }
  return (
    <aside className="sidebar">
      <TopicList categories={categories} />
      {showAddCategory && <FormAddCategory onAddCategory={handleAddCategory} />}
      <button
        onClick={handleShowAddCategory}
        type="button"
        className={
          !showAddCategory ? 'add-category-btn' : 'add-category-btn close'
        }
      >
        {!showAddCategory ? 'Add category' : 'Close'}
      </button>
    </aside>
  );
}
