import FormAddCategory from './FormAddCategory';
import TopicList from './TopicList';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

Sidebar.propTypes = {
  children: PropTypes.node,
  onCategorySelect: PropTypes.func.isRequired,
};

const topicList = [
  { id: 1, name: 'House' },
  { id: 2, name: 'Kids' },
  { id: 3, name: 'Food' },
  { id: 4, name: 'Transport' },
  { id: 5, name: 'Education' },
  { id: 6, name: 'Health' },
];

export default function Sidebar({ onCategorySelect }) {
  const currentUser = JSON.parse(localStorage.getItem('loggedInUser'));

  const [categories, setCategories] = useState(() => {
    const storedCategories = localStorage.getItem(
      `categories_${currentUser.id}`
    );
    return storedCategories ? JSON.parse(storedCategories) : topicList;
  });

  useEffect(() => {
    localStorage.setItem(
      `categories_${currentUser.id}`,
      JSON.stringify(categories)
    );
  }, [categories, currentUser.id]);

  const [showAddCategory, setShowAddCategory] = useState(false);

  function handleShowAddCategory() {
    setShowAddCategory((show) => !show);
  }

  function handleAddCategory(category) {
    const newCategory = { id: Date.now(), name: category };
    setCategories((prevCategories) => [...prevCategories, newCategory]);
    setShowAddCategory(false);
  }

  function handleDeleteCategory(categoryToDelete) {
    setCategories((prevCategories) =>
      prevCategories.filter((category) => category.id !== categoryToDelete.id)
    );
  }

  function handleCategorySelect(category) {
    onCategorySelect(category.name);
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
