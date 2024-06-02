import FormAddCategory from './FormAddCategory';
import TopicList from './TopicList';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

Sidebar.propTypes = {
  children: PropTypes.object,
  onCategorySelect: PropTypes.func,
};

const LOCAL_STORAGE_KEY = 'categories';

const topicList = [
  { id: 1, name: 'House' },
  { id: 2, name: 'Kids' },
  { id: 3, name: 'Food' },
  { id: 4, name: 'Transport' },
  { id: 5, name: 'Education' },
  { id: 6, name: 'Health' },
];

export default function Sidebar({ onCategorySelect }) {
  const [categories, setCategories] = useState(() => {
    const storedCategories = localStorage.getItem(LOCAL_STORAGE_KEY);
    return storedCategories ? JSON.parse(storedCategories) : topicList;
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(categories));
  }, [categories]);

  const [showAddCategory, setShowAddCategory] = useState(false);

  function handleShowAddCategory() {
    setShowAddCategory((show) => !show);
  }

  function handleAddCategory(category) {
    setCategories((prevCategories) => [...prevCategories, category]);
    setShowAddCategory(false);
  }

  function handleDeleteCategory(categoryToDelete) {
    setCategories((prevCategories) =>
      prevCategories.filter((category) => category.id !== categoryToDelete.id)
    );
  }

  function handleCategorySelect(category) {
    onCategorySelect(category);
  }
  return (
    <aside className="sidebar">
      <TopicList
        categories={categories}
        onDelete={handleDeleteCategory}
        onSelect={handleCategorySelect}
      />
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
